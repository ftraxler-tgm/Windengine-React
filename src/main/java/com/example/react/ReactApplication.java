package com.example.react;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ReactApplication {

    public static final Logger log = LoggerFactory.getLogger(ReactApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(ReactApplication.class, args);
    }


    @Bean
    public CommandLineRunner loadData(WindengineRepository repository) {

        return (args) -> {
            //save a couple of customers

            //We don not need this anymore because we have a real database now and the data we insert will be save therefor we would
            // add the same values at every start

                        /*
                        repository.save(new Customer("Jack", "Bauer", LocalDate.now(), "ftraxler@student.tgm.ac.at"));
                        repository.save(new Customer("Chloe", "O'Brian",LocalDate.now(),"test@hotmail.com"));
                        repository.save(new Customer("Kim", "Bauer",LocalDate.now(),"david@gmx.at"));
                        repository.save(new Customer("David", "Palmer",LocalDate.now(),"fabian@gmail.com"));
                        repository.save(new Customer("Michelle", "Dessler",LocalDate.now(),"blabla@google.com"));
                        */


            // fetch all customers
            log.info("Windengines found with findAll():");
            log.info("-------------------------------");
            int number = 0;
		

	    for (Windengine customer : repository.findAll()) {
                //log.info(customer.toString());
		number++;
            }
	    log.info(number+ " Windengines found");
            log.info("");


        };
    }

}
