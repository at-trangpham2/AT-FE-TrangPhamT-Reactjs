import React, { Component } from 'react';

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }
  remove = e => {
    this.props.removeItem(e.target.value);
  };
  
  render() {
    let classes = 'label-todo';
    if (this.props.isComplete) {
      classes += ' todo-item-complete';
    }
    return (
      <li className="todo-item">
        <div className="todo-wrap">
          <input
            value={this.props.id}
            checked={this.props.isComplete}
            type="checkbox"
            onChange={() => this.props.onChangeComp(this.props.id)}></input>
          <label className={classes}>{this.props.name}</label>
        </div>
        <button
          value={this.props.id}
          onClick={this.remove}
          className="remove"></button>
      </li>
    );
  }
}
