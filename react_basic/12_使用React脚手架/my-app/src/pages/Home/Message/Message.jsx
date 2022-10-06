import React, { Component } from 'react';
import { Outlet,Link } from 'react-router-dom';
import style from "./Message.module.css";
import { nanoid } from "nanoid";
// import Detail from './Detail/Detail';
export default class Message extends Component {
  state = {
    messages: [
      {
        id: nanoid(),
        title: "高天神武，为君而战《阴阳师》全新SSR式神须佐之男即将降临！",
        content: "高天原三贵子中的处刑之神、掌控天雷万象的武神之首。数千年前的七恶神之战中，须佐之男率高天原神军，与天照一同镇压了七恶神，并在高天原审判上以天羽羽斩封印八岐大蛇。神明本是高贵的灵魂，是旁观者，但须佐之男选择走下神坛，为世人承受苦难；有行刑者之名，却以行刑的方式，守护着他所爱的人们和世界。即使再过千年万年，即使世界变了模样，须佐之男也仍会为我们而战。"
      },
      {
        id: nanoid(),
        title: "月照星海，天命所归《阴阳师》全新SP式神神启荒即将降临！",
        content: "曾经是月读门下最优秀的弟子，诞生于月海，曾多次往返人间，向人类传递预言。他带着一丝神秘，与所有人都保持一定距离，性格果决，冷静，虽言行威严，却能从细枝末节中发现他温情的一面。他陨落人间，寻求自身天命，怀着不为人知的使命，在星空下独自守望数千年，看尽世间种种，深谙绝望的他，终领悟天命的意义。此刻命运皆汇于他的掌中，他最终成为命运的主宰。"
      },
      {
        id: nanoid(),
        title: "《阴阳师》全新高难度系列挑战副本「六道之门」即将开启",
        content: `自六道之门开启以来，六道世界中的危险正蠢蠢欲动，其中究竟藏匿着什么样的危机呢？全新高难度系列挑战副本六道之门即将来袭！`
      },
    ]
  };
  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul className={style.NMbasic}>
          {
            messages.map(({ id, title, content }) => {
              return (
                <li key={id}>
                  <Link
                    className={style.NMRoute}
                    to="Detail"
                    state={{
                      id,title,content
                    }}
                  >
                    {title}
                  </Link>
                  <input type="text" placeholder="请输入..."></input>
                </li>
              );
            })
          }
        </ul>
        <div>
          {/* <Routes>
            <Route path={`/Home/Message/Detail`} element={Detail}></Route>
          </Routes> */}
          <Outlet></Outlet>
        </div>
      </div>
    )
  }
};
