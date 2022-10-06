import React from 'react';
import style from "./Person.module.css";
import { addPerson} from '../../redux/actions/person';
import { connect } from 'react-redux';
import { nanoid } from "nanoid";
const PersonUI = ({ personList,n, addPerson }) => {
    const name = React.createRef();
    const age = React.createRef();
    const work = React.createRef();
    const add = () => {
        const person = {
            id: nanoid(),
            name: name.current.value.trim(),
            age: +age.current.value.trim(),
            work: work.current.value.trim()
        };
        addPerson(person);
        name.current.value = "";
        age.current.value = "";
        work.current.value = "";
    };
    return (
        <div className={style.basic}>
            <h1>个人信息:{ n }</h1>
            <div>
                <p>姓名</p>
                <input ref={name} type="text" name='姓名' placeholder='请输入您的姓名...'/>
                <p>年龄</p>
                <input ref={age} type="number" name='年龄' placeholder='请输入您的年龄...'/>
                <p>工作</p>
                <input ref={work} type="text" name='工作' placeholder='请输入您的工作...'/>
                <button onClick={add}>提交</button>
            </div>
            <div className={style.show}>
                <ol>
                    {
                        personList.map(({ id, name, age, work }) => {
                            return (
                                <li key={id}>
                                    姓名:{name}-年龄:{age}工作:-{work}
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    );
};
const Person = connect(
    state => ({
        personList: state.personList,
        n:state.n
    }),
    {
        addPerson
    }
)(PersonUI);
export default Person;
