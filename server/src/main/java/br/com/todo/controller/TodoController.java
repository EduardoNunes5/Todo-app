package br.com.todo.controller;


import br.com.todo.dto.TodoDTO;
import br.com.todo.entity.Todo;
import br.com.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("api/todos")
public class TodoController {

    @Autowired
    private TodoService service;

    @PostMapping
    public TodoDTO save(@RequestBody @Valid TodoDTO todo){
        return this.service.save(todo);
    }

    @GetMapping
    public Page<Todo> findAll(@PageableDefault Pageable pageable){
        return this.service.findAll(pageable);
    }

    @GetMapping("{id}")
    public TodoDTO getById(@PathVariable Long id){
        return this.service.findById(id);
    }

    @PutMapping("{id}")
    public TodoDTO put(@PathVariable Long id, @RequestBody TodoDTO todoForm){
        return this.service.put(id, todoForm);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
//        try {
//            this.repository.deleteById(id);
//            return ResponseEntity.ok().build();
//        }
//        catch(EmptyResultDataAccessException erdae){
//            return ResponseEntity.notFound().build();
//        }
        this.service.delete(id);
    }

}
