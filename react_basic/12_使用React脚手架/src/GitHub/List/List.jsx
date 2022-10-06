import React, { Component } from 'react';
import style from "./List.module.css";

import User from "./User/User";
export default class List extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isFirst:true,
    //         isLoading:false,
    //         isErrored:false
    //     }
    // };
    render() {
        const { userInfo,isFirst,isLoading,errorMessage } = this.props;
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
