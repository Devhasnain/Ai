import React from "react";
import { NavLink } from "react-router-dom";
import '../CSS/navbar.css';
import Logo from "./Logo";
import SmallScreenMenu from '../Components/SmallScreenMenu';
import Buttons from "../SmallComps/Buttons";

const Navbar = () => {
  return (
    <div className="container-fluid app-navbar border-bottom p-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-4 col-sm-4 col">
            <NavLink to='/'>
            <Logo/>
            </NavLink>
          </div>
          <div className="col-lg-6 col-md col-sm col">
            <div className="small-screens text-end">
              <SmallScreenMenu/>
            </div>
            <ul className="nav align-items-center justify-content-end large-screens">
              <li className="nav-item mx-2">
                <NavLink to="/pricing" className="nav-link text-dark btn btn-light">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/contact" className="nav-link text-dark btn btn-light">
                 Contact
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/" className="nav-link text-dark">
                  <Buttons/>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
