import React from "react";
import Styles from "./Main.module.css";

export function TodoItem(props) {
    const { todoItemName } = props;
    //   const todoItemName = "Work-1";
    return (
        <li>
            <span>{todoItemName}</span>
            <div className={Styles.btns}>
                <button>Edit</button>
                <button>Complete</button>
                <button>Delete</button>
            </div>
        </li>
    );
}
