import React from "react";
import Styles from "./Main.module.css";

export function CompletedToDoItemsSection() {
    return (
        <div className={Styles.section2}>
            <div className={Styles.sec2_title}>
                <span>Completed List</span>
            </div>
            <div className={Styles.cmp_items}>
                <ul>
                    <li>
                        <span>Work-1</span>
                        <div className={Styles.cmp_btns}>
                            <button>InComplete</button>
                            <button>Delete</button>
                        </div>
                    </li>
                    <li>
                        <span>Work-2</span>
                        <div className={Styles.cmp_btns}>
                            <button>InComplete</button>
                            <button>Delete</button>
                        </div>
                    </li>
                    <li>
                        <span>Work-1</span>
                        <div className={Styles.cmp_btns}>
                            <button>InComplete</button>
                            <button>Delete</button>
                        </div>
                    </li>
                    <li>
                        <span>Work-1</span>
                        <div className={Styles.cmp_btns}>
                            <button>InComplete</button>
                            <button>Delete</button>
                        </div>
                    </li>
                    <li>
                        <span>Work-1</span>
                        <div className={Styles.cmp_btns}>
                            <button>InComplete</button>
                            <button>Delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
