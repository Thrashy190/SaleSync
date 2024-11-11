import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex-grow bg-light m-10">
        <div className="body flex-grow-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
