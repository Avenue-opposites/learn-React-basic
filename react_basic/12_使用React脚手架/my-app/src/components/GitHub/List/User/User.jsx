import React from 'react';

import style from "./User.module.css";
const User = ({html_url,avatar_url,login}) => {
    return (
            <li className={style.User}>
                <a href={html_url}>
                    <img src={avatar_url} alt="" />
                    <span>{login}</span>
                </a>
            </li>
    );
}

export default User;
