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

import com.leticia.carteirafacilspring.model.Desejo;
import com.leticia.carteirafacilspring.repository.DesejoRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/desejo")
@AllArgsConstructor
public class DesejoController {

    private DesejoRepository repository;

    @GetMapping
    public List<Desejo> listar(){
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Desejo> buscarPorId(@PathVariable Long id){
        return repository.findById(id)
            .map(desejoEncontrado -> ResponseEntity.ok().body(desejoEncontrado))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Desejo criar(@RequestBody Desejo desejo){
        return repository.save(desejo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Desejo> atualizar(@PathVariable Long id, @RequestBody Desejo desejo){
        return repository.findById(id)
            .map(desejoEncontrado -> {
                desejoEncontrado.setNome(desejo.getNome());
                desejoEncontrado.setEconomizar(desejo.getEconomizar());
                desejoEncontrado.setQuantiaEconomizada(desejo.getQuantiaEconomizada());
                desejoEncontrado.setValor(desejo.getValor());
                desejoEncontrado.setHospedagem(desejo.getHospedagem());
                desejoEncontrado.setAlimentacao(desejo.getAlimentacao());
                desejoEncontrado.setPassagem(desejo.getPassagem());
                desejoEncontrado.setTransporte(desejo.getTransporte());
                desejoEncontrado.setCompras(desejo.getCompras());
                desejoEncontrado.setLazer(desejo.getLazer());
                desejoEncontrado.setGastosExtras(desejo.getGastosExtras());
                desejoEncontrado.setBurocracia(desejo.getBurocracia());
                desejoEncontrado.setPrazo(desejo.getPrazo());

                Desejo atualizado = repository.save(desejoEncontrado);
                return ResponseEntity.ok().body(atualizado);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
     public ResponseEntity<Void> deletar(@PathVariable Long id){
        return repository.findById(id)
            .map(desejoEncontrado -> {
                repository.deleteById(id);
                return ResponseEntity.noContent().<Void>build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
