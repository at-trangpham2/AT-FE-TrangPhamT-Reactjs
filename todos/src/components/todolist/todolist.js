import React, { Component } from 'react';
import {TodoItem} from './components/todoItem';

export class Todolist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Todos, remove, onChangeComp } = this.props;
    return (
      <div className="display-todo">
        <ul className="todo-list">
          {Todos.map((todo, index) => ( 
            <TodoItem
              name={todo.name}
              key={index}
              id={todo.id}
              removeItem={remove}
              onChangeComp={onChangeComp}
              isComplete={todo.isComplete} />
            )
          )}
        </ul>
      </div>
    );
  }
}
