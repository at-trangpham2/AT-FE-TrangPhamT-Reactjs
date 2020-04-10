import React, { useState } from 'react';
import './App.scss';
import {Header} from './components/header';
import {InputItem} from './components/addToList';
import {TodoList} from './components/todoList';
import {Footer} from './components/footer';

export function App() {
  //declare useState for Todos and status
  let [Todos, setTodos] = useState([]);
  let [status, setStatus] = useState('All');

  //add item to array
  const addToList = (newValue) => {
    let newTodos = [];
    if(!Todos.length) {
      newTodos = [{
        id: 1,
        name: newValue,
        isCompleted: false
      }]
    } else {
      newTodos = [{
        id: Todos[Todos.length - 1].id + 1,
        name: newValue,
        isCompleted: false
      }]
    }
    Todos = Todos.concat(newTodos);
    setTodos(Todos);
  }

  //remve item
  const removeItem = (id) => {
    setTodos(Todos.filter(item => item.id !== parseInt(id)));
  }

  //change iscompleted in checkbox
  const clickItem = (id) => {
    setTodos(Todos.map(item => {
      if(item.id === parseInt(id)) {
        return {
          ...item,
          isCompleted: !item.isCompleted
        }
      }
      return item;
    }))
  }

  //count todo is activing
  const countTodoActive = Todos.filter(item => !item.isCompleted).length;

  //clear completed
  const clearCompleted = () => {
    setTodos(Todos.filter(item => !item.isCompleted))
  }

  //filter todo by status 
  const filterByStatus = (status) => {
    switch (status) {
      case 'Active':
        return Todos.filter(item => !item.isCompleted);
      case 'Completed':
        return Todos.filter(item => item.isCompleted);
      default:
        return Todos;
    }
  }
  
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <InputItem addTodos={addToList} />
        <TodoList Todos={filterByStatus(status)} removeItem={removeItem} onChangeCheck={clickItem}/>
        <Footer countActive={countTodoActive} onClickClear={clearCompleted}
         countAll={Todos.length} clickFilterTodo={(status) => setStatus(status)} />
      </div>
    </div>
  );
}
