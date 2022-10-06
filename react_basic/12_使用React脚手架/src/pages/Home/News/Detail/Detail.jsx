import React from 'react';
import style from "./Detail.module.css";
const Detail = ({location:{search}}) => {
    const query = (str) => {
        const obj = {};
        if(!str) return {};
        str = str.substring(1).split(/&/).map(item => {
            return item.split(/=/);
        });
        str.forEach(item => {
            obj[item[0]] = decodeURI(item[1]);
        });
        return obj; 
    };
    const {id,title,content} = query(search);
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
