import React, { Component } from 'react';
import style from "./OutCome.module.css";
class OutCome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isAllDone:false,
      }
    }
    render() {
        const { total,doneSum,handleDeleteAllDone } = this.props;
        const { isAllDone } = this.state;
        return (
            <div className={style.OutComeBox}>
            <label>
              <input
                defaultChecked={isAllDone}
                className={style.allCheckbox}
                onChange={this.allDone}
                type="checkbox"
              />已完成 {doneSum} / 全部 {total} 
              <button className={style.deleteFinishBtn} onClick={handleDeleteAllDone}>
                删除已完成任务
              </button>
            </label>
          </div>
        );
    }
    allDone = () => {
      const { isAllDone } = this.state;
      this.setState({isAllDone:!isAllDone});
      this.props.handleAllDone(!isAllDone);
    }
}

export default OutCome;
