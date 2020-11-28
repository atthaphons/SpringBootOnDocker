package com.example.ExamSpringBootDemo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.swing.text.View;
import java.sql.Time;
import java.util.Date;

@Data
@JsonIgnoreProperties
public class ProductModel {
    @JsonView(View.class)
    private long id;
    @JsonView(View.class)
    private String name;
    @JsonView(View.class)
    private String osVersion;
    @JsonView(View.class)
    private String antiVirus;
    @JsonView(View.class)
    private Date lastUpdate;
    @JsonView(View.class)
    private String ipAddress;


}
