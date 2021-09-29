import React from "react";
import Styles from "./Main.module.css";
import { TodoItem } from "./TodoItem";

export function ToDoItems({ nonCompletedItems }) {
  return (
    <div className={Styles.section1}>
      <div className={Styles.sec1_title}>
        <span>TODO-List</span>
      </div>

      <div className={Styles.all_items}>
        {nonCompletedItems.length === 0 ? (
          <div style={{ color: "red" }}>
            No todo items to display, just add a todo item!"
          </div>
        ) : (
          <ul>
            {nonCompletedItems
              .filter((todoItem, index) => {
                return !todoItem.isCompleted;
              })
              .map((todoItem, index) => {
                return (
                  <TodoItem
                    key={"todo-list-items-" + index}
                    serialNumber={index + 1}
                    todoItemName={todoItem.name}
                  />
                );
              })}
          </ul>
        )}
      </div>
    </div>
  );
}
