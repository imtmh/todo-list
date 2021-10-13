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
  const [allTodoItems, functionToUpdateCurrentState] = useState([]);

  const [inputText, setInputText] = useState("");

  const onAddButtonClick = (e) => {
    let tempState = [
      ...allTodoItems,
      {
        name: inputText,
        id: new Date().getTime(),
        isCompleted: false,
      },
    ];

    functionToUpdateCurrentState(tempState);

    setInputText("");
  };

  function handleUpdateNameChange(idFromChild, nameFromChild) {
    // let updatedList = [];
    // for (let item of allTodoItems) {
    //   if (item.id === idFromChild) {
    //     item.name = nameFromChild;
    //   }
    //   updatedList.push(item);
    // }

    let updatedList2 = allTodoItems.map((item) => {
      if (item.id === idFromChild) {
        item.name = nameFromChild;
      }
      return item;
    });

    let updatedList3 = allTodoItems.map((item) => {
      return item.id === idFromChild ? { ...item, isCompleted: true } : item;
    });
    
    let updatedList4 = allTodoItems.map((item) =>
      item.id === idFromChild ? { ...item, isCompleted: true } : item
    );

    functionToUpdateCurrentState(updatedList2);
  }

  function handleCompleteTodoItem(idOfItemToBeCompleted) {
    // let updatedTodoItems = []

    // for(let item of allTodoItems) {
    //   if(item.id === idOfItemToBeCompleted) {
    //       // mark matched item as completed
    //       item.isCompleted = true;
    //   }

    //   updatedTodoItems.push(item)
    // }

    let updatedTodoItems2 = allTodoItems.map((item) => {
      if (item.id === idOfItemToBeCompleted) {
        item.isCompleted = true;
      }
      return item;
    });

    functionToUpdateCurrentState(updatedTodoItems2);
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
            handleCompleteTodoItem={handleCompleteTodoItem}
            handleUpdateNameChange={handleUpdateNameChange}
            nonCompletedItems={allTodoItems.filter((item) => !item.isCompleted)}
          />
          <CompletedToDoItemsSection
            completedItems={allTodoItems.filter((item) => item.isCompleted)}
          />
        </div>
      </div>
    </div>
  );
}
