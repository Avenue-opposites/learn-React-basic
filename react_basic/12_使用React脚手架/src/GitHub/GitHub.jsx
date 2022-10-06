import React, { Component } from 'react'
import Search from './Search/Search';
import List from './List/List';
import axios from "axios";
export default class GitHub extends Component {
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
    render() {
        const { information } = this.state; 
        return (
            <div>
                <Search sendRequest={this.sendRequest}></Search>
                <List {...information}></List>
            </div>
        )
    };
    sendRequest = (param) => {
        if(!param.trim()) return;
        const { information } = this.state;
        information.isFirst = false;
        information.isLoading = true;
        this.setState({information});
        axios.get(`https://api.github.com/search/users?q=${param}`)
        .then(({data}) => {
            information.userInfo = data.items;
            information.isLoading = false;
            this.setState({information});
        })
        .catch(reason => {
            information.isLoading = false;
            information.errorMessage = reason.message;
            this.setState({information});
        });
    }
};


