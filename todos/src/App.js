import React, { Component } from "react";
import "./App.scss";
import Header from "./components/header";
import Input from "./components/input";
import Todolist from "./components/todolist";
import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
    };
  }
  addToList = newValue => {
    this.setState({
      Todos: [
        ...this.state.Todos,
        {
          id: this.state.Todos.length + 1,
          name: newValue,
          isDelete: false
        }
      ]
    });
  };
  // onChange(e) {
  //   this.setState({
  //     newValue: e.target.value
  //   })
  // }
  render() {
    const { Todos } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Input addTodos={this.addToList}/>
          <div className="display-todo">
            <ul className="todo-list">
              {Todos.map(todo => (
                <Todolist name={todo.name}/>
              ))}
            </ul>
          </div>
          <Footer count={Todos.length}/>
        </div>
      </div>
    );
  }
}

export default App;
