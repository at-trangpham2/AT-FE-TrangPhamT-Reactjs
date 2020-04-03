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
      todoShow: "All"
    };
    this.clearCompleted = this.clearCompleted.bind(this);
  }
  addToList = newValue => {
    this.setState({
      Todos: [
        ...this.state.Todos,
        {
          id: this.state.Todos.length + 1,
          name: newValue,
          isComplete: false
        }
      ]
    });
  };

  onItemClicked = value => {
    const { Todos } = this.state;
    this.setState({
      Todos: Todos.map(item => {
        if (parseInt(value) === item.id) {
          return {
            ...item,
            isComplete: !item.isComplete
          };
        }
        return item;
      }),
      ...this.state.Todos
    });
  };

  showTodo = (todoShow = "") => {
    this.setState({
      todoShow
    });
  };
  removeItem = value => {
    for (let i = 0; i < this.state.Todos.length; i++) {
      if (parseInt(value) === this.state.Todos[i].id) {
        this.state.Todos.splice(i, 1);
      }
    }
    this.setState({
      ...this.state.Todos
    });
  };

  clearCompleted() {
    this.setState({
      Todos: this.state.Todos.filter(todo => !todo.isComplete)
    })
  }

  render() {
    const { Todos, todoShow } = this.state;
    let activeCounttodo = Todos.filter(todo => !todo.isComplete).length;
    const filterByStatus = (Todos = [], todoShow = "") => {
      switch (todoShow) {
        case "Active":
          return Todos.filter(item => !item.isComplete);
        case "Completed":
          return Todos.filter(item => item.isComplete);
        default:
          return Todos;
      }
    };
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Input addTodos={this.addToList} />
          <div className="display-todo">
            <ul className="todo-list">
              {filterByStatus(Todos, todoShow).map((todo, index) => (
                <Todolist
                  name={todo.name}
                  key={index}
                  value={todo.id}
                  removeItem={this.removeItem}
                  onChecked={this.onItemClicked}
                  isComplete={todo.isComplete}
                />
              ))}
            </ul>
          </div>
          <Footer countAll={Todos.length}
           countLeft={activeCounttodo}
            clickToShow={this.showTodo}
             clickClearComp={this.clearCompleted} />
        </div>
      </div>
    );
  }
}

export default App;
