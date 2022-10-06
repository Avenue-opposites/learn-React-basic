import React from 'react';
import { useSearchParams } from "react-router-dom";
import style from "./Detail.module.css";
const Detail = () => {
    const [search] = useSearchParams();
    const id = search.get("id");
    const title = search.get("title");
    const content = search.get("content");
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
