import React, { Component } from 'react';
import style from "./List.module.css";
import pubSubJS from "pubsub-js";
import User from "./User/User";
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          information:{
            userInfo:[],
            isFirst:true,
            isLoading:false,
            errorMessage:""
          }
        }
    };
    componentDidMount() {
        pubSubJS.subscribe("GET-USERINFO",(_,information) => {
            this.setState({information});
        });
    };
    componentWillUnmount() {
        pubSubJS.clearAllSubscriptions(["GET-USERINFO"]);
    };
    render() {
        const { information:{ userInfo,isFirst,isLoading,errorMessage } } = this.state;
        return (
            <div>
                <ul className={style.basic}>
                    {
                        isFirst ? <h1>welcome you used.</h1> : null
                    }
                    {
                        isLoading ? <h1>Loading...</h1> : null
                    }
                    {
                        errorMessage ?  <h1>请求出错了! 错误信息为{errorMessage}</h1> : null
                    }
                    {
                        userInfo.map(user => {
                            return(
                                <User key={user.id} {...user}></User>
                            )
                        })
                    }
                </ul>
            </div>
        )
    };
};
