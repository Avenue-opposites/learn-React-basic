import React, { Component } from 'react';
import style from "./Search.module.css";

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
                        onKeyDown={this.Enter}
                        className={style.searchInput}
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
    }
    Enter = ({key}) => {
        if(key === "Enter") {
            this.getUserData();
        }
    }
    getUserData = () => {
        const { keyWord } = this.state;
        const { sendRequest } = this.props;
        sendRequest(keyWord);
    }
};
