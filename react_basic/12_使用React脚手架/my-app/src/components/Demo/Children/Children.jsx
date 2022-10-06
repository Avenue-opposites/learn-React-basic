import React,{ memo } from 'react';
// import Grandson from "./Grandson/Grandson";

const Children = ({handleAdd,render}) => {
    console.log("Children-render");
    return (
        <div style={{backgroundColor:"green"}}>
            <h2>我是Children组件</h2>
            <button onClick={handleAdd}>n+1</button>
            {/* <Grandson></Grandson> */}
            {
                render(handleAdd)
            }
        </div>
    );
}

export default memo(Children);
