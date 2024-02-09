import React from "react";
import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventsNavigation";
import { useNavigation } from "react-router-dom";

export default function EventRoot() {
  const navigation = useNavigation();

  return (
    <>
      <EventNavigation />
      {navigation.state === "loading" && <p>Loading...</p>}
      <Outlet />
    </>
  );
}
