// import { lazy } from "react";
import { Navigate } from "react-router-dom";
import News from "../pages/Home/News/News";
import Message from "../pages/Home/Message/Message";
import NDetail from "../pages/Home/News/Detail/Detail";
import MDetail from "../pages/Home/Message/Detail/Detail";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
//懒加载
// const Home = lazy(() => import("../pages/Home/Home"));
// const About = lazy(() => import("../pages/About/About"));

//配置路由表
const routes = [
    {
        path:"/Home",
        element:<Home></Home>,
        children:[
            {
                path:"News",
                element:<News></News>,
                children:[
                    {
                        path:"Detail",
                        element:<NDetail></NDetail>
                    },
                ]
            },
            {
                path:"Message",
                element:<Message></Message>,
                children:[
                    {
                        path:"Detail",
                        element:<MDetail></MDetail>
                    }
                ]
            }
        ]
    },
    {
        path:"/About",
        element:<About></About>
    },
    {
        path:"/",
        element:<Navigate to="/Home"></Navigate>
    }
];

export default routes;