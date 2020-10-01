import React from "react";

function ToDo(props) {
  return (
    <h2
      checked={props.done}
      className="todo"
      onClick={props.handleDone}
      style={{ textDecoration: props.done ? "line-through" : "none" }}
    >
      {props.task}
    </h2>
  );
}

export default ToDo;
