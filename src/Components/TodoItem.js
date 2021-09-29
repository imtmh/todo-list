import React from "react";
import Styles from "./Main.module.css";

export function TodoItem(props) {
  const { todoItemName, serialNumber } = props;
  //   const todoItemName = "Work-1";
  return (
    <li>
      <span>
        <strong>{serialNumber}:</strong> {todoItemName}
      </span>
      <div className={Styles.btns}>
        <button>Edit</button>
        <button>Complete</button>
        <button>Delete</button>
      </div>
    </li>
  );
}
