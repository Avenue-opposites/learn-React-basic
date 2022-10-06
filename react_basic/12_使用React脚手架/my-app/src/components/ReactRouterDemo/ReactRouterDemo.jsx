import React, { Suspense,memo } from 'react';
import { useNavigate, useRoutes } from "react-router-dom";
import style from "./ReactRouterDemo.module.css";
import routes from '../../routes';
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
                    </div>
                    <div className={style.content}>
                        <Suspense fallback={<h1>Loading...</h1>}>
                            {Routes}
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ReactRouterDemo);
