package br.com.todo.dto;

import br.com.todo.entity.Todo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDTO {

    private Long id;

    @NotBlank
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