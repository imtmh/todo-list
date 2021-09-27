import React from "react";
import Styles from "./Main.module.css";
import { TodoItem } from "./TodoItem";

export function ToDoItems({ currentState }) {
    //   if (currentState.length === 0) {
    //     return "No  Items";
    //   }
    return (
        <div className={Styles.section1}>
            <div className={Styles.sec1_title}>
                <span>TODO-List</span>
            </div>
            <div className={Styles.add_item_search}>
                <input type="text" required placeholder="Write TO-Dos" />
                <button className={Styles.btn_add}>Add</button>
            </div>
            <div className={Styles.all_items}>
                {currentState.length === 0 ? (
                    <div style={{ color: "red" }}>
                        No todo items to display, just add a todo item!"
                    </div>
                ) : (
                    <ul>
                        {currentState
                            .filter((todoItem, index) => {
                                return !todoItem.isCompleted;
                            })
                            .map((todoItem, index) => {
                                return (
                                    <TodoItem
                                        key={"todo-list-items-" + index}
                                        todoItemName={todoItem.name} />
                                );
                            })}
                    </ul>
                )}
            </div>
        </div>
    );
}
