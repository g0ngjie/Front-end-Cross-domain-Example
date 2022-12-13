# Front-end-Cross-domain-Example

Ajax 跨域测试用例

### 常见出现跨域的情况

- 双重跨域限制

  > 本地开发直接通过 ip 对接服务没有任何问题，后端部署到网关出现跨域
  > The 'Access-Control-Allow-Origin' header contains multiple values 'http://localhost:8080,http://localhost:8080 \*', but only one is allowed.

- 开发环境使用了代理

  > 例如 Vite 配置了 server.proxy，实际上是通过 node 做的反向代理

- 后端跨域限制
  > 主要跨域原因，后端限制了某些跨域限制
  > 例如：请求方法限制、请求域限制等

### 常见生产规避

> 在后端有做跨域限制的前提下

- 通过 Nginx、Apache 等类似服务做代理
- 同源
  > 前端静态文件放到服务端静态资源文件夹内，使其变动为同源，参考 project/src/main/resources/static

### 开发阶段避免跨域解决方案

- 通过类似 Vite 下的 server.proxy 配置代理
- 通过本地搭建服务做转发，例如 Nginx
- 通过浏览器插件方式
