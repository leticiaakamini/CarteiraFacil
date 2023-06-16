package com.leticia.carteirafacilspring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Desejo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "tipo", nullable = false)
    private String tipo;

    @Column(name = "prazo", nullable = true)
    private String prazo;

    @Column(name = "economizar", nullable = false)
    private double economizar;

    @Column(name = "quantiaEconomizada", nullable = true)
    private double quantiaEconomizada;

    @Column(name = "valor", nullable = false)
    private double valor;

    @Column(name = "hospedagem", nullable = true)
    private double hospedagem;

    @Column(name = "alimentacao", nullable = true)
    private double alimentacao;

    @Column(name = "passagem", nullable = true)
    private double passagem;

    @Column(name = "transporte", nullable = true)
    private double transporte;

    @Column(name = "compras", nullable = true)
    private double compras;

    @Column(name = "lazer", nullable = true)
    private double lazer;

    @Column(name = "gastosExtras", nullable = true)
    private double gastosExtras;

    @Column(name = "burocracia", nullable = true)
    private double burocracia;
}
