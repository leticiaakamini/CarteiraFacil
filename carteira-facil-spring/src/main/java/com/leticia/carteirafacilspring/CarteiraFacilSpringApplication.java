package com.leticia.carteirafacilspring;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.leticia.carteirafacilspring.model.Cadastro;
import com.leticia.carteirafacilspring.model.GastoReceita;
import com.leticia.carteirafacilspring.repository.CadastroRepository;
import com.leticia.carteirafacilspring.repository.GastoReceitaRepository;

@SpringBootApplication
public class CarteiraFacilSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarteiraFacilSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(
		GastoReceitaRepository gastoRepository,
		CadastroRepository cadastroRepository
	){
		return  args -> {
			gastoRepository.deleteAll();
			cadastroRepository.deleteAll();

			GastoReceita g = new GastoReceita();
			g.setTipo("Gasto");
			g.setData("12/06/2023");
			g.setNome("Comida Japonesa");
			g.setTipoGasto("Comida");
			g.setValor(123.11);

			GastoReceita h = new GastoReceita();
			h.setTipo("Gasto");
			h.setData("20/05/2023");
			h.setNome("Sapato Renner");
			h.setTipoGasto("Calçado");
			h.setValor(150.20);

			gastoRepository.save(g);
			gastoRepository.save(h);

			Cadastro usuario1 = new Cadastro();
			usuario1.setNome("Leticia Silva");
			usuario1.setEmail("leticia@email.com");
			usuario1.setTelefone("4399999999");
			usuario1.setSenha("abc123");

			Cadastro usuario2 = new Cadastro();
			usuario2.setNome("Ana Carolina");
			usuario2.setEmail("ana@email.com");
			usuario2.setTelefone("11222222222");
			usuario2.setSenha("012345");

			cadastroRepository.save(usuario1);
			cadastroRepository.save(usuario2);
		};
	}
}
