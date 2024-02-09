import React from "react";
import EventForm from "../components/EventForm";
import { useLoaderData } from "react-router-dom";
export default function EditEventPage() {
  const { event } = useLoaderData();
  return <EventForm event={event} />;
}
