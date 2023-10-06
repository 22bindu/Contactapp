import { Link } from "react-router-dom";
import React from "react";
import SectionTwo from "./SectionTwo";
let Navbar = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-vilt text-white">
        <div class="container">
       <Link to={"/"} class="navbar-brand me-2 text-white" href="https://mdbgo.com/"> 
        SaveAcontact
          </Link>

          {/* <div class="collapse navbar-collapse " id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Dashboard
                </a>
              </li>
            </ul> */}

            <div class="d-flex align-items-center">
              <Link to={'/Login'}
              type="button" class="btn btn-link px-3 me-2 text-white">
                Login
              </Link>
              <button type="button" class="btn btn-inf me-3 text-white">
                Sign up for free
              </button>
             
              <i class="fa-brands fa-facebook-f text-white mx-3"></i>
                <i class="fa-brands fa-twitter text-white mx-3 "></i>
                <i class="fa-brands fa-linkedin-in text-white mx-3"></i>
            </div>
          </div>
        
      </nav>
      {/* <SectionTwo/> */}
    </React.Fragment>
  );
};
export default Navbar;
