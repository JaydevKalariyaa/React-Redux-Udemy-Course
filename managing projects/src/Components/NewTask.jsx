import React, { useRef } from "react";
import Input from "./Input";
import Button from "./Button";
export default function NewTask({ addTask }) {
  let input = useRef();

  const handleClick = () => {
    addTask(input.current.value);
    input.current.value = "";
  };
  return (
    <div className="flex justify-between items-center">
      <Input label="enter task" ref={input} />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
}
