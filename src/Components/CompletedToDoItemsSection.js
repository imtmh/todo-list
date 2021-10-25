import React from "react";
import Styles from "./Main.module.css";

export function CompletedToDoItemsSection({ completedItems, handleInCompleteTodoItem, handleDeleteTodoItem }) {
  const completedToDoItemsRender = [];

  // simple for loop
  for (let item of completedItems) {
    completedToDoItemsRender
    .push(
      <CompletedToDoItem handleDeleteTodoItem={handleDeleteTodoItem} itemName={item.name} handleInCompleteTodoItem={handleInCompleteTodoItem} id={item.id} />
    );
  }

  return (
    <div className={Styles.section2}>
      <div className={Styles.sec2_title}>
        <span>Completed List</span>
      </div>
      <div className={Styles.cmp_items}>
        {completedItems.length === 0 ? (
          <div style={{  fontStyle: "italic" }}>
            No completed items!
          </div>
        ) : (
          <ul>{completedToDoItemsRender}</ul>
        )}
      </div>
    </div>
  );
}
function CompletedToDoItem({ itemName, handleInCompleteTodoItem, id, handleDeleteTodoItem }) {
  return (
    <li>
      <span>{itemName}</span>
      <div className={Styles.cmp_btns}>
        <button onClick={() => handleInCompleteTodoItem(id) }>InComplete</button>
        <button  onClick={()=> handleDeleteTodoItem(id)}>Delete</button>
      </div>
    </li>
  );
}
