import React, { memo, useState } from 'react';
import { Context } from "../../Demo";
const Grandson = ({ handleAdd }) => {
    // const n = useContext(Context);
    const [personList] = useState([{id:"001",name:"秀儿",age:666}]);
    console.log("Grandson-render");
    return (
        <div style={{ backgroundColor: "yellowgreen" }}>
            <h3>我是Grandson组件</h3>
            {/* <p>Demo组件的值: { n }</p> */}
            <p>Demo组件的值:
                <Context.Consumer>
                    {
                        ({n}) => n
                    }
                </Context.Consumer>
            </p>
            <button onClick={handleAdd}>n+1</button>
            <ul>
                <Context.Consumer>
                    {   
                        ({error}) => {
                            // console.log(error);
                            return (
                                !error ? 
                                personList.map(({ id, name, age }) => (<li key={id}>姓名:{name}-年龄:{age}</li>)) 
                                : <span style={{color:"red"}}>网络出错了</span>
                                )
                        }
                    }
                </Context.Consumer>
            </ul>
        </div>
    );
}

export default memo(Grandson);
