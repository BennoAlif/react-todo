import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./addTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Do homework" },
      { id: 2, content: "Buy some milk" }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addTodo = e => {
    e.id = Math.random();
    let todos = [...this.state.todos, e];
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="center">Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
