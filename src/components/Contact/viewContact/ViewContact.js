import React, { useEffect, useState } from "react";
import Mainlayout from "./../../../layout/Mainlayout";
// import Contactlist from './../contactlist/Contactlist';
import { useParams } from "react-router-dom";
import Contactservices from "../../../contactservecies/Contactservices";

function ViewContact() {
  const { Contactid } = useParams();
  const [contacts, setcontacts] = useState({});
  const [errorMessage, seterrorMessage] = useState("");

  useEffect(() => {
    Contactservices.getContact(Contactid)
      .then((res) => {
        setcontacts(res.data);
      })
      .catch((error) => {
        console.error(error);
        seterrorMessage(error.message);
      });
  }, [Contactid]);

  return (
    <Mainlayout>
      <React.Fragment>
      <div className="container">
        <div className="row">
          <div class="col my-5  ">
            {/* <!-- Card --> */}
            <div class="card testimonial-card view-contact" style={{ maxWidth: "22rem" }}>
              {/* 
  <!-- Background color --> */}
              <div class="card-up aqua-gradient"></div>

              {/* <!-- Avatar --> */}
              <div class="avatar mx-auto white">
                <img
                  src={contacts.photo}
                  class="rounded-circle img-responsive"
                  alt="woman avatar"
                />
              </div>
              {/* <!-- Name --> */}
              <h4 class="card-title">{contacts.name}</h4>

                <hr />
                      {/* <!-- Quotation --> */}
                      <p>
                  <i class="fas fa-quote-left"></i> Each contact with a human being is so rare, so precious, one should preserve it.
                </p>

              {/* <!-- Content --> */}
              <div class="card-body">
            
                  <div className="">
                  <ul className="list-group list-group-light list-group-small ">
                    <li className="list-group-item view-contact-ul border-0 ">
                    <i class="fa-solid fa-id-card text-info  "></i>
                        {contacts.id}
                       
                    </li>
                    <li className="list-group-item view-contact-ul border-0">
                    <i class="fa-regular fa-envelope text-info  "></i>
                      {contacts.email}
                    </li>
                    <li className="list-group-item view-contact-ul border-0">
                    <i class="fa-solid fa-mobile text-info "></i>
                    {contacts.mobile}
                    </li>
                    <li className="list-group-item  view-contact-ul border-0">
                    <i class="fa-solid fa-building text-info "></i>
                    {contacts.company}
                    </li>
                    <li className="list-group-item  view-contact-ul border-0">

                    </li>
                  </ul>
                  </div>
                
                {/* <pre>{JSON.stringify(contacts)}</pre> */}
          
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          </div>
      </div>
       
      </React.Fragment>
    </Mainlayout>
  );
}

export default ViewContact;
