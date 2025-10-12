import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer";

function MainComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainComponent;
