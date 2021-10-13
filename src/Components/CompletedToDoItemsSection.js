import React from "react";
import Styles from "./Main.module.css";

export function CompletedToDoItemsSection({ completedItems }) {
  const completedToDoItemsRender = [];

  // simple for loop
  for (let item of completedItems) {
    console.log(item);
    completedToDoItemsRender.push(<CompletedToDoItem itemName={item.name} />);
  }

  //   let secondList = completedItems.map((item, index) => {
  //     return <CompletedToDoItem itemName={item.name} />;
  //   });

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
function CompletedToDoItem({ itemName }) {
  return (
    <li>
      <span>{itemName}</span>
      <div className={Styles.cmp_btns}>
        <button>InComplete</button>
        <button>Delete</button>
      </div>
    </li>
  );
}
