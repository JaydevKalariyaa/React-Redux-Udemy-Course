import React from "react";
import EventForm from "../components/EventForm";
import { useLoaderData, json, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function EditEventPage() {
  const { event } = useLoaderData();
  return <EventForm event={event} />;
}

export const eventUpdateloader = async ({ request, params }) => {
  let data = await request.formData();
  let id = params.eventId;
  data = Object.fromEntries(data);
  try {
    const response = await axios.patch(
      `http://localhost:8080/events/${id}`,
      data
    );
    toast.success(response.data.message);
    return redirect("/events");
  } catch (error) {
    throw json({ message: error.response.data.message }, { status: 500 });
  }
};
