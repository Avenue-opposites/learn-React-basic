import React from 'react';
import style from "./Home.module.css";
import { Outlet } from "react-router-dom";
import MyNavLink from '../../components/ReactRouterDemo/MyNavLink/MyNavLink';
// import routes from "../../routes";
// import News from './News/News';
// import Message from "./Message/Message";
const Home = () => {
    const routeNav = {
        basicClassName: style.HomeRoute,
        activeClassName: style.HomeActive,
        to: ["News", "Message"],
    };
    // const Routes = useRoutes(routes);
    return (
        <div className={style.HomeBasic}>
            <h2>Home</h2>
            <div>
                <div className={style.container}>
                    <MyNavLink {...routeNav}>
                        {["News", "Message"]}
                    </MyNavLink>
                </div>
                <Outlet></Outlet>
                {/* <Routes>
                    <Route path="/Home/News" element={News}></Route>
                    <Route path="/Home/Message" element={Message}></Route>
                </Routes> */}
            </div>
        </div>
    );
}

export default Home;
