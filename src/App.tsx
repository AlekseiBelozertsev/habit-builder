import { Outlet } from "react-router";
import { Habit, Header, SectionHeader } from "./collections";
import Footer from "./collections/Footer/Footer";

function App() {
  return (
    <div className='flex flex-col justify-between h-screen items-center bg-gray-200'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
