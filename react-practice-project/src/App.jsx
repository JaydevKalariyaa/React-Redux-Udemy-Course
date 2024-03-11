import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import NewPosts from "./routes/NewPosts";
import Posts from "./routes/posts";

import PostDetail from "./routes/PostDetail";
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Posts />,
          children: [
            { path: "new-post", element: <NewPosts /> },
            {
              path: ":id",
              element: <PostDetail />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
