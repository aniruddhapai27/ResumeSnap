import Navbar from "@/components/Navbar";
import Contet from "./Content";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
