const express = require("express");

const app = express();

app.use((res,req,next) => {
    console.log(`有人请求了,地址为${res.url},${res.headers.host}`);
    next();
});

app.get("/students",(request,response) =>{
    const students = [
        {id:"001",name:"小花",age:19},
        {id:"002",name:"小龙",age:39},
        {id:"003",name:"小志",age:29},
    ];
    // response.setHeader("Access-Control-Allow-Origin","*");
    response.send(students);
});

app.listen(5000,(error) => {
    if(!error) {
        console.log("服务启动成功,地址为:http://localhost:5000/students");
    }
});