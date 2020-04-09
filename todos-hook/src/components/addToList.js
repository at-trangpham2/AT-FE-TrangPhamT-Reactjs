import React, { useState } from 'react';

export function InputItem(props) {
  const [newValue, setNewValue] = useState('');
  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      if(newValue.trim()) {
        props.addTodos(newValue);
        setNewValue('');
      }
    }
  }
  return (
    <div className="enter-todo">
      <input value={newValue} onChange={(e) => setNewValue(e.target.value)} 
      onKeyPress={onKeyPress}
       className="enter" 
       type="text"
        placeholder="what need to be done?" />
    </div>
  );
}