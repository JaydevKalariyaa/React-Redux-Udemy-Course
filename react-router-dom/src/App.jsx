import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Product";
import RootLayout from "./pages/Root";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product", element: <ProductsPage /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
