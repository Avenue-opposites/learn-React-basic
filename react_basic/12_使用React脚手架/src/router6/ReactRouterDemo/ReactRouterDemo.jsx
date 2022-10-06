import React, { Suspense } from 'react';
import { useNavigate, useRoutes } from "react-router-dom";
import style from "./ReactRouterDemo.module.css";
import routes from '../../routes';
// import Home from "../../pages/Home/Home";
// import About from '../../pages/About/About';
import MyNavLink from './MyNavLink/MyNavLink';

const ReactRouterDemo = () => {
    const navigate = useNavigate();
    const Routes = useRoutes(routes);
    const routeNav = {
        basicClassName: style.route,
        activeClassName: style.active,
        to: ["/Home", "/About"],
    };
    return (
        <div className="container">
            <div className={style.basic}>
                <h1>Vue Router Demo</h1>
                <div className={style.histroy}>
                    <button onClick={() => navigate(-1)}>后退</button>
                    <button onClick={() => navigate(1)}>前进</button>
                </div >
                <div className={style.contentBox}>
                    <div className={style.nav}>
                        <MyNavLink {...routeNav}>
                            {
                                ["Home", "About"]
                            }
                        </MyNavLink>
                        {/* <NavLink className={style.route} activeClassName={style.active} to="/Home">Home</NavLink>
                        <NavLink className={style.route} activeClassName={style.active} to="/About">About</NavLink> */}
                        {/* <a className={style.active} href="#">Home</a>
                        <a href="#">About</a> */}
                    </div>
                    <div className={style.content}>
                        <Suspense fallback={<h1>Loading...</h1>}>
                            {/* <Routes>
                                <Route path="/Home" element={<Home></Home>}></Route>
                                <Route path="/About" element={<About></About>}></Route>
                                <Route path="/" element={<Navigate to="/Home"></Navigate>}></Route>
                            </Routes> */}
                            {Routes}
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactRouterDemo;
