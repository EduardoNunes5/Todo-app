package br.com.todo.service;


import br.com.todo.dto.TodoDTO;
import br.com.todo.entity.Todo;
import br.com.todo.repository.TodoRepository;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    public void delete(Long id) {
        try {
            this.todoRepository.deleteById(id);
        }
        catch(EmptyResultDataAccessException e){
            throw new EntityNotFoundException("Id not found: " + id);
        }
    }

    public TodoDTO put(Long id, TodoDTO todoForm) {
        todoForm.setId(id);
        Todo todo = this.todoRepository.findById(todoForm.getId())
                .orElseThrow(() -> new EntityNotFoundException("Tarefa não encontrada!"));

        this.fromDTOtoEntity(todoForm, todo);
        todo = this.todoRepository.save(todo);
        return new TodoDTO(todo);
    }

    public TodoDTO findById(Long id) {
        Todo todo = this.todoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Tarefa não encontrada!"));
        return new TodoDTO(todo);
    }

    public Page<Todo> findAll(Pageable pageable) {
        return this.todoRepository.findAll(pageable);
    }

     public TodoDTO save(TodoDTO dto) {
        dto.setId(null);
        Todo todo = new Todo();
        this.fromDTOtoEntity(dto, todo);
        todo = this.todoRepository.save(todo);
        return new TodoDTO(todo);
    }

    private void fromDTOtoEntity(TodoDTO dto, Todo todo){
        todo.setTitle(dto.getTitle());
        todo.setDescription(dto.getDescription());
        todo.setUser(this.userDetailsService.getUserFromContext());
    }

}
