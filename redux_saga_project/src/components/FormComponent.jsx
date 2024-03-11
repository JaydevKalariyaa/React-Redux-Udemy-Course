import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";
import ButtonComponent from "./ButtonComponent";

export default function FormComponent({
  description,
  amount,
  isExpense,
  setDescription,
  setAmount,
  setIsExpense,
  handleSubmit,
}) {
  return (
    <Form>
      <Form.Group>
        <Form.Input
          placeholder="Description"
          icon="tags"
          width={12}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          placeholder="Amount"
          icon="dollar"
          iconPosition="left"
          width={4}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          label="is Expense?"
          toggle
          checked={isExpense}
          onChange={(e) => setIsExpense((old) => !old)}
        />
      </Segment>
    </Form>
  );
}
