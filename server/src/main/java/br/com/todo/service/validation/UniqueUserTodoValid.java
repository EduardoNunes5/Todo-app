package br.com.todo.service.validation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = UniqueUserTodoValidator.class)
@Target({ ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface UniqueUserTodoValid {

    String message() default "Já existe tarefa com este título para o usuário";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
