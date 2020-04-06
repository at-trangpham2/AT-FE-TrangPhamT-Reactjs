import React, { Component } from 'react';
import {TodoItem} from './components/todoItem';

class Todolist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Todos, remove, onItemClicked } = this.props;
    return (
      <div className="display-todo">
        <ul className="todo-list">
          {Todos.map((todo, index) => (
            <TodoItem
              name={todo.name}
              key={index}
              id={todo.id}
              removeItem={remove}
              onChecked={onItemClicked}
              isComplete={todo.isComplete} />
          ))}
        </ul>
      </div>
    );
  }
}
export {Todolist};
