import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

function Navbar() {
  return (
    <>
      <Header />

      <div className="bg-white shadow-sm mt-16">
        <div className="flex max-w-7xl mx-auto px-4 py-2">
          <ul className="flex gap-5 text-blue-600">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
