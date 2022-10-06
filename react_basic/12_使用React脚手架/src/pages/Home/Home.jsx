import React from 'react';
import style from "./Home.module.css";
import { Switch, Route } from "react-router-dom";
import MyNavLink from '../../components/ReactRouterDemo/MyNavLink/MyNavLink';
import News from './News/News';
import Message from "./Message/Message";
const Home = () => {
    const routeNav = {
        className: style.HomeRoute,
        activeClassName: style.HomeActive,
        to: ["/Home/News", "/Home/Message"],
    };
    return (
        <div className={style.HomeBasic}>
            <h2>Home</h2>
            <div>

                <div className={style.container}>
                    <MyNavLink {...routeNav}>
                        {["News", "Message"]}
                    </MyNavLink>
                </div>
                <Switch>
                    <Route path="/Home/News" component={News}></Route>
                    <Route path="/Home/Message" component={Message}></Route>
                </Switch>
            </div>
        </div>
    );
}

export default Home;
