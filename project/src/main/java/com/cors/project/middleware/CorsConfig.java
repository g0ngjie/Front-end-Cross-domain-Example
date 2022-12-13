package com.cors.project.middleware;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/cors/**")
                // 是否发送Cookie
                .allowCredentials(true)
                // 放行 原始域
                .allowedOriginPatterns("*")
                // 放行 方法
                .allowedMethods(new String[]{"GET", "POST", "PUT", "DELETE"})
                // 放行 原始请求头部信息
                .allowedHeaders("*")
                // 暴露 头部信息
                .exposedHeaders("*");
    }

}
