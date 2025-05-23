import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";

export const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};
