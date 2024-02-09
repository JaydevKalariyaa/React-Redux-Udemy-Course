import React from "react";
import { useParams, json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
export default function EventDetailPage() {
  let { event } = useLoaderData();
  return (
    <>
      <EventItem event={event} />
    </>
  );
}
export const eventDetailloader = async ({ params }) => {
  let id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({ message: "Error in Fetching Event" }, { status: 500 });
  }
  return response;
};
