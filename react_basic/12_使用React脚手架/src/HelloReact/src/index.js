//引入React
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom/client';
//引入基本样式
import './index.css';
//引入App组件
import App from './App';
// 引入性能检测函数
import reportWebVitals from './reportWebVitals';

//创建React根节点
const root = ReactDOM.createRoot(document.getElementById('root'));

//渲染
root.render(
  // 检查React不推荐的API,并提示
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
