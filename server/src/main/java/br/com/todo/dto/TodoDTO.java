package br.com.todo.dto;

import br.com.todo.entity.Todo;
import br.com.todo.service.validation.UniqueUserTodoValid;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDTO {

    private Long id;

    @NotBlank
    @UniqueUserTodoValid
    private String title;

    private String description;

    @NotNull
    private UserRelatedDTO user;

    public TodoDTO(Todo todo){
        this.id = todo.getId();
        this.title = todo.getTitle();
        this.description = todo.getDescription();
        this.user = new UserRelatedDTO(todo.getUser());
    }
}
