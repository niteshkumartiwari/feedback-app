package com.feedloop.app.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestResource {
    @GetMapping("/")
    public String hello(){
        return "Hello Noob!";
    }

    @GetMapping("/restricted")
    public String restricted(){
        return "Hello restricted Noob!";
    }
}
