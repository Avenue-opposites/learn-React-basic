import React, { Component } from 'react';
import style from "./List.module.css";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: ""
        }
    };
    render() {
        const { TodoList, handleDeleteItem, handleDone,handleEdit } = this.props;
        const { keyWord } = this.state;
        return (
            <div className={style.listBox}>
                {
                    TodoList.map(({ id, name, done, isEditing }) => {
                        return (
                            <label key={id} className={style.item}>
                                <input
                                    onChange={handleDone(id, done)}
                                    className={style.itemCheckbox}
                                    checked={done}
                                    type="checkbox"
                                />
                                <span className={isEditing ? style.hidden : null}>{name}</span>
                                <input
                                    defaultValue={name}
                                    onChange={this.updateKeyWord}
                                    className={isEditing ? style.edit : style.hidden}
                                    type="text"
                                />
                                <button className={isEditing ? style.editBtn : style.doneBtn} onClick={ handleEdit(id,keyWord) }>
                                    { isEditing ? "完成":"编辑"}
                                </button>
                                <button className={style.cancelBtn} onClick={handleDeleteItem(id)}>删除</button>
                            </label>
                        );
                    })
                }
            </div>
        );
    };
    updateKeyWord = (e) => {
        let state;
        if (state) {
            return;
        };
        state = true;
        setTimeout(() => {
            this.setState({ keyWord: e.target.value });
            state = false;
        }, 500);
    };
   
}

export default List;

