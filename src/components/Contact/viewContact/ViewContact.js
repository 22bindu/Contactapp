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
              <div className="from-group  mb-1">
                    <label className=""> </label>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      value={contacts.id}
                    />
                  </div>
                  <div className="from-group  mb-1">
                    <label className=""> </label>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      value={contacts.name}
                    />
                  </div>
                  <div className="from-group  s">
                    <label className=""> </label>
                    <input
                      type="email"
                      className="form-control"
                      name=""
                      value={contacts.email}
                    />
                  </div>
                  <div className="from-group  ">
                    <label className=""></label>
                    <input
                      type="mobile"
                      className="form-control"
                      name=""
                      value={contacts.mobile}
                    />
                  </div>
                  <div className="from-group  ">
                    <label className=""></label>
                    <input
                      type="mobile"
                      className="form-control"
                      name=""
                      value={contacts.company}
                    />
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">
                      
                    </li>
                    <li className="list-group-item"></li>
                    <li className="list-group-item"></li>
                    <li className="list-group-item"></li>
                    <li className="list-group-item"></li>
                  </ul>
                
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
