import React, { Component } from "react";
import "./style.css";
import ListItem from "../ListItem/ListItem";

class List extends Component {
  render() {
    const { todos, handleDelete, handleCompletedCheck } = this.props;

    return todos.length ? (
      <ul className="list-container">
        {todos.map((item) => (
          <ListItem key={item.id} item={item} handleDelete={handleDelete} handleCompletedCheck={handleCompletedCheck} />
        ))}
      </ul>
    ) : null;
  }
}

export default List;
