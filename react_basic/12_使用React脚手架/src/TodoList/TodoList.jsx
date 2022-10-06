import React, { Component } from 'react';
import style from "./TodoList.module.css";
import { nanoid } from "nanoid";

import Input from './Input/Input';
import List from "./List/List";
import OutCome from "./OutCome/OutCome";
class TodoList extends Component {
    constructor(props) {
        super(props);
        //状态
        this.state = {
            TodoList: this.getLocalStorage("TodoList")
        }
    };
    render() {
        const { TodoList } = this.state;
        const doneSum = () => {
            let sum = 0;
            for (let i = 0; i < TodoList.length; i++) {
                let item = TodoList[i];
                if (item.done) {
                    sum++;
                }
            };
            return sum;
        }
        return (
            <div className={style.TodoListBox}>
                <div className={style.basic}>
                    <Input handleAddItem={this.handleAddItem}></Input>
                    <List TodoList={TodoList} handleDeleteItem={this.handleDeleteItem} handleDone={this.handleDone} handleEdit={this.handleEdit}></List>
                    <OutCome doneSum={doneSum()} total={TodoList.length} handleAllDone={this.handleAllDone} handleDeleteAllDone={this.handleDeleteAllDone}></OutCome>
                </div>
            </div >
        );
    };
    getLocalStorage = (key) => {
        return  JSON.parse(JSON.parse(localStorage.getItem(key))) || [];
    }
    setLocalStorage = (key,value) => {
        localStorage.setItem(key,JSON.stringify(value));
    }
    //处理完成的项目
    handleDone = (id, done) => {
        const { TodoList } = this.state;
        return () => {
            this.setState({
                TodoList: TodoList.filter(item => {
                    if (id === item.id) {
                        item.done = !done;
                        // switch (done) {
                        //     case true:
                        //         item.done = false
                        //         break;
                        //     default:
                        //         item.done = true;
                        //         break;
                        // }
                    };
                    return item;
                })
            });
        }
    };
    //处理添加项目
    handleAddItem = (value) => {
        const { TodoList } = this.state;
        const item = { id: nanoid(), name: value, done: false, isEditing: false };
        this.setLocalStorage("TodoList",JSON.stringify([item,...TodoList]));
        this.setState({ TodoList: [item,...TodoList] });
    };
    //处理删除项目
    handleDeleteItem = (id) => {
        const { TodoList } = this.state;
        return () => {
            if (window.confirm("确认删除吗?")) {
                const newTodoList = TodoList.filter(item => {
                    return id !== item.id ? item : null;
                });
                this.setLocalStorage("TodoList",JSON.stringify(newTodoList));
                this.setState({
                    TodoList: newTodoList
                });
            };
        }
    };
    //处理编辑
    handleEdit = (id, keyWord) => {
        const { TodoList } = this.state;
        // console.log(keyWord);
        return () => {
            this.setState({
                TodoList: TodoList.filter(item => {
                    if (id === item.id) {
                        if (keyWord) {
                            item.name = keyWord;
                        }
                        item.isEditing = !item.isEditing;
                    } else {
                        item.isEditing = false;
                    }
                    return item;
                })
            });

        }
    };
    //处理全选
    handleAllDone = (isAllDone) => {
        const { TodoList } = this.state;
        this.setState({
            TodoList: TodoList.filter(item => {
                if (isAllDone) {
                    item.done = true;
                } else {
                    item.done = false;
                }
                return item;
            })
        });
    };
    handleDeleteAllDone = () => {
        const { TodoList } = this.state;
        if (window.confirm("确定删除已完成任务吗?")) {
            const newTodoList = TodoList.filter(item => {
                return !item.done && item;
            });
            this.setLocalStorage("TodoList",JSON.stringify(newTodoList));
            this.setState({
                TodoList: newTodoList
            });
        }
    }
}

export default TodoList;
