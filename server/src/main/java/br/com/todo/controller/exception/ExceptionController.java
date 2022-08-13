package br.com.todo.controller.exception;

import br.com.todo.exception.CustomErrorResponse;
import br.com.todo.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionController {



    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public CustomErrorResponse userNotFoundException(UserNotFoundException unfe){
        return CustomErrorResponse.builder()
                .message(unfe.getMessage())
                .build();
    }

    @ExceptionHandler(BadCredentialsException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public CustomErrorResponse badCredentialsException(BadCredentialsException bce){
        return CustomErrorResponse.builder()
                .message("Usuário ou senha inválido!")
                .build();
    }
}
