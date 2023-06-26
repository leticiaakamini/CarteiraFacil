package com.leticia.carteirafacilspring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.leticia.carteirafacilspring.model.Desejo;

@Repository
public interface DesejoRepository extends JpaRepository<Desejo, Long>{
    
    List<Desejo> buscarDesejos(@Param("idUsuario") Long idUsuario);
}
