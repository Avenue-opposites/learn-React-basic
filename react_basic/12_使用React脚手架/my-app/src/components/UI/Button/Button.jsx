import React from 'react';
import style from "./Button.module.css";
const Button = (props) => {
    const { type,children } = props;
    return (
        <button className={`${style[type] || style.defalut } `}>
            { children }
        </button>
    );
}

export default Button;
