import style from "./Hello.module.css";
const Hello = props =>  {
    return (
        <p className={style.Hello}>Hello,<code>{props.name}</code>!</p>
    );
};

export default Hello;
