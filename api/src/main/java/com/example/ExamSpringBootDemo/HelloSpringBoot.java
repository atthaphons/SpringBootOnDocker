package com.example.ExamSpringBootDemo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1")
public class HelloSpringBoot {

    @GetMapping("/hello-springboot")
    public String helloSpringBoot() {
        return "Hello Spring Boot Rest API by Atth";
    }

}