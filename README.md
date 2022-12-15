# Front-end-Cross-domain-Example

简单的 Ajax 跨域测试用例，宏观了解前后端对接的那些事，通过场景测试模拟跨域。


- 跨域是因为违反了同源策略
- 跨域限制只存在于浏览器端


### 常见出现跨域的情况

- 双重跨域限制

  > 本地开发直接通过 ip 对接服务没有任何问题，后端部署到网关出现跨域
  > 
  > 实际上后端出现了双重跨域配置，这种情况下，前端也是无法使用接口的
  > 
  > `The 'Access-Control-Allow-Origin' header contains multiple values 'http://localhost:8080,http://localhost:8080 \*', but only one is allowed.`

- 开发环境使用了代理

  > 例如 Vite 配置了 `server.proxy`，实际上是通过 Node 做的反向代理，打包到生产遇到跨域问题

- 后端跨域限制
  > 主要跨域原因。后端限制了某些跨域限制
  > 例如：请求方法限制、请求域限制等

### 常见生产规避手段

- 后端修改限制
  > **划重点**: 通常情况下前端无需处理

- 在后端有做跨域限制的前提下
  - 通过 Nginx、Apache、Caddy 等类似服务做代理
  - 同源
    > 前端静态文件放到服务端静态资源文件夹内，使其变动为同源，参考 `project/src/main/resources/static`


### 开发阶段避免跨域解决方案
  > 部分方案只是可行，或用来验证一些异常时使用的临时手段，避免过分依赖

- 通过类似 Vite 下的 `server.proxy` 配置代理
- 通过本地搭建服务做转发，例如 Nginx、Node、Caddy
- 通过浏览器插件方式
- 浏览器以Chrome为例，可以关闭同源安全模式 （一般不用）
