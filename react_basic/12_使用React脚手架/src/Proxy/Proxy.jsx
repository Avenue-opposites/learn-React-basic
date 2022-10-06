import React,{ Component } from 'react';
import axios from "axios";

class Proxy extends Component {
    state = {
        students:[],
        cars:[]
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudents}>getStudents</button>
                <ul>
                    {
                        this.state.students.map(({id,name,age}) => {
                            return (
                                <li key={id}>
                                    姓名:{name}-年龄:{age}
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.getCars}>getCars</button>
                <ul>
                    {
                        this.state.cars.map(({id,brand,price}) => {
                            return (
                                <li key={id}>
                                    品牌:{brand}-价格:{price}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    };
    getStudents = () => {
        axios.get("http://localhost:3000/api1/students")
        .then(({data}) => {
            console.log(data);
            this.setState({students:data});
        })
        .catch(reason => {
            throw reason;
        })
    };
    getCars = () => {
        axios.get("http://localhost:3000/api2/cars")
        .then(({data}) => {
            console.log(data);
            this.setState({cars:data});
        })
        .catch(reason => {
            throw reason;
        })
    }
}


export default Proxy;
