import React, { Component } from "react";
import "./style.css";
class ListItem extends Component {
    render() {
        const { item, handleDelete, handleCompletedCheck } = this.props;

        return (
            <li className="list-item">
                {item.title}
                <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
                <label>
                    Completed:
                    <input type='checkbox' defaultChecked={item.completed} onChange={() => handleCompletedCheck(item)} />
                </label>
            </li>
        );
    }
}

export default ListItem;
