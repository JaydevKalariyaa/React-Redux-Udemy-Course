import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { queryClient } from "./util/http.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
