import React, { Component } from "react";

class Todolist extends Component {
  render() {
    return (
      <li className="todo-item">
        <div className="todo-wrap">
          <input type="checkbox"></input>
          <label>{this.props.name}</label>
        </div>
        <button value = {this.props.id} className="remove"></button>
      </li>
    );
  }
}
export default Todolist;
