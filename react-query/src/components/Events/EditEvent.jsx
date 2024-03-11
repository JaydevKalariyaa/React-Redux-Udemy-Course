import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation } from "@tanstack/react-query";
import { updateEvent } from "../../util/http.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.jsx";
export default function EditEvent() {
  const { data, id } = useParams();
  const formData = JSON.parse(data);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const prevEvent = queryClient.getQueryData();
      await queryClient.cancelQueries({
        queryKey: ["events", { eventFetch: id }],
      });
      queryClient.setQueryData(["events", { eventFetch: id }], data.event);
      return { prevEvent };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(
        ["events", { eventFetch: id }],
        context.prevEvent
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });
  function handleSubmit(formData) {
    mutate({ id: id, event: formData });
    navigate(`/events/${id}`);
  }

  function handleClose() {
    navigate("../");
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={formData} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}
