import React, { useState } from "react";

import Styles from "./Main.module.css";

export function ToDo(props) {
  const { todoItemName, serialNumber, updateItem } = props;

  const [isEditable, setIsEditable] = useState(false);

  const [tempInputText, setTempInputText] = useState(todoItemName);

  return (
    <li>
      <span>
        <strong>{serialNumber}:</strong>
        {isEditable ? (
          <input
            type="text"
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
              updateItem(tempInputText);

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
        <button>Complete</button>
        <button>Delete</button>
      </div>
    </li>
  );
}
