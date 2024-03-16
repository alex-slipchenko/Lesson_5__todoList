import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  render() {

    const { newTodo, handleTitle, handleCompleted, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" defaultValue={newTodo.title} onChange={handleTitle}></input>
        </label>
        <label>
          Completed:
          <input type="checkbox" defaultChecked={newTodo.completed} onChange={handleCompleted}></input>
        </label>
        <button>Add</button>
      </form>
    );
  }
}

export default Form;
