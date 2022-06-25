package com.twrobel.board.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
public class SimpleTestController {

    @GetMapping("/hello")
    public String sayHello() {

        return "Hello, server time: " + LocalDateTime.now().toString();
    }
}
