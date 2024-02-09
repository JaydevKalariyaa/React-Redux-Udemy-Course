import React from "react";
import { useParams, json, useLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

export const eventDeleteAction = async ({ request, params }) => {
  let id = params.eventId;
  try {
    const response = await axios.delete(`http://localhost:8080/events/${id}`);
    toast.success(response.data.message);
    return redirect("/events");
  } catch (error) {
    throw json({ message: error.response.data.message }, { status: 500 });
  }
};
