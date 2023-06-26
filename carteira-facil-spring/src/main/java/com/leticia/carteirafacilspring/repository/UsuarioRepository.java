package com.leticia.carteirafacilspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.leticia.carteirafacilspring.model.Cadastro;

@Repository
public interface UsuarioRepository extends JpaRepository<Cadastro, Long>{
    
    Cadastro emailEncontrado(@Param("email") String email);
    Cadastro usuarioAutenticado(@Param("email") String email, @Param("senha") String senha);

}
