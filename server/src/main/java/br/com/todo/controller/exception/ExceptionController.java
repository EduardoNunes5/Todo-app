package br.com.todo.controller.exception;

import br.com.todo.exception.CustomErrorResponse;
import br.com.todo.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;

@RestControllerAdvice
public class ExceptionController {



    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public CustomErrorResponse userNotFoundException(UserNotFoundException unfe){
        return CustomErrorResponse.builder()
                .message(unfe.getMessage())
                .build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public CustomErrorResponse methodArgumentNotValidException(MethodArgumentNotValidException manve){
        BindingResult result = manve.getBindingResult();
        List<FieldError> fieldErrors = result.getFieldErrors();

        return  CustomErrorResponse.builder()
                .message(fieldErrors.get(0).getDefaultMessage())
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
