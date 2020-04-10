import React from 'react';
import {TodoItem} from './todoItem';

export function TodoList(props) {
  const { Todos, removeItem, onChangeCheck } = props;
  return (
    <div className="display-todo">
      <ul className="todo-list">
        {Todos.map((todo, index) => (
          <TodoItem id={todo.id} name={todo.name} 
          key={index} isCompleted={todo.isCompleted}
           removeItem={removeItem} onChangeCheck={onChangeCheck} />
        ))}
      </ul>
    </div>
  );
}
