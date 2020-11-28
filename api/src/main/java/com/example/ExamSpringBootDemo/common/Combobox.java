package com.example.ExamSpringBootDemo.common;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;
import org.springframework.web.servlet.View;

@Data
@JsonIgnoreProperties
public class Combobox {
    @JsonView(View.class)
    private String value;
    @JsonView(View.class)
    private String name;
}
