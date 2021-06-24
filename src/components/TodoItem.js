import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";
import checkImg from "../img/check.png";
import checkImgComplete from "../img/check-complete.png";

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = checkImg;
    if (item.isComplete) {
      url = checkImgComplete;
    }
    return (
      <div
        className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete,
        })}
      >
        <img onClick={onClick} src={url} alt="check" width="32px" />
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
