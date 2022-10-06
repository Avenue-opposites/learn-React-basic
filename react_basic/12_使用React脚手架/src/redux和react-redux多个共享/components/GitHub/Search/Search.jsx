import React, { Component } from 'react';
import style from "./Search.module.css";
import axios from "axios";
import pubSubJS from "pubsub-js";
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord:""
        }
    }
    render() {
        const { keyWord } = this.state;
        return (
            <div className={style.basic}>
                <h2 className={style.title}>Search GigHub Users</h2>
                <div className={style.box}>
                    <input
                        defaultValue={keyWord}
                        onChange={this.getKeyWord}
                        className={style.searchInput}
                        onKeyDown={this.Enter}
                        type="text"
                        placeholder="enter the name you search"
                    />
                    <button onClick={this.getUserData} className={style.searchBtn}>Search</button>
                </div>
            </div>
        )
    };
    //获取最新的关键字
    getKeyWord = (e) => {
        let state;
        if(state) return;
        state = true;
        setTimeout(() => {
            this.setState({keyWord:e.target.value});
            state = false;
        }, 500);
    };
    //回车发送请求
    Enter = ({key}) => {
        if(key === "Enter") {
            this.getUserData();
        }
    }
    getUserData = () => {
        const { keyWord } = this.state;
       this.sendRequest(keyWord);
    };
    sendRequest = async (param) => {
        if(!param.trim()) return;
        const information = {
            userInfo:[],
            isFirst:false,
            isLoading:true,
            errorMessage:""
        };
        pubSubJS.publish("GET-USERINFO",information);

        //使用await语法糖优化
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${param}`);
            const { items } = await response.json();
            information.userInfo = items;
            information.isLoading = false;
            pubSubJS.publish("GET-USERINFO",information);
        }catch(error) {
            information.errorMessage = error.message;
            information.isLoading = false;
            pubSubJS.publish("GET-USERINFO",information);
        }
        //使用fetch发送请求(未优化)
        // fetch(`https://api.github.com/search/users?q=${param}`)
        // .then(response => {
        //     console.log("连接服务器成功...");
        //     return response.json();
        // },reason => {
        //     console.error("连接服务器失败...",reason);
        //     return new Promise((resolve,reject) => {});
        // })
        // .then(({items}) => {
        //     console.log("获取数据成功...");
        //     information.userInfo = items;
        //     information.isLoading = false;
        //     pubSubJS.publish("GET-USERINFO",information);
        // },reason => {
        //     console.error("获取数据失败...",reason.message);
        //     information.errorMessage = reason.message;
        //     information.isLoading = false;
        //     pubSubJS.publish("GET-USERINFO",information);
        // })


        //使用axios发送请求
        // axios.get(`https://api.github.com/search/users?q=${param}`)
        // .then(({data}) => {
        //     information.userInfo = data.items;
        //     information.isLoading = false;
        //     pubSubJS.publish("GET-USERINFO",information);
        // })
        // .catch(reason => {
        //     information.errorMessage = reason.message;
        //     information.isLoading = false;
        //     pubSubJS.publish("GET-USERINFO",information);
        // });
    }
};
