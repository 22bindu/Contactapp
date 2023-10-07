import { Link } from "react-router-dom";
import React from "react";
// import SectionTwo from "./SectionTwo";

let Navbar = () => {
  return (
    <React.Fragment>
      
       
         
            <div className="nav1">
            <div className="container">
              <Link to={"/"} className=" text-white h5 text-dec">
                Save<span className="h3 text-danger">A</span>contact
              </Link>
              <div className=" text-white">
                <ul className="Snavbar nav1">
                  <li className="mx-5">About</li>
                  <li className="mx-5">Contact</li>
                  <li className="mx-5">Login</li>
                  <li className="mx-5">Register</li>
                  <i class="fa-brands fa-facebook-f mx-3 ico"></i>
                  <i class="fa-brands fa-twitter mx-3 ico"></i>
                  <i class="fa-brands fa-instagram mx-3 ico"></i>

                </ul>
              </div>
            </div>
          </div>
        
  
    </React.Fragment>
  );
};
export default Navbar;
