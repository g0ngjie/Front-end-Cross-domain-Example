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
                /**
                 * // 允许跨域访问的域名：若有端口需写全（协议+域名+端口），若没有端口末尾不用加'/'
                 * response.setHeader("Access-Control-Allow-Origin", "*");
                 * //* 代办允许所有方法
                 * response.setHeader("Access-Control-Allow-Methods", "*");
                 * // Access-Control-Max-Age 用于 CORS 相关配置的缓存
                 * response.setHeader("Access-Control-Max-Age", "3600");
                 * // 提示OPTIONS预检时，后端需要设置的两个常用自定义头
                 * response.setHeader("Access-Control-Allow-Headers", "*");
                 * // 允许前端带认证cookie：启用此项后，上面的域名不能为'*'，必须指定具体的域名，否则浏览器会提示
                 * response.setHeader("Access-Control-Allow-Credentials", "true");
                 */
                // 暴露 头部信息
                .exposedHeaders("*");
                // 通过Access-Control-Allow-Origin响应头，就告诉了浏览器。如果请求我的资源的页面是我这个响应头里记录了的"源"，则不要拦截此响应，允许数据通行
                // Access-Control-Allow-Origin: http://example.com
                // Access-Control-Allow-Methods 请求方法
                // Access-Control-Max-Age 用来指定本次预检请求的有效期，单位为秒，，在此期间不用发出另一条预检请求
                // Access-Control-Allow-Headers 表明服务器允许请求中携带字段 它们始终是被支持的，不需要在这个首部特意列出
                // Access-Control-Allow-Credentials 意义是允许客户端携带验证信息 响应头用于在请求要求包含 credentials

    }

}
