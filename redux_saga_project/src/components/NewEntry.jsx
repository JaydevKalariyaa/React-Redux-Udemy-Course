import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { Button, Checkbox, Form, Segment } from "semantic-ui-react";
import FormComponent from "./FormComponent";
import { useDispatch } from "react-redux";
import { budjetActions } from "../store/budjet";
export default function NewEntry() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newEntry = {
      id: Math.random() * 1000000 + "",
      amount: amount,
      description: description,
      isExpense: isExpense,
    };
    //handleEntries(newEntry);
    dispatch(budjetActions.addEntries(newEntry));
  };
  return (
    <Segment>
      <FormComponent
        amount={amount}
        description={description}
        isExpense={isExpense}
        setAmount={setAmount}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
        handleSubmit={handleSubmit}
      />
      <Button type="button" color="red">
        cancel
      </Button>
      <Button type="button" color="green" onClick={handleSubmit}>
        Submit
      </Button>
    </Segment>
  );
}
