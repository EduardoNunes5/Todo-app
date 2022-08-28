package br.com.todo.controller;


import br.com.todo.dto.TodoDTO;
import br.com.todo.dto.UserDTO;
import br.com.todo.dto.UserRelatedDTO;
import br.com.todo.entity.Todo;
import br.com.todo.entity.User;
import br.com.todo.repository.TodoRepository;
import br.com.todo.service.TodoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.TestingAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(TodoController.class)
@AutoConfigureMockMvc(addFilters = false)
public class TodoControllerTest {

    @Autowired
    private MockMvc mvc;
    @MockBean
    private TodoService service;

    @MockBean
    private TodoRepository repository;

    @Autowired
    private ObjectMapper mapper;

    private long duplicateUserTodoId;

    private User user;

    private TodoDTO todoDTO;

    @BeforeEach
    void setUp() {

        this.duplicateUserTodoId = 2L;
        this.user = new User(this.duplicateUserTodoId, "username", "password", "email@test.com");
        this.todoDTO = new TodoDTO(new Todo(null, "title test", "description test", user));

        when(repository.findByTitleAndUserId(any(String.class), eq(this.duplicateUserTodoId)))
                .thenReturn(Optional.of(new Todo()));

        when(repository.findByTitleAndUserId(any(String.class), eq(1L)))
                .thenReturn(Optional.empty());

        when(service.save(any())).thenReturn(todoDTO);
    }

    @Test
    void whenPostWithDuplicateTitleThenShouldReturnBadRequest() throws Exception {

        SecurityContextHolder.getContext().setAuthentication(
                new TestingAuthenticationToken(user, null)
        );

        String body = mapper.writeValueAsString(this.todoDTO);

        mvc.perform(post("/api/todos")
                .content(body)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    void whenPostValidTodoThenShouldReturnStatusCreated() throws Exception {
        User user = new User(1L, "username", "password", "email@test.com");
        TodoDTO todoDTO = new TodoDTO(new Todo(null, "title test", "description test", user));
        String body = mapper.writeValueAsString(todoDTO);

        SecurityContextHolder.getContext().setAuthentication(
                new TestingAuthenticationToken(user, null)
        );
        mvc.perform(post("/api/todos")
                        .content(body)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
    }
}
