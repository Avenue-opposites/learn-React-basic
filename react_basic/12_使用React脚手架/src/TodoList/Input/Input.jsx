import React, { Component } from 'react';
import style from "./Input.module.css";
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultValue:""
        }
    }
    render() {
        const {handleAddItem} = this.props;
        return (
            <div className={style.inputBox}>
                <input
                    defaultValue={this.state.defaultValue}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            handleAddItem(e.target.value);
                            e.target.value = "";
                        }
                    }}
                    type="text"
                    placeholder="请输入你的任务,按回车键确认"
                />
            </div>
        );
    }
}

export default Input;
