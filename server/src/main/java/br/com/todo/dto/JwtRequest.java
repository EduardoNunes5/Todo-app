package br.com.todo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtRequest {

    @NotNull
    private String username;

    @NotNull
    private String password;
}
