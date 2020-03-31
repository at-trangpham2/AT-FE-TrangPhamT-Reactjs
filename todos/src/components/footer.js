import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="functions-wrap">
          <span>{this.props.count} item left</span>
          <ul className="functions-list">
            <li className="function-item">
              <a href="#">All</a>
            </li>
            <li className="function-item">
              <a href="#/Active/">Active</a>
            </li>
            <li className="function-item">
              <a href="#/Completed/">Completed</a>
            </li>
          </ul>
          <button className="btn-remove">Clear completed</button>
        </div>
      </footer>
    );
  }
}
export default Footer;
