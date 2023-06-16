package com.leticia.carteirafacilspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.leticia.carteirafacilspring.model.Desejo;

@Repository
public interface DesejoRepository extends JpaRepository<Desejo, Long>{
    
}
