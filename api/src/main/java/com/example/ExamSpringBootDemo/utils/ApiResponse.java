package com.example.ExamSpringBootDemo.utils;
import lombok.Data;

@Data
public class ApiResponse<T> {
    private String messageCode;
    private T data;
    public String toJson(){
        return JsonUtil.toStringUsingJackson(this);
    }
}
