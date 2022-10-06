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
    getKeyWord = (e) => {
        let state;
        if(state) return;
        state = true;
        setTimeout(() => {
            this.setState({keyWord:e.target.value});
            state = false;
        }, 500);
    };
    Enter = ({key}) => {
        if(key === "Enter") {
            this.getUserData();
        }
    }
    getUserData = () => {
        const { keyWord } = this.state;
        this.sendRequest(keyWord);
    };
    sendRequest = (param) => {
        if(!param.trim()) return;
        const information = {
            userInfo:[],
            isFirst:false,
            isLoading:true,
            errorMessage:""
        };
        pubSubJS.publish("GET-USERINFO",information);
        axios.get(`https://api.github.com/search/users?q=${param}`)
        .then(({data}) => {
            information.userInfo = data.items;
            information.isLoading = false;
            pubSubJS.publish("GET-USERINFO",information);
        })
        .catch(reason => {
            information.errorMessage = reason.message;
            information.isLoading = false;
            pubSubJS.publish("GET-USERINFO",information);
        });
    }
};
