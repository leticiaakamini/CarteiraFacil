package com.leticia.carteirafacilspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.leticia.carteirafacilspring.model.Receita;

@Repository
public interface ReceitaRepository extends JpaRepository<Receita, Long>{
    
}
