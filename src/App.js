import { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import tick from "./img/checkmark.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      TodoItems: [
        { title: "Đi chơi với bạn gái", isComplete: true },
        { title: "Đi mua đồ ăn", isComplete: true },
        { title: "Đi xem phim", isComplete: true },
      ],
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { TodoItems } = this.state;
      const index = TodoItems.indexOf(item);
      this.setState({
        TodoItems: [
          ...TodoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...TodoItems.slice(index + 1),
        ],
      });
    };
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        newItem: "",
        TodoItems: [
          { title: text, isComplete: false },
          ...this.state.TodoItems,
        ],
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value,
    });
  }

  render() {
    const { TodoItems, newItem } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src={tick} alt="tick" width="32px" height={32}></img>
          <input
            type="text"
            placeholder="Add a new item"
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        {TodoItems.length > 0 &&
          TodoItems.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onClick={this.onItemClicked(item)}
            />
          ))}
        {TodoItems.length === 0 && "Nothing here"}
      </div>
    );
  }
}

export default App;
