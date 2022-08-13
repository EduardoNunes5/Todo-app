package br.com.todo.dto;

import br.com.todo.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRelatedDTO {

    private Long id;

    private String username;

    public UserRelatedDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
    }
}
