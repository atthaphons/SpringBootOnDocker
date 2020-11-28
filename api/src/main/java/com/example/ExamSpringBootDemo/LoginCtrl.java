package com.example.ExamSpringBootDemo;


import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/login")
@Slf4j
public class LoginCtrl {
    @GetMapping("/go/{userid}/{pass}")
    public String helloSpringBoot(@PathVariable String userid,@PathVariable String pass) {
        log.info("id :"+userid);
        log.debug("pass :"+pass);
        String returnMasg = "COM001LOGIN0ERR";
        if((userid.equals("admin"))&&(pass.equals("1234"))){
            returnMasg="COM001LOGIN0INF";
        }
        return returnMasg;
    }
}
