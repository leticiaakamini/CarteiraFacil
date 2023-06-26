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

@NamedQuery(name = "GastoReceita.buscarGastosReceitas", query = "select gr from GastoReceita gr where gr.idUsuario=:idUsuario")

@Getter
@Setter 
@Entity
@Table(name = "gastos_receitas")
public class GastoReceita {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "tipo", nullable = false)
    private String tipo;

    @Column(name = "data", nullable = false)
    private String data;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "tipoGasto", nullable = true)
    private String tipoGasto;

    @Column(name = "valor", nullable = false)
    private double valor;

    @Column(name = "id_usuario", nullable = false)
    private Long idUsuario;
}
