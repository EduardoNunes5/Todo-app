package br.com.todo.repository;

import br.com.todo.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;
import java.util.Optional;

@NoRepositoryBean
public interface UserDependentRepository<T, ID> extends JpaRepository<T, ID> {

    @Override
    @Query(value = "select t from #{#entityName} t where t.user = ?#{principal} and t.id=?1")
    Optional<T> findById(ID id);

    @Override
    @Query(value = "select t from #{#entityName} t where t.user = ?#{principal}")
    List<T> findAll();

    @Override
    @Query(value = "select t from #{#entityName} t where t.user = ?#{principal}")
    Page<T> findAll(Pageable pageable);

    @Override
    @Query(value = "delete from #{#entityName} t where t.user = ?#{principal} and t = ?1")
    @Modifying
    void delete(T entity);

    @Override
    @Query(value = "delete from #{#entityName} t where t.user = ?#{principal} and t.id = ?1")
    @Modifying
    void deleteById(ID id);

}
