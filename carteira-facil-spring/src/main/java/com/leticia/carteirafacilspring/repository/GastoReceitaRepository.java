package com.leticia.carteirafacilspring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.leticia.carteirafacilspring.model.GastoReceita;

@Repository
public interface GastoReceitaRepository extends JpaRepository<GastoReceita, Long> {

    List<GastoReceita> buscarGastosReceitas(@Param("idUsuario") Long idUsuario);
    
}
