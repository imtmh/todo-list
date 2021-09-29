import React, { useState } from "react";
import { CompletedToDoItemsSection } from "./CompletedToDoItemsSection";
import Styles from "./Main.module.css";
import { ToDoItems } from "./ToDoItems";

// ctrl + d   => one item after the other
// ctrl + shift+ L  => to select all the similar selected content

const todoList = [
  {
    isCompleted: true,
    name: "Learn HTML",
    id: 1,
  },
  {
    isCompleted: true,
    name: "Learn CSS",
    id: 2,
  },
  {
    isCompleted: true,
    name: "Learn JS",
    id: 3,
  },
  {
    isCompleted: false,
    name: "Learn React",
    id: 3,
  },
  {
    isCompleted: false,
    name: "Learn Redux",
    id: 3,
  },
  {
    isCompleted: true,
    name: "Learn fullstack development",
    id: 2343,
  },
];

/**
 *
 * React Hooks
 *
 * useState => [currentState, functionUpdateCurrentState]
 *
 *
 */

// const initialState = [];

export default function Main() {
  const [currentState, functionToUpdateCurrentState] = useState([]);

  const [inputText, setInputText] = useState("");

  return (
    <div className={Styles.master}>
      <div>
        <div className={Styles.todo}>
          <div className={Styles.add_item_search}>
            <input
              type="text"
              required
              placeholder="Add a todo"
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
            <p>{inputText}</p>
            <button
              className={Styles.btn_add}
              onClick={(e) => {
                //1 way
                let tempState = [
                  ...currentState,
                  {
                    name: inputText,
                    id: 1,
                    isCompleted: false,
                  },
                ];

                // 2nd way
                let tempState2 = [...currentState];
                tempState2.push({
                  name: inputText,
                  id: 1,
                  isCompleted: false,
                });

                //3nd way

                functionToUpdateCurrentState([
                  ...currentState,
                  { name: inputText, id: 1, isCompleted: false },
                ]);

                // immutable objects nature strings

                functionToUpdateCurrentState(tempState);
              }}

              //how the state gets updated,
              // will it do the shallow comparision/ deep comparision
            >
              Add
            </button>
          </div>
          <ToDoItems
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
