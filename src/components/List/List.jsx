import React, { Component } from "react";
import "./style.css";

class List extends Component {

  render() {
    const { todos, handleDelete, handleCompletedCheck } = this.props;
    return todos.length ? (
      <ul className="list-container">
        {todos.map((item, index) => (
          <li key={item.id} className="list-item">
            {item.title}
            <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
            <label>
              Completed:
              <input type='checkbox' defaultChecked={item.completed} onChange={() => handleCompletedCheck(item)}></input>
            </label>
          </li>
        ))}
      </ul>
    ) : null;
  }
}

export default List;
