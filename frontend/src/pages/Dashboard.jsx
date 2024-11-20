import { Link, Outlet } from "react-router-dom";
import { File, FilePlus2, Home } from "lucide-react";
function Dashboard({ children }) {
  const items = [
    {
      title: "Home",
      icon: Home,
      path: "/",
    },
    {
      title: "My Resume",
      icon: File,
      path: "myresume",
    },
    {
      title: "Create Resume",
      icon: FilePlus2,
      path: "createresume",
    },
  ];
  return (
    <main className="text-3xl flex justify-center m-10">
      Dashboard
      <Outlet />
      {children}
    </main>
  );
}

export default Dashboard;
