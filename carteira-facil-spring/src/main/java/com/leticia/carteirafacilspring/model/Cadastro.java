package com.leticia.carteirafacilspring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@NamedQuery(name = "Cadastro.emailEncontrado", query = "select c from Cadastro c where c.email=:email")
@NamedQuery(name = "Cadastro.usuarioAutenticado", query = "select c from Cadastro c where c.email=:email and c.senha=:senha")

@Getter
@Setter
@Entity
@Table(name = "usuarios")
public class Cadastro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "telefone", nullable = true)
    private String telefone;

    @Column(name = "senha", nullable = false)
    private String senha;
    
}
