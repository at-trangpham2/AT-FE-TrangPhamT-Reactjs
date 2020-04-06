import React, { Component } from 'react';
import './App.scss';
import { Helmet } from 'react-helmet';
import {Header} from './components/header';
import {InputItem} from './components/input';
import {Todolist} from './components/todolist/todolist';
import {Footer} from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
      todoShow: 'All'
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

  showTodo = (todoShow = '') => {
    this.setState({
      todoShow
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
    const filterByStatus = (Todos = [], todoShow = '') => {
      switch (todoShow) {
        case 'Active':
          return Todos.filter(item => !item.isComplete);
        case 'Completed':
          return Todos.filter(item => item.isComplete);
        default:
          return Todos;
      }
    };
    const title = `Todos (${activeCounttodo})`;
    return (
      <div className="App">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="container">
          <Header />
          <InputItem addTodos={this.addToList} />
          <Todolist
            Todos={filterByStatus(Todos, todoShow)}
            onItemClicked={this.onItemClicked} 
            remove={this.removeItem}/>
          <Footer countAll={Todos.length}
           countLeft={activeCounttodo}
            clickToShow={this.showTodo}
              clickClearComp={this.clearCompleted} />
        </div>
      </div>
    );
  }
}

export {App};
