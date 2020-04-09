import React from 'react';

export function TodoItem(props) {
  let classCurrent = 'label-todo';
  if(props.isCompleted) {
    classCurrent += ' todo-item-complete';
  }
  return (
    <li className="todo-item">
      <div className="todo-wrap">
        <input type="checkbox" value={props.id} 
        checked={props.isCompleted} onChange={() => props.onChangeCheck(props.id)} />
        <label className={classCurrent}>{props.name}</label>
      </div>
      <button className="remove" value={props.id}
       onClick={(e) => props.removeItem(e.target.value)}></button>
    </li>
  );
}
