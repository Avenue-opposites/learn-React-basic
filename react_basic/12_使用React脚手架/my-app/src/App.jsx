import React, { Component } from 'react';
// import GitHub from './components/GitHub/GitHub';
// import Proxy from "./components/Proxy/Proxy";
// import TodoList from './components/TodoList/TodoList';
import ReactRouterDemo from "./components/ReactRouterDemo/ReactRouterDemo";
// import Count from "./components/Count/Count";
// import Person from "./components/Person/Person";
// import { Demo } from "./components/Demo/Demo";
// import Button from "./components/UI/Button/Button";
class App extends Component {
    state = {
        error:""
    }
    //当子组件发送错误时调用
    static getDerivedStateFromError(error) {
        //返回状态
        return {error}; 
    };
    componentDidCatch() {
        console.log("出错了");
    };
    render() {
        return (
            <div className='container'>
                {/* <Button type="angle">Button</Button> */}
                {/* <Demo error={this.state.error}></Demo> */}
                {/* <Count></Count> */}
                {/* <Person></Person> */}
                <ReactRouterDemo></ReactRouterDemo>
                {/* <TodoList></TodoList> */}
                {/* <Proxy></Proxy> */}
                {/* <GitHub></GitHub> */}
            </div>
        );
    };
}

export default App;
