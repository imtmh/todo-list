import React, { useState } from "react";
import { CompletedToDoItemsSection } from "./CompletedToDoItemsSection";
import Styles from "./Main.module.css";
import { ToDoItems } from "./ToDoItems";

// ctrl + d   => one item after the other
// ctrl + shift+ L  => to select all the similar selected content

let todoItems = [
  {
    name: "inputText",
    id: new Date().getTime(),
    isCompleted: false,
  },
];
/**
 *
 * React Hooks
 *
 * useState => [currentState, functionUpdateCurrentState]
 *
 */

// const initialState = [];

export default function Main() {
  const [currentState, functionToUpdateCurrentState] = useState([]);

  const [inputText, setInputText] = useState("");

  const onAddButtonClick = (e) => {
    //1 way
    let tempState = [
      ...currentState,
      {
        name: inputText,
        id: new Date().getTime(),
        isCompleted: false,
      },
    ];

    // 2nd way
    // let tempState2 = [...currentState];

    // tempState2.push({
    //   name: inputText,
    //   id: 1,
    //   isCompleted: false,
    // });

    //3nd way
    // functionToUpdateCurrentState([
    //   ...currentState,
    //   { name: inputText, id: 1, isCompleted: false },
    // ]);
    // immutable objects nature strings
    functionToUpdateCurrentState(tempState);

    setInputText("");
  };

  function handleUpdateNameChange(idFromChild, nameFromChild) {
    let updatedList = [];
    for (let item of currentState) {
      if (item.id === idFromChild) {
        item.name = nameFromChild;
      }
      updatedList.push(item);
    }
    /*
    let modifiedItem = currentState.map((item) => {
      if (item.id === idFromChild) {
        item.name = nameFromChild;
      }
      return item;
    });

    */

    functionToUpdateCurrentState(updatedList);
  }

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className={Styles.master}>
      <div>
        <div className={Styles.todo}>
          <div className={Styles.add_item_search}>
            <input
              type="text"
              required
              value={inputText}
              placeholder="Add a todo"
              onChange={onInputChange}
            />
            <button
              className={Styles.btn_add}
              onClick={onAddButtonClick}
              //how the state gets updated,
              // will it do the shallow comparision/ deep comparision
            >
              Add
            </button>
          </div>
          <ToDoItems
            handleUpdateNameChange={handleUpdateNameChange}
            nonCompletedItems={currentState.filter((item) => !item.isCompleted)}
          />
          <CompletedToDoItemsSection
            completedItems={currentState.filter((item) => item.isCompleted)}
          />
        </div>
      </div>
    </div>
  );
}
