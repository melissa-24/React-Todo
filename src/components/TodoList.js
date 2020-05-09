import React from "react";

import Item from "./Todo.js";

const TodoList = props => {
  return (
    <div className="to-do-list">
      {props.tasks.map(item => (
        <Item
          toggleItemCompleted={props.toggleItemCompleted}
          key={item.id}
          item={item}
        />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;