import React, { useEffect,useState } from 'react';
import { createIncrementAction,createDecrementAction } from "../../redux/actions/Count_action.js";
import style from "./Count.module.css";
import store from "../../redux/store";
//引入antd
import { Button } from "antd";
const Count = () => {
    const { getState, dispatch,subscribe } = store;
    const [_,setState] = useState();
    const select = React.createRef();
    //使用生命周期
    useEffect(() => {
        //订阅,只要store状态发生改变就重新渲染
        subscribe(() => {
            //渲染
            setState({});
        });
    },[]);
    const add = () => {
        const value = Number(select.current.value);
        //通知reduers,执行操作
        dispatch(createIncrementAction(value));
    };
    const minus = () => {
        const value = Number(select.current.value);
        dispatch(createDecrementAction(value));

    };
    const evenAdd = () => {
        const value = Number(select.current.value);
        if (!(getState() % 2)) {
            dispatch(createIncrementAction(value));
        };
    };
    const waitAdd = () => {
        const value = Number(select.current.value);
            dispatch(createIncrementAction(value));
    };
    return (
        <div className={style.basic}>
            <h1>
                click <span>{getState()}</span> times
            </h1>
            <select ref={select}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <div>
                <Button onClick={add} type='primary'>+</Button>
                <Button onClick={minus} type='primary'>-</Button>
            </div>
            <div>
                <Button onClick={evenAdd} type='primary'>increment if add</Button>
                <Button onClick={waitAdd} type='primary'>increment async</Button>
            </div>
        </div>
    );
}

export default Count;
