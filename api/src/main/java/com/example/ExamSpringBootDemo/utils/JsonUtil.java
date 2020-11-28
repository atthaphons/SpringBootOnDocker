package com.example.ExamSpringBootDemo.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.Reader;

public final class JsonUtil {
    private JsonUtil(){}
    private static final ObjectMapper OBJECT_MAPPER_SINGLETON = new ObjectMapper();

    public static String toStringUsingJackson(final Object object) {
        try {
            return OBJECT_MAPPER_SINGLETON.writeValueAsString(object);
        } catch (final JsonProcessingException e) {
            return String.valueOf(object);
        }
    }

    public static <T> T jsonToObject(String jsonString, Class<T> clazz) {
        T obj = null;
        try {
            obj = OBJECT_MAPPER_SINGLETON.readValue(jsonString, clazz);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return obj;
    }
    public static <T> T jsonToObject(Reader reader, Class<T> clazz) {
        T obj = null;
        try {
            obj = OBJECT_MAPPER_SINGLETON.readValue(reader,clazz);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return obj;
    }
}
