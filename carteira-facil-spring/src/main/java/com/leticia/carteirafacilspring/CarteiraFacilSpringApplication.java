package com.leticia.carteirafacilspring;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.leticia.carteirafacilspring.model.Cadastro;
import com.leticia.carteirafacilspring.model.GastoReceita;
import com.leticia.carteirafacilspring.repository.UsuarioRepository;
import com.leticia.carteirafacilspring.repository.GastoReceitaRepository;

@SpringBootApplication
public class CarteiraFacilSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarteiraFacilSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(
		@Autowired
		GastoReceitaRepository gastoRepository,
		@Autowired
		UsuarioRepository usuarioRepository
	){
		return  args -> {
			// gastoRepository.deleteAll();
			// cadastroRepository.deleteAll();

			// GastoReceita g = new GastoReceita();
			// g.setTipo("Gasto");
			// g.setData("12/06/2023");
			// g.setNome("Comida Japonesa");
			// g.setTipoGasto("Comida");
			// g.setValor(123.11);
			// g.setIdUsuario(1);

			// GastoReceita h = new GastoReceita();
			// h.setTipo("Gasto");
			// h.setData("7/09/2023");
			// h.setNome("Sapato Renner");
			// h.setTipoGasto("Calçado");
			// h.setValor(150.20);
			// h.setIdUsuario(1);

			// gastoRepository.save(g);
			// gastoRepository.save(h);

			// Cadastro usuario1 = new Cadastro();
			// usuario1.setNome("Leticia Silva");
			// usuario1.setEmail("leticia@email.com");
			// usuario1.setTelefone("439999999");
			// usuario1.setSenha("abc123");

			// Cadastro usuario2 = new Cadastro();
			// usuario2.setNome("Ana Carolina");
			// usuario2.setEmail("ana@email.com");
			// usuario2.setTelefone("112222222");
			// usuario2.setSenha("012345");

			// cadastroRepository.save(usuario1);
			// cadastroRepository.save(usuario2);
		};
	}
}
