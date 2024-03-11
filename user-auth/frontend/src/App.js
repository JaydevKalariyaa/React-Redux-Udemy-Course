import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import Authentication, { authenticationAction } from "./pages/Authentication";
import { ToastContainer } from "react-toastify";
import { logoutAction } from "./pages/logout";
import getToken, { getAuthLoader } from "./util/getToken";
const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: getToken,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: getAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: getAuthLoader,
          },
        ],
      },
      {
        path: "auth",
        element: <Authentication />,
        action: authenticationAction,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
