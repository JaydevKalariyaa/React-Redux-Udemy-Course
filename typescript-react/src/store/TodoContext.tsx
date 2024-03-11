import React, { useState } from "react";
import TodoModel from "../models/Todo";

type TodoType = {
  items: TodoModel[];
  addTodo: (Todo: string) => void;
  removeTodo: (id: string) => void;
};
const TodosContext = React.createContext<TodoType>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosProvider: React.FC = (props) => {
  const [items, setItems] = useState<TodoModel[]>([]);
  const addTodo = (item: string) => {
    setItems((prevItems) => {
      return [new TodoModel(item), ...prevItems];
    });
  };
  const removeTodo = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const TodosValue: TodoType = {
    items: items,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  return (
    <TodosContext.Provider value={TodosValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export { TodosProvider, TodosContext };
