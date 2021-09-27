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
  const [currentState, functionUpdateCurrentState] = useState(todoList);

  return (
    <div className={Styles.master}>
      <div>
        <div className={Styles.todo}>
          <ToDoItems currentState={currentState} />
          <CompletedToDoItemsSection />
        </div>
      </div>
    </div>
  );
}
