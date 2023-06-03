package com.leticia.carteirafacilspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leticia.carteirafacilspring.model.Receita;
import com.leticia.carteirafacilspring.repository.ReceitaRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/receita")
@AllArgsConstructor
public class ReceitaController {

    private final ReceitaRepository receitaRepository;

    @GetMapping
    public List<Receita> listar(){
        return receitaRepository.findAll();
    }

    @PostMapping
    public Receita criar(@RequestBody Receita receita){
        return receitaRepository.save(receita);
    }
}
    

