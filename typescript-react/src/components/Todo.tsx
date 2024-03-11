import React from "react";
import TodoModel from "../models/Todo";
import classes from "./Todo.module.css";
const Todo: React.FC<{
  item: TodoModel;
  handleDelete: (id: string) => void;
}> = (props) => {
  return (
    <li
      key={props.item.id}
      className={classes.item}
      onClick={() => props.handleDelete(props.item.id)}
    >
      {props.item.text}
    </li>
  );
};
export default Todo;
