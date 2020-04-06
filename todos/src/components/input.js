import React, { Component } from 'react';

class InputItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  onKeyPress = (e) => {
    if(e.key === 'Enter') {
      if(this.state.newValue.trim()) {
        this.props.addTodos(this.state.newValue);
        this.setState({
          newValue: ''
        })
      }
    }
  }
  handleChange(e) {
    this.setState({
      newValue: e.target.value
    })
  }
  render() {
    return (
      <div className="enter-todo">
        <input className="enter"
         value={this.state.newValue} onChange={this.handleChange}
         type="text"
         placeholder="what needs to be done?"
         onKeyPress={this.onKeyPress}/>
      </div>
    );
  }
}
export {InputItem};
