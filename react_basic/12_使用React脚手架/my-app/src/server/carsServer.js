const express = require("express");

const app = express();

app.use((res,req,next) => {
    console.log(`有人请求了,地址为${res.url},${res.headers.host}`);
    next();
});

app.get("/cars",(request,response) =>{
    const cars = [
        {id:"001",brand:"兰博基尼",price:200},
        {id:"002",brand:"玛莎拉蒂",price:190},
        {id:"003",brand:"特斯拉",price:180},
    ];
    // response.setHeader("Access-Control-Allow-Origin","*");
    response.send(cars);
});

app.listen(5001,(error) => {
    if(!error) {
        console.log("服务启动成功,地址为:http://localhost:5001/students");
    }
});