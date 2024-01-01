import { Outlet } from "react-router";
import { Footer, Header } from "../../collections";

const Dashboard = () => {
  return (
    <div className='flex flex-col justify-between h-screen items-center bg-gray-200'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Dashboard;
