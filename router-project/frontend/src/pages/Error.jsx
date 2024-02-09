import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
export default function Error() {
  const error = useRouteError();
  console.log(error);
  let message = "something went wrong";
  let title = "Error Occurred!!";
  if (error.status === 500) {
    title = "Internal Server Error";
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found!!";
    message = "could not found resource or page";
  }

  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
