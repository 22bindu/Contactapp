import React, { useEffect, useState } from "react";
import Mainlayout from "./../../../layout/Mainlayout";
// import Contactlist from './../contactlist/Contactlist';
import { Link, useParams } from "react-router-dom";
import Contactservices from "../../../contactservecies/Contactservices";
import 'bootstrap/js/src/modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewContact() {
  const { Contactid } = useParams();
  const [contacts, setcontacts] = useState({});
  const [error, seterrorMessage] = useState("");

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
            <div className="col my-5">
              <div className="card testimonial-card view-contact" style={{ maxWidth: "22rem" }}>
                <div className="card-up aqua-gradient"></div>
                <div className="avatar mx-auto white">
                  <img
                    src={contacts.photo} // Use the correct image source here
                    className="rounded-circle img-responsive"
                    alt="woman avatar"
                    data-bs-toggle="modal"
                    data-bs-target="#imagemodal" // Correct the target ID
                  />
                </div>
                <h4 className="card-title">{contacts.name}</h4>
                <hr />
                <p>
                  <i className="fas fa-quote-left"></i> Each contact with a human being is so rare, so precious, one should preserve it.
                </p>
          

                {/* <!-- Content --> */}
                <div class="card-body">
                  <div className="">
                    <ul className="list-group list-group-light list-group-small ">
                      <li className="list-group-item view-contact-ul border-bottom-1 ">
                        <i class="fa-solid fa-id-card text-info mx-2 "></i>
                        {contacts.id}
                      </li>
                      <li className="list-group-item view-contact-ul border-bottom-1">
                        <i class="fa-regular fa-envelope text-info mx-2   "></i>
                        {contacts.email}
                      </li>
                      <li className="list-group-item view-contact-ul border-bottom-1">
                        <i class="fa-solid fa-mobile text-info mx-2 "></i>
                        {contacts.mobile}
                      </li>
                      <li className="list-group-item  view-contact-ul border-bottom-1">
                        <i class="fa-solid fa-building text-info mx-2 "></i>
                        {contacts.company}
                      </li>
                      <div className="row my-3">
                        
                      <Link
                        className="btn btn-sm aqua-gradient w-50"
                        to={"/Contactlist"}
                      >
                        Back to home
                      </Link>
                      <Link
                        className="btn btn-sm aqua-gradient w-50"
                        to={`/EditContact/${contacts.id}`}
                      >
                        Edit
                      </Link>
                      </div>
                    </ul>
                  </div>

                  {/* <pre>{JSON.stringify(contacts)}</pre> */}
                </div>
              </div>
              {/* <!-- Card --> */}
            </div>
          </div>
        </div>

            {/* Modal */}
            <div className="modal fade" id="imagemodal" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog" role="document">
        
               <div className="modal-content">
              <div className="modal-body text-center">
              <div className="modal-header "> 
            <h4 className="card-title text-info">{contacts.name}</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           
             </div>
                <img src={contacts.photo} alt="Popup"  className="w-50 h-50" /> {/* Use the correct image source */}
              </div>
            </div>
          </div>
        </div>
      
      </React.Fragment>
    </Mainlayout>
  );
}

export default ViewContact;
