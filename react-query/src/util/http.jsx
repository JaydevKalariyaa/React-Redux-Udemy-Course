import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

export default async function fetchEvents({ searchElement }) {
  let url = "http://localhost:3000/events";
  if (searchElement) {
    url += "?search=" + searchElement;
  }
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}
export async function fetchImages() {
  let url = "http://localhost:3000/events/images";
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error(
      "An error occurred while fetching the event's images"
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { images } = await response.json();

  return images;
}
export async function addEvents(formData) {
  const response = await fetch("http://localhost:3000/events", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while adding the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}

export async function fetchEvent({ id, signal }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}

export async function deleteEvent({ id }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const error = new Error("An error occurred while deleting the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}
export async function updateEvent({ id, event }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: "PUT",
    body: JSON.stringify({ event: event }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while updating the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}
