package com.enpm613.getsatpro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@EnableJpaRepositories
public class GetsatproApplication {
		
	
	@RequestMapping("/index")
	public String index() {
		return "This is first Sprong boot application"; 
	}
	
	public static void main(String[] args) {
		SpringApplication.run(GetsatproApplication.class, args);
	}

}
