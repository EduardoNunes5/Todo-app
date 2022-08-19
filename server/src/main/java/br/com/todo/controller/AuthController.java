package br.com.todo.controller;

import br.com.todo.dto.JwtRequest;
import br.com.todo.dto.JwtResponse;
import br.com.todo.entity.User;
import br.com.todo.service.JwtUtil;
import br.com.todo.service.UserDetailsServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/authenticate")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @PostMapping
    public JwtResponse authenticate(@RequestBody @Valid JwtRequest jwtRequest) throws Exception{
        Authentication auth = this.authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
        User userDetails = (User) auth.getPrincipal();
        String token = this.jwtUtil.generateAccessToken(userDetails);
        return new JwtResponse(token);
    }
    private Authentication authenticate(String username, String password){
        return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    }
}
