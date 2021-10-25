import React, { useState } from "react";

import Styles from "./Main.module.css";

export function ToDo(props) {
  const { todoItemName, serialNumber, handleUpdateNameChange, todoItemId, handleCompleteTodoItem , handleDeleteTodoItem} = props;

  const [isEditable, setIsEditable] = useState(false);

  const [tempInputText, setTempInputText] = useState(todoItemName);

  return (
    <li>
      <span>
        <strong>{serialNumber}: </strong>
        {isEditable ? (
          <input
            type="text"
            className={Styles["todo-item-input-text"]}
            value={tempInputText}
            onChange={(e) => setTempInputText(e.target.value)}
          />
        ) : (
          todoItemName
        )}
      </span>
      <div className={Styles.btns}>
        {isEditable ? (
          <button
            onClick={() => {
              handleUpdateNameChange(todoItemId, tempInputText)
              setIsEditable(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              setIsEditable(true);
            }}
          >
            Edit
          </button>
        )}
        <button
          onClick={
            () => handleCompleteTodoItem(todoItemId)
          }
        >Complete</button>
        <button onClick={() => handleDeleteTodoItem(todoItemId)}>Delete</button>
      </div>
    </li>
  );
}
