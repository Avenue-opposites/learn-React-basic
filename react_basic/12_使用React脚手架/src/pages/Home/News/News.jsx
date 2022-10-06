import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail/Detail';
import style from "./News.module.css";
export default class News extends Component {
    state = {
        news: [
            {
                id: nanoid(),
                title: "千年之守，《阴阳师》全新版本活动即将开启！",
                content: "斗转星移，布局千年，神明赴约而来。让我们跟随神明的脚步，一同谱写千年之章！六周年大型版本活动「千年之守」即将开启。"
            },
            {
                id: nanoid(),
                title: "蛉魂梦使《阴阳师》妖刀姬全新典藏皮肤上线！",
                content: "魂牵梦萦之地，无数次在梦中出现。染血的刀刃，倒下的身影，悲恸的哀鸣是时时环绕耳畔、逃不出的囚牢。囿于残缺记忆的少女日夜责问着自己，却始终无法用破碎的回忆拼凑出完整的过往。小小的蜻蛉挥动轻盈的翅膀，带着亡故之人的呼唤，来到了她的梦中。少女所苦寻的答案，需要由她自己，作为信使，前往另一个世界收取。"
            },
            {
                id: nanoid(),
                title: "薄暮花冢，珠晶螺尾《阴阳师》全新式神皮肤上线",
                content: `幽幽日落，暮色未浓，川畔却已染上绚烂的颜色；悠悠梦醒，三途花开，踱步的女子满意地注视着漫山的花朵，盛放的时刻，将再次如约而至。`
            },
        ]
    };
    render() {
        const { news } = this.state;
        return (
            <div>
                <ul className={style.NMbasic}>
                    {
                        news.map(({ id, title, content }) => {
                            return (
                                <li key={id}>
                                    <Link 
                                    className={style.NMRoute} 
                                    to={`/Home/News/Detail?id=${id}&title=${title}&content=${content}`}
                                    >
                                        {title}
                                    </Link>
                                    <button>push</button>
                                    <button>replace</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <Switch>
                    <Route path="/Home/News/Detail" component={Detail}></Route>
                </Switch>
            </div>
        )
    }
}
