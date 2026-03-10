import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PropsCard from "../components/PropsCard";

const Layout = () => {
    const rating = 5;
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center">
        <PropsCard
          title="Waterfall"
          img="../assets/react.svg"
          description="Tallest waterfall in Sri Lanka"
          rating = {rating}
        />
        <PropsCard
          title="Bentota"
          img="../assets/react.svg"
          description="Bentota is a small town and a municipality in Sri Lanka"
          rating={rating}
        />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
