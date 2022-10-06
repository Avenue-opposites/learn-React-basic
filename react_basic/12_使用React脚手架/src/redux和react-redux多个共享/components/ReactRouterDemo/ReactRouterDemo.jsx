import React from 'react';
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import style from "./ReactRouterDemo.module.css";
import Home from "../../pages/Home/Home";
import About from '../../pages/About/About';
import MyNavLink from './MyNavLink/MyNavLink';

const ReactRouterDemo = () => {
    const history = useHistory();
    const routeNav = {
        className:style.route,
        activeClassName:style.active,
        to:["/Home","/About"],
    };
    return (
        <div className="container">
            <div className={style.basic}>
                <h1>Vue Router Demo</h1>
                <div className={style.histroy}>
                    <button onClick={history.goBack}>后退</button>
                    <button onClick={history.goForward}>前进</button>
                </div >
                <div className={style.contentBox}>
                    <div className={style.nav}>
                        <MyNavLink {...routeNav}>
                            {
                                ["Home","About"]
                            }
                        </MyNavLink> 
                        {/* <NavLink className={style.route} activeClassName={style.active} to="/Home">Home</NavLink>
                        <NavLink className={style.route} activeClassName={style.active} to="/About">About</NavLink> */}
                        {/* <a className={style.active} href="#">Home</a>
                        <a href="#">About</a> */}
                    </div>
                    <div className={style.content}>
                        <Switch>
                            <Route  path="/Home" component={Home}></Route>
                            <Route  path="/About">
                                <About></About>
                            </Route>
                            <Redirect to="/Home"></Redirect>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactRouterDemo;
