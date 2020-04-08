import React, { Component } from 'react';
import './App.scss';
import { Helmet } from 'react-helmet';
import {Header} from './components/header';
import {InputItem} from './components/input';
import {Todolist} from './components/todolist/todolist';
import {Footer} from './components/footer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
      todoShow: 'All'
    };
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  addToList = (newValue) => {
    let { Todos } = this.state;
    let newTodos = [];
    if(!Todos.length) {
      newTodos = {
        id: 1,
        name: newValue,
        isComplete: false
      }
    } else {
      newTodos = {
        id: Todos[Todos.length - 1].id + 1,
        name: newValue,
        isComplete: false
      }
    }
    Todos = Todos.concat(newTodos);
    this.setState({
      Todos: Todos
    });
  }

  componentDidMount() {
    let Todos = localStorage.getItem('Todos');
    if(Todos) {
      this.setState({
        Todos: JSON.parse(localStorage.getItem('Todos'))
      })
    } else {
      localStorage.setItem('Todos', JSON.stringify(this.state.Todos))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { Todos } = this.state;
    if(prevState.Todos !== Todos) {
      localStorage.setItem('Todos', JSON.stringify(Todos));
      console.log('update');
    }
  }
  
  onItemClicked = (id) => {
    const { Todos } = this.state;
    this.setState({
      Todos: Todos.map(item => {
        if (parseInt(id) === item.id) {
          return {
            ...item,
            isComplete: !item.isComplete
          };
        }
        return item;
      }),
    });
  };
  
  removeItem = id => {
    this.setState({
      Todos: this.state.Todos.filter(todo => todo.id !== parseInt(id))
    });
  };

  showTodo = (newTodoShow) => {
    this.setState({
      todoShow: newTodoShow
    });
  };

  clearCompleted() {
    this.setState({
      Todos : this.state.Todos.filter(todo => !todo.isComplete)
    })
  }
  
  render() {
    const { Todos, todoShow } = this.state;
    let activeCounttodo = Todos.filter(todo => !todo.isComplete).length;
    const filterByStatus = (todoShow) => {
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
            Todos={filterByStatus(todoShow)} 
             onChangeComp={this.onItemClicked} 
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
