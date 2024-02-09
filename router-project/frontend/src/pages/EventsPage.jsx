import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";

function EventsPage() {
  const { events } = useLoaderData();
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const eventLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Error in Fetching Data" }, { status: 500 });
  }
  return response;
};
