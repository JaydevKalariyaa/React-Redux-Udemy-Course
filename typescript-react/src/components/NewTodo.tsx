import React, { FormEvent, useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/TodoContext";
const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const TodosCtx = useContext(TodosContext);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = inputRef.current!.value;
    TodosCtx.addTodo(todo);
    inputRef.current!.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="todo">Add Todo:</label>
      <input type="text" id="todo" ref={inputRef} />
      <button>submit</button>
    </form>
  );
};
export default NewTodo;
