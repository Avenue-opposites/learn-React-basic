import React from 'react';
//引入创建行为对象
import {
    increment,
    decrement,
    incrementAsync
} from "../../redux/actions/counter";
//引入react-redux
import { connect } from "react-redux";
//引入antd
import { Button } from "antd";
import style from "./Count.module.css";

//UI组件
const CountUI = ({ n, add, minus, waitAdd }) => {
    const select = React.createRef();
    return (
        <div className={style.basic}>
            <h1>
                click <span>{n}</span> times
            </h1>
            <select ref={select}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <div>
                <Button onClick={() => { add(select.current.value * 1) }} type='primary'>+</Button>
                <Button onClick={() => { minus(select.current.value * 1) }} type='primary'>-</Button>
            </div>
            <div>
                <Button onClick={() => {
                    if (n % 2 === 0) {
                        add(select.current.value * 1);
                    };
                }} type='primary'>increment if add</Button>
                <Button onClick={() => { waitAdd(select.current.value * 1, 1000) }} type='primary'>increment async</Button>
            </div>
        </div>
    );
};


//容器组件
//创建容器对象
const Count = connect(
    //定义映射状态
    state => ({n:state.n}), 
    //定义映射操作行为(简写)
    {
        add: increment,
        minus: decrement,
        waitAdd: incrementAsync
    }
)(CountUI);


export default Count;
