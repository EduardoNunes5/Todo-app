package br.com.todo.controller;

import br.com.todo.dto.UserDTO;
import br.com.todo.repository.UserRepository;
import br.com.todo.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private UserDetailsServiceImpl userDetailsService;


    @PostMapping
    public UserDTO save(@RequestBody @Valid UserDTO userDTO){
        return this.userDetailsService.save(userDTO);
    }

}
