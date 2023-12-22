import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HabitPage, Home, MyHabits } from "../pages";
import { allHabits } from "../config";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "my-habits", element: <MyHabits /> },
      { path: "/my-habits/:id", element: <HabitPage data={allHabits} /> },
      { path: "/:id", element: <HabitPage data={allHabits} /> },
    ],
  },
]);
