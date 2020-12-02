package com.example.ExamSpringBootDemo.utils;

import org.springframework.http.MediaType;
import org.springframework.util.FileCopyUtils;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ResponseUtil {
    private ResponseUtil(){}
    public static void createJsonResponse(HttpServletResponse response, int httpResponseCode, ApiResponse<?> resObj) throws IOException {
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(httpResponseCode);
        FileCopyUtils.copy(resObj.toJson(),response.getWriter());
    }
}
