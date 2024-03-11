import React, { useState } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import ModalComponent from "./ModalComponent";
import { useDispatch } from "react-redux";
import { budjetActions } from "../store/budjet";
export default function Line({ description, amount, isExpense = null, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(
      budjetActions.removeEntries({ description, amount, id, isExpense })
    );
  };

  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>{description}</Grid.Column>
            <Grid.Column width={3}>${amount}</Grid.Column>
            <Grid.Column textAlign="right" width={3}>
              <Icon name="edit" bordered onClick={() => setIsOpen(true)} />
              <Icon name="trash" bordered onClick={() => handleDelete(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        isExpense={isExpense}
        amount={amount}
        id={id}
      />
    </>
  );
}
