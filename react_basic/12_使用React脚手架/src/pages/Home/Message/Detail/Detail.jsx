import React from 'react';
import style from "./Detail.module.css";
const Detail = ({location:{state:{id,title,content}} = {}}) => {
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
