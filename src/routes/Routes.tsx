import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages";
import MyHabits from "../pages/MyHabits/MyHabits";

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
