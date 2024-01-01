import { Outlet, Route, Routes } from "react-router";
import { Habit, Header, SectionHeader } from "./collections";
import Footer from "./collections/Footer/Footer";
import { Dashboard, HabitPage, Home, MyHabits, PageNotFound } from "./pages";
import { BrowserRouter } from "react-router-dom";
import { allHabits } from "./config";

function App() {
  const data = allHabits;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='my-habits' element={<MyHabits />} />
          <Route path='my-habits/:id' element={<HabitPage data={data} />} />
          <Route path='/:id' element={<HabitPage data={data} />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
