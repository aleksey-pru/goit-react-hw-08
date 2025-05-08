import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <div
      className={
        "color: rgb(248, 240, 240) bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 w-sm"
      }
    >
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
