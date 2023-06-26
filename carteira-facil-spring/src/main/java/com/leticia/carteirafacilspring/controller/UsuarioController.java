package com.leticia.carteirafacilspring.controller;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leticia.carteirafacilspring.model.Cadastro;
import com.leticia.carteirafacilspring.model.GastoReceita;
import com.leticia.carteirafacilspring.model.Usuario;
import com.leticia.carteirafacilspring.repository.UsuarioRepository;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RestController
@RequestMapping("/api/usuario")
@RequiredArgsConstructor
@Getter
@Setter
public class UsuarioController {

    @Autowired
    private final UsuarioRepository usuarioRepository;

    Usuario usuarioLogado = new Usuario();

    @GetMapping
    public List<Cadastro> listar(){
        return usuarioRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cadastro> encontrarPorId(@PathVariable Long id){
        return usuarioRepository.findById(id)
            .map(usuario -> ResponseEntity.ok().body(usuario))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/cadastro")
    public ResponseEntity<Cadastro> criarCadastro(@RequestBody Cadastro usuario){
        Cadastro usuarioCadastro = usuarioRepository.emailEncontrado((usuario.getEmail()));

        if (Objects.isNull(usuarioCadastro)) {
            usuarioRepository.save(usuario);
            return ResponseEntity.ok().body(usuario);
        } else {
            return ResponseEntity.status(422).build();
        }
    }  

    @PostMapping
    public ResponseEntity<Usuario> fazerLogin(@RequestBody Usuario usuario){
        Cadastro usuarioAutenticado = usuarioRepository.usuarioAutenticado(usuario.getEmail(), usuario.getSenha());

        if (Objects.isNull(usuarioAutenticado)) {
            return ResponseEntity.notFound().build();
        } else {
            usuario.setId(usuarioAutenticado.getId());
            
            usuarioLogado.setId(usuarioAutenticado.getId());
            usuarioLogado.setEmail(usuarioAutenticado.getEmail());
            usuarioLogado.setSenha(usuarioAutenticado.getSenha());

            return ResponseEntity.ok().body(usuario);
        }  
    }

    public Long buscarIdUsuario(){
        return usuarioLogado.getId();
    }

    
    // @PostMapping
    // public Boolean fazerLogin(@RequestBody Usuario usuario){
    //     Cadastro usuarioAutenticado = usuarioRepository.usuarioAutenticado(usuario.getEmail(), usuario.getSenha());

    //     if (Objects.isNull(usuarioAutenticado)) {
    //         return false;
    //     } else {
    //         usuario.setId(usuarioAutenticado.getId());
    //         setIdUsuario(usuario.getId());
    //         GastoReceita[] gastoReceita;

    //         return true;
    //     }  
    // }
}
