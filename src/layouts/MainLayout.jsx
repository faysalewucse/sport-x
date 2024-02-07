import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Toaster />
      <Footer />
    </div>
  );
};

export default MainLayout;
