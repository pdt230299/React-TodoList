import { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoItems: [
        { title: "Đi chơi với bạn gái", isComplete: true },
        { title: "Đi mua đồ ăn", isComplete: true },
        { title: "Đi xem phim", isComplete: true },
      ],
    };
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

  render() {
    const { TodoItems } = this.state;
    return (
      <div className="App">
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
