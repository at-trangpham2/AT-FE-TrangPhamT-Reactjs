import React from 'react';

export function Footer(props) {
  const { countActive, countAll, onClickClear } = props;
  return (
    <footer>
      <div className="functions-wrap"> 
        <div className="count-wrap">
          <span>{countActive}</span>
          <span>{countActive > 1 ? 'items' : 'item'} left</span>
        </div>
        <ul className="functions-list">
          <li className="function-item">
            <a href="#" onClick={() => props.clickFilterTodo('All')}>All</a>
          </li>
          <li className="function-item">
            <a href="#/Active/" onClick={() => props.clickFilterTodo('Active')}>Active</a>
          </li>
          <li className="function-item">
            <a href="#/Completed/" onClick={() => props.clickFilterTodo('Completed')}>Completed</a>
          </li>
        </ul>
        {countActive < countAll && <button className="btn-remove" onClick={onClickClear}>Clear completed</button>}
      </div>
    </footer>
  );
}