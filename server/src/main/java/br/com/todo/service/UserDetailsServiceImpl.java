package br.com.todo.service;

import br.com.todo.dto.UserDTO;
import br.com.todo.entity.User;
import br.com.todo.exception.UserNotFoundException;
import br.com.todo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override

    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return this.userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException("Usuário não encontrado"));
    }

    public UserDTO save(UserDTO dto){
        User newUser = new User();
        newUser.setEmail(dto.getEmail());
        newUser.setUsername(dto.getUsername());
        newUser.setPassword(this.passwordEncoder.encode(dto.getPassword()));

        newUser = this.userRepository.save(newUser);
        return new UserDTO(newUser);
    }

    public List<UserDTO> findAll(){
        return this.userRepository.findAll().stream().map(UserDTO::new).collect(Collectors.toList());
    }

    public User getUserFromContext(){
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
     }

    public User getReferenceById(Long id){
        return this.userRepository.getReferenceById(id);
    }

    public User getLoggedInUserReference(){
        return this.userRepository.getReferenceById(getUserFromContext().getId());
    }

}


//    String token = JWT.create()
//            .withSubject(((User) auth.getPrincipal()).getUsername())
//            .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
//            .sign(Algorithm.HMAC512(SECRET.getBytes()));
