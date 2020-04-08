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
      Todos: [{
        id: 1,
        name: 'hello',
        isComplete: false
      }],
      todoShow: 'All'
    };
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  addToList = (newValue) => {
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
      // console.log('update');
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
