import React, { useContext } from "react";
import Todo from "./Todo";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/TodoContext";
const Todos: React.FC = (props) => {
  const Todosctx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {Todosctx.items.map((item) => (
        <Todo item={item} key={item.id} handleDelete={Todosctx.removeTodo} />
      ))}
    </ul>
  );
};
export default Todos;
