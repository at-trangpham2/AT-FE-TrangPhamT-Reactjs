import React, { Component } from "react";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: this.props.isComplete
    }
    this.completeTodo = this.completeTodo.bind(this);
    this.onChangeComp = this.onChangeComp.bind(this);
  }
  remove = e => {
    this.props.removeItem(e.target.value);
  };
  completeTodo = event => {
    this.props.onChecked(event.target.value);
  };
  onChangeComp(event) {
    this.setState({
      isComplete: event.target.value
    })
  }
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
            checked={this.props.isComplete}
            type="checkbox"
            onClick={this.completeTodo}
            onChange={this.onChangeComp}></input>
          <label className={classes}>{this.props.name}</label>
        </div>
        <button
          value={this.props.value}
          onClick={this.remove}
          className="remove"></button>
      </li>
    );
  }
}
export default Todolist;
