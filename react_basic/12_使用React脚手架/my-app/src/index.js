//引入React
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

//引入基本样式
import './index.css';
//引入App组件
import App from './App';



//创建React根节点
const root = ReactDOM.createRoot(document.getElementById('root'));

//初始化
root.render(
  <Provider store={store}>
    {/* React严格模式,有助于开发调试 ,检查React不推荐的API,并提示*/}
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);


//订阅store,当redux中状态改变就自动渲染(使用redux)
// store.subscribe(() => {
//   //渲染
//   root.render(
//     // 检查React不推荐的API,并提示
//     <React.StrictMode>
//       <Router>
//         <App />
//       </Router>
//     </React.StrictMode>
//   );

// });
