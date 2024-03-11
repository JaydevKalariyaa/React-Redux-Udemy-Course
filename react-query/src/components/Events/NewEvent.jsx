import { Link, redirect, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation } from "@tanstack/react-query";
import { addEvents } from "../../util/http.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.jsx";
export default function NewEvent() {
  const navigate = useNavigate();
  const { mutate, error, isError, isPending } = useMutation({
    mutationFn: addEvents,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });
  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        <>
          {isPending ? (
            "loading..."
          ) : (
            <>
              <Link to="../" className="button-text">
                Cancel
              </Link>
              <button type="submit" className="button">
                Create
              </button>
            </>
          )}
        </>
      </EventForm>
      {isError && (
        <ErrorBlock
          title="failed to add Events"
          message={error.info?.message || "Check your input values"}
        />
      )}
    </Modal>
  );
}
