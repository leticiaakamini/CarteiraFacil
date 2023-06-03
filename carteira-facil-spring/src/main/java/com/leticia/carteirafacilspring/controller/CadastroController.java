package com.leticia.carteirafacilspring.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leticia.carteirafacilspring.model.Cadastro;
import com.leticia.carteirafacilspring.repository.CadastroRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cadastro")
@AllArgsConstructor
public class CadastroController {

    private final CadastroRepository cadastroRepository;

    @GetMapping
    public List<Cadastro> listar(){
        return cadastroRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cadastro> encontrarPorId(@PathVariable Long id){
        return cadastroRepository.findById(id)
            .map(record -> ResponseEntity.ok().body(record))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Cadastro criar(@RequestBody Cadastro cadastro){
        return cadastroRepository.save(cadastro);
    }
    
}
