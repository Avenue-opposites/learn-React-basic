import React from 'react';
import style from "./Detail.module.css";
import { useLocation } from "react-router-dom";
const Detail = () => {
    const { state: { id, title, content } } = useLocation();
    return (
        <div className={style.DetailBasic}>
            <ul>
                <li>id：{id}</li>
                <li>title：{title}</li>
                <li>content：{content}</li>
            </ul>
        </div>
    );
}

export default Detail;
