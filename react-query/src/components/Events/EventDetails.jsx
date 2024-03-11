import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent } from "../../util/http.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.jsx";
import EditEvent from "./EditEvent.jsx";
export default function EventDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error, isError, isPending } = useQuery({
    queryKey: ["events", { eventFetch: id }],
    queryFn: ({ signal }) => fetchEvent({ id: id, signal }),
  });
  const { mutate, isPending: isPendingDeletion } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });
  const handleDelete = (id) => {
    if (confirm("Are You sure you want to delete Event?")) mutate({ id });
  };

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isError && (
        <div id="event-detail-content" className="center">
          <ErrorBlock
            title="Error in fetching event!!"
            message={error.info?.message || "Come again later"}
          />
        </div>
      )}
      {isPending && (
        <div id="event-detail-content" className="center">
          <p>Loading...</p>
        </div>
      )}
      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={() => handleDelete(data.id)}>
                {isPendingDeletion ? "Deleting Event..." : "Delete"}
              </button>
              <Link to={`edit/${JSON.stringify(data)}`}>Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data.date} {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
