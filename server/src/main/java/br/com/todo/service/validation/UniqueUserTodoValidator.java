package br.com.todo.service.validation;

import br.com.todo.entity.Todo;
import br.com.todo.entity.User;
import br.com.todo.repository.TodoRepository;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;


public class UniqueUserTodoValidator implements ConstraintValidator<UniqueUserTodoValid, String> {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Todo> todo = this.todoRepository.findByTitleAndUserId(s, user.getId());

        return todo.isEmpty();
    }
}
