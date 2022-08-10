package br.com.todo.controller;


import br.com.todo.entity.Todo;
import br.com.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
@RequestMapping("api/todos")
public class TodoController {

    @Autowired
    private TodoRepository repository;


    @PostMapping
    public Todo save(@RequestBody Todo todo){
        return this.repository.save(todo);
    }

    @GetMapping
    public Page<Todo> findAll(@PageableDefault Pageable pageable){
        return this.repository.findAll(pageable);
    }

    @GetMapping("{id}")
    public Todo getById(@PathVariable Long id){
        return this.repository.findById(id).get();
    }

    @PutMapping("{id}")
    public ResponseEntity<Todo> put(@PathVariable Long id, @RequestBody Todo todoForm){
        try {
            Todo todo = this.repository.getReferenceById(id);
            todo.setDescription(todoForm.getDescription());
            todo.setTitle(todoForm.getTitle());
            return ResponseEntity.ok(this.repository.save(todo));
        }
        catch (EntityNotFoundException enfe) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        try {
            this.repository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        catch(EmptyResultDataAccessException erdae){
            return ResponseEntity.notFound().build();
        }
    }
}
