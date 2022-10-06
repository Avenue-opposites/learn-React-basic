/* 函数式组件 */
import React, { useState, useRef, Fragment } from 'react';
import ReactDOM from "react-dom";
import Children from "./Children/Children";
import Grandson from "./Children/Grandson/Grandson";
import { Button } from "antd";
//创建上下文
const Context = React.createContext();

const Demo = ({ error }) => {
    const [n, setN] = useState(0);
    const input = useRef();
    console.log("Demo-render");
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setN(n => n + 1);
    //     }, 1000);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);
    const add = () => {
        //第一种写法
        setN(n + 1);
        //第二种写法
        // setN(n => n+1);
    };
    const ummount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    };
    const get = () => {
        console.log(input.current.value);
    };
    return (
        <Fragment>
            <h1>当前的值为: {n}</h1>
            <Button onClick={add} type='primary'>+1</Button>
            <Button onClick={ummount} type='danger'>卸载</Button>
            <p>
                <input ref={input} type="text" />
            </p>
            <Button onClick={get} type='primary'>获取值</Button>
            <Context.Provider value={{n,error}}>
                <Children render={(handleAdd) => <Grandson handleAdd={handleAdd}></Grandson>} handleAdd={add}></Children>
            </Context.Provider>
        </Fragment>
    );
}

export {
    Demo,
    Context
};

/* 类式组件 */
// import React, { Component } from 'react';
// import { Button } from "antd";
// class Demo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             n:0
//         };
//     };
//     render() {
//         const { n } = this.state;
//         return (
//             <div>
//                 <h1>当前的值为: { n }</h1>
//                 <Button onClick={this.add} type='primary'>+1</Button>
//             </div>
//         );
//     };
//     add = () => {
//         //方式一
//         // const { n } = this.state;
//         // this.setState({n:n+1},() => {
//         //     console.log(this.state.n);
//         // });
//         //方式二
//         this.setState((state,props) => {
//             return {
//                 ...state,
//                 n:state.n + 1
//             }
//         },() => {
//             console.log(this.state.n);
//         });
//     };
// }

// export default Demo;
