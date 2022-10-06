import React, { Component } from 'react'
import Search from './Search/Search';
import List from './List/List';

export default class GitHub extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         information:{
    //             userInfo:[],
    //             isFirst:true,
    //             isLoading:false,
    //             errorMessage:""
    //         }
    //     }
    // };
    render() {
        // const { information } = this.state; 
        return (
            <div>
                <Search></Search>
                <List></List>
            </div>
        )
    };
    
};


