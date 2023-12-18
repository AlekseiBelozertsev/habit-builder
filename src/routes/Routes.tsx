import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, MyHabits } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "my-habits", element: <MyHabits /> },
    ],
  },
]);
