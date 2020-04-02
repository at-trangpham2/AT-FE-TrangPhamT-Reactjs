import React, { Component } from "react";
// import classnames from "classnames";

class Todolist extends Component {
  constructor(props) {
    super(props);
    // this.completeTodo = this.completeTodo.bind(this);
  }
  remove = e => {
    this.props.removeItem(e.target.value);
  };
  completeTodo = event => {
    this.props.onChecked(event.target.value);
    // console.log(event.target.value);
  };
  render() {
    let classes = 'label-todo';
    if (this.props.isComplete) {
      classes += " todo-item-complete";
    }
    return (
      <li className="todo-item">
        <div className="todo-wrap">
          <input
            value={this.props.value}
            type="checkbox"
            onClick={this.completeTodo}
          ></input>
          <label className={classes}>{this.props.name}</label>
        </div>
        <button
          value={this.props.value}
          onClick={this.remove}
          className="remove"
        ></button>
      </li>
    );
  }
}
export default Todolist;
