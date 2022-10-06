const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(
        createProxyMiddleware("/api1",{
            //代理目标地址
            target:"http://localhost:5000",
            //控制服务器收到的请求头中的host值,默认false,值为发送请求的地址,为true,值为代理端口地址
            changeOrigin:true,
            //去除请求前缀
            pathRewrite:{"^/api1":""}
        }),
        createProxyMiddleware("/api2",{
            target:"http://localhost:5001",
            changeOrigin:true,
            pathRewrite:{"^/api2":""}
        })
    );
}