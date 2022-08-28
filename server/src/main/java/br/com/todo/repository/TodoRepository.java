package br.com.todo.repository;

import br.com.todo.entity.Todo;
import br.com.todo.entity.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TodoRepository extends UserDependentRepository<Todo, Long> {

    Optional<Todo> findByTitleAndUserId(String title, Long id);

}
