import React, { useState } from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  ModalActions,
  ModalContent,
} from "semantic-ui-react";
import FormComponent from "./FormComponent";
import { budjetActions } from "../store/budjet";
import { useDispatch } from "react-redux";

export default function ModalComponent({
  isOpen,
  setIsOpen,
  description,
  amount,
  isExpense,
  id,
}) {
  const [amountt, setAmount] = useState(amount);
  const [descriptionn, setDescription] = useState(description);
  const [isExpensee, setIsExpense] = useState(isExpense);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const updatedEntry = {
      amount: amountt,
      description: descriptionn,
      isExpense: isExpensee,
    };
    dispatch(
      budjetActions.updateEntries({ updatedEntry: updatedEntry, id: id })
    );
  };
  return (
    <Modal basic open={isOpen} size="small">
      <Header icon>
        <Icon name="edit" />
        Update Your Data
      </Header>
      <ModalContent>
        <FormComponent
          description={descriptionn}
          amount={amountt}
          isExpense={isExpensee}
          setDescription={setDescription}
          setAmount={setAmount}
          setIsExpense={setIsExpense}
        />
      </ModalContent>
      <ModalActions onClick={() => setIsOpen(false)}>
        <Button basic color="red" inverted>
          <Icon name="remove" /> Close
        </Button>
        <Button color="green" inverted onClick={handleSubmit}>
          <Icon name="checkmark" /> Update
        </Button>
      </ModalActions>
    </Modal>
  );
}
