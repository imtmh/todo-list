import React, { useState } from "react";
import { CompletedToDoItemsSection } from "./CompletedToDoItemsSection";
import Styles from "./Main.module.css";
import { ToDoItems } from "./ToDoItems";


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
    let updatedList2 = allTodoItems.map((item) => {
      if (item.id === idFromChild) {
        item.name = nameFromChild;
      }
      return item;
    });

    functionToUpdateCurrentState(updatedList2);
  }

  function handleCompleteTodoItem(idOfItemToBeCompleted) {
    let updatedTodoItems2 = allTodoItems.map((item) => {
      if (item.id === idOfItemToBeCompleted) {
        item.isCompleted = true;
      }
      return item;
    });

    functionToUpdateCurrentState(updatedTodoItems2);
  }


  function handleDeleteTodoItem(id) {

    let updatedItems = allTodoItems.filter((item) => item.id !== id);

    functionToUpdateCurrentState(updatedItems)
  }

  function handleInCompleteTodoItem(idOfItemToBeCompleted) {

    let updatedTodoItems2 = allTodoItems.map((item) => {
      if (item.id === idOfItemToBeCompleted) {
        item.isCompleted = false;
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
            handleDeleteTodoItem={handleDeleteTodoItem}
          />
          <CompletedToDoItemsSection
            handleDeleteTodoItem={handleDeleteTodoItem}
            handleInCompleteTodoItem={handleInCompleteTodoItem}
            completedItems={allTodoItems.filter((item) => item.isCompleted)}
          />
        </div>
      </div>
    </div>
  );
}
