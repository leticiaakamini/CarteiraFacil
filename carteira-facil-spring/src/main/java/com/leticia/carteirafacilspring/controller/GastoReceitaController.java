package com.leticia.carteirafacilspring.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leticia.carteirafacilspring.model.GastoReceita;
import com.leticia.carteirafacilspring.repository.GastoReceitaRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/gasto-receita")
@AllArgsConstructor
public class GastoReceitaController {
    
    private final GastoReceitaRepository repository;

    @GetMapping
    public List<GastoReceita> listar(){
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<GastoReceita> buscarPorId(@PathVariable Long id){
        return repository.findById(id)
            .map(gastoReceitaEncontrado -> ResponseEntity.ok().body(gastoReceitaEncontrado))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public GastoReceita criar(@RequestBody GastoReceita gastoReceita){
        return repository.save(gastoReceita);
    }

    @PutMapping("/{id}")
    public ResponseEntity<GastoReceita> atualizar(@PathVariable Long id, @RequestBody GastoReceita gastoReceita){
        return repository.findById(id)
            .map(gastoReceitaEncontrado -> {
                gastoReceitaEncontrado.setNome(gastoReceita.getNome());
                gastoReceitaEncontrado.setData(gastoReceita.getData());
                gastoReceitaEncontrado.setTipoGasto(gastoReceita.getTipoGasto());
                gastoReceitaEncontrado.setValor(gastoReceita.getValor());
                GastoReceita atualizado = repository.save(gastoReceitaEncontrado);
                return ResponseEntity.ok().body(atualizado);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        return repository.findById(id)
            .map(gastoReceitaEncontrado -> {
                repository.deleteById(id);
                return ResponseEntity.noContent().<Void>build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
