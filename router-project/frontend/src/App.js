// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import EventsPage from "./pages/EventsPage";
import NewEventPage, { eventAddloader } from "./pages/NewEventPage";
import Root from "./pages/Root";
import EventRoot from "./pages/EventRoot";
import { eventLoader } from "./pages/EventsPage";
import Error from "./pages/Error";
import { eventDetailloader, eventDeleteAction } from "./pages/EventDetailPage";
import { ToastContainer } from "react-toastify";
import { eventUpdateloader } from "./pages/EditEventPage";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "events",
          element: <EventRoot />,
          children: [
            {
              path: "",
              element: <EventsPage />,
              loader: eventLoader,
            },
            {
              path: ":eventId",
              element: <EventDetailPage />,
              loader: eventDetailloader,
              action: eventDeleteAction,
            },
            {
              path: ":eventId/edit",
              element: <EditEventPage />,
              loader: eventDetailloader,
              action: eventUpdateloader,
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: eventAddloader,
            },
          ],
        },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
