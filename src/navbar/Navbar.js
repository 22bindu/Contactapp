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
                 <Link className="li-item">  <li className="mx-5">About</li></Link> 
                <Link className="li-item">  <li className="mx-5">Contact</li></Link> 
                <Link className="li-item" to={'/Login'}>  <li className="mx-5">Login</li></Link>
                <Link className="li-item" to={'/Register'}> <li className="mx-5">Register</li></Link>
                <Link className="li-item">  <i class="fa-brands fa-facebook-f mx-3 ico"></i></Link>
                <Link className="li-item"><i class="fa-brands fa-twitter mx-3 ico"></i></Link>
                <Link className="li-item">  <i class="fa-brands fa-instagram mx-3 ico"></i></Link>

                </ul>
              </div>
            </div>
          </div>
        
  
    </React.Fragment>
  );
};
export default Navbar;
