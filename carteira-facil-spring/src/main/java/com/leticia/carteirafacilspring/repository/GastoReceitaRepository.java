package com.leticia.carteirafacilspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.leticia.carteirafacilspring.model.GastoReceita;

@Repository
public interface GastoReceitaRepository extends JpaRepository<GastoReceita, Long> {
    
}
