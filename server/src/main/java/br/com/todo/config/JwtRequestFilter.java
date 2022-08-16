package br.com.todo.config;

import br.com.todo.entity.User;
import br.com.todo.exception.CustomErrorResponse;
import br.com.todo.exception.UserNotFoundException;
import br.com.todo.service.JwtUtil;
import br.com.todo.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");
        String username;
        String token;

        if(authHeader != null && authHeader.startsWith("Bearer")){
            token = authHeader.substring(7);

            username = jwtUtil.getSubject(token);
            if(username != null && SecurityContextHolder.getContext().getAuthentication() == null){
                try {
                    User userDetails = this.userDetailsService.loadUserByUsername(username);
                    if(jwtUtil.validateToken(token, userDetails)){
                        UsernamePasswordAuthenticationToken userToken = new UsernamePasswordAuthenticationToken(userDetails,null, userDetails.getAuthorities());
                        userToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(userToken);
                    }
                }
                catch(UserNotFoundException unfe){
                    CustomErrorResponse errorResponse = new CustomErrorResponse(unfe.getMessage());
                    response.setStatus(HttpStatus.UNAUTHORIZED.value());
                    response.getWriter().write(convertObjectToJson(errorResponse));
                }
            }
        }
        filterChain.doFilter(request, response);
    }

    public String convertObjectToJson(Object object) throws JsonProcessingException {
        if (object == null) {
            return null;
        }
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(object);
    }
}
