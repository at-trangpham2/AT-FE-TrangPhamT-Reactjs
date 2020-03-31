import React, { Component } from 'react';

class InputItem extends Component {
  constructor(props) {
    super(props);
  }
  onKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.props.addTodos(e.target.value);
      e.target.value = '';
    }
  }
  render() {
    return (
      <div className="enter-todo">
        <input className="enter" type="text" placeholder="what needs to be done?"
         onKeyPress={this.onKeyPress} 
         value={this.newValue} onChange = {this.onChange}/>
      </div>
    );
  }
}
export default InputItem;