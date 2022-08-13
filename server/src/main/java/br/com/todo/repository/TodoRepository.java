package br.com.todo.repository;

import br.com.todo.entity.Todo;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends UserDependentRepository<Todo, Long> {

}
