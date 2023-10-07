import React, { useEffect, useState } from "react";
import Mainlayout from "./../../../layout/Mainlayout";
import profile from "./../../../images/profile.jpeg";
import { Link } from "react-router-dom";
import Contactservices from "../../../contactservecies/Contactservices";


let Contactlist = () => {
  let [Contact, setContact] = useState([]);
  let [error, seterrorMessage] = useState({});

  useEffect(() => {
    Contactservices.getAllcontact()
      .then((res) => {
        setContact(res.data)
      })
      .catch((error) => {
        seterrorMessage(error.message)
      });
  }, []);

  return (
    <Mainlayout>
      <div className="container mar-t ">
      <div class=" row contact-list">
        {/* <pre>{JSON.stringify(Contact)}</pre> */}
        {
        Contact.length > 0 ? 
          <React.Fragment>
            {
            Contact.map((Contact) => {
              return (
               
                  <div class="col-md-3">
                    <div className="card my-3">
                      <div className="card-header bg-primary">
                     
                     
                      </div>
                      <div className="text-center">
                      <img
                        src={Contact.photo}
                        class="mx-auto profile-img"
                       
                        alt="profile"
                      /></div>

                      <div className=" p-3">
                      <ul className="list-group list-group-light list-group-small">
                      
                      <li class="list-group-item px-3 border-0"> <h5 className="mb-0 text-primary">{Contact.name} </h5> <span>ID: {Contact.id}</span></li>
                    

                      <li class="list-group-item px-3 border-0"> <p className="mb-0" > <i className="fa fa-envelope mr-2  text-muted"></i> {Contact.email} </p></li>
                      <li class="list-group-item px-3 border-0">  <p className="mb-0" >  <i className="fa fa-mobile mr-2 text-muted"></i>  {Contact.mobile} </p></li>
                      </ul>
                       
                       
                       
                      </div>
                      <div className="actions p-3">
                        {/* viewContact is to navigate and contact.id is to display the id details */}
                                 <Link to={`/ViewContact/${Contact.id}`}>
                                    <i className="fa fa-eye"></i> 
                                  </Link>
                        <a
                          href="/"
                          data-toggle="modal"
                          data-target="#editModal"
                          className="fa fa-edit "
                        ></a>
                        <a href="123.com" className="fa fa-trash"></a>
                      </div>
                    </div>
                </div>
              );
            })
            }
          </React.Fragment>: null
        }
      </div>
      </div>
    </Mainlayout>
  );
};
export default Contactlist;
