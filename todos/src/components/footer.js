import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const { countLeft, countAll, clickClearComp } = this.props;
    return (
      <footer>
        <div className="functions-wrap">
          <div className="count-wrap">
            <span>{countLeft}</span>
            <span>{countLeft > 1 ? 'items' : 'item'} left</span>
          </div>
          <ul className="functions-list">
            <li className="function-item">
              <a href="#" onClick={() => this.props.clickToShow('All')}>
                All
              </a>
            </li>
            <li className="function-item">
              <a
                href="#/Active/"
                onClick={() => this.props.clickToShow('Active')}>
                Active
              </a>
            </li>
            <li className="function-item">
              <a
                href="#/Completed/"
                onClick={() => this.props.clickToShow('Completed')}>
                Completed
              </a>
            </li>
          </ul>
          {countLeft < countAll && (
            <button className="btn-remove" onClick={clickClearComp}>Clear completed</button>
          )}
        </div>
      </footer>
    );
  }
}
export {Footer};
