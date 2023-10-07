import React from "react";
import { Link } from "react-router-dom";

let SectionTwo = () => {
  return (
    <React.Fragment>
      <div className="hero-img">
        <div className="container">
          <div class="row ">
            <div class="col-md-4 text-white">
             
              <h1 class="mb-3 mar-t">
                Welcome to <span className="text-danger">SaveAcontact</span>
              </h1>
              <h6 class="mb-1 my-5">
                <p style={{lineHeight:1.5}} className="lead">
                  This data helps Google recognize which contact to connect you
                  with. For example, when you say things like "Hey Google, call
                  Sam" to your Google Assistant or smart device, this data helps
                  select the right contact to call.
                </p>
              </h6><Link to={'/Contactlist'}>
              <a
                className="btn btn-outline-light btn-md m-2"
                href="/"
                role="button"
                rel="nofollow"
                target="_blank"
              >
                ContactList Dashboard
              </a></Link>
              
              <Link to={'/CreateContact'}>
              <a
                className="btn btn-outline-light btn-md m-2"
                href="/"
                target="_blank"
                role="button"
              >
                SaveAcontact
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SectionTwo;
