import React from "react";
import EventForm from "../components/EventForm";
import axios from "axios";
import { json, redirect, useActionData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewEventPage() {
  // let data = useActionData();
  // data && toast.success(data.data.message);
  return <EventForm />;
}

export const eventUpdateloader = async ({ request, params }) => {
  let data = await request.formData();

  data = Object.fromEntries(data);
  console.log(data);
  try {
    const response = await axios.post(`http://localhost:8080/events`, data);

    return redirect("/events");
  } catch (error) {
    throw json({ message: error.response.data.message }, { status: 500 });
  }
};
