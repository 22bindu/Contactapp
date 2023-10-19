import React, { useEffect, useState } from "react";
import Mainlayout from "./../../../layout/Mainlayout";

import { Link} from "react-router-dom";
import Contactservices from "../../../contactservecies/Contactservices";




let Contactlist = () => {
  let [Contact, setContact] = useState([]);
  let [error, seterrorMessage] = useState({});
  let[search , setSearch]= useState("")
  

  useEffect(() => {
    Contactservices.getAllcontact()
      .then((res) => {
        setContact(res.data);
      })
      .catch((error) => {
        seterrorMessage(error.message);
      });
  }, []);
  // delete contact functionality
  // let navigate =useNavigate();
  const removeContact = (Contactid) => {
    try {
      // Attempt to call the `deletContact` method from the `Contactservices` to delete the contact with the given ID
      Contactservices.deletContact(Contactid).then(() => {
          // After the deletion is successful, update the state of contacts by filtering out the deleted contact
      setContact((prevContact) => prevContact.filter((contact) => contact.id !== Contactid));
      });
  } catch (error) {
      // If any errors occur during the deletion process, catch and handle the error
      alert(error.message);
  }
  };
  return (
    <Mainlayout>
      <div className="container mar-t ">
        {/* search */}
       
        <div className="row g-1">
              
            <div class="col-6  ">             
              <input
                type="search"
                class="form-control"
              
                id="inlineFormInputGroup"
                placeholder="Username"
                onChange={(event)=>{
                  setSearch(event.target.value)
                }}/>
              
            </div>         
          <div class="col-auto">
            <button type="submit" class="btn btn-primary "  >
              Search 
            </button>
            <Link to={'/CreateContact/:Contactid'} className =" col-auto btn btn-primary  ms-5"  >Add Contact</Link>
        
          </div>
        </div>

        <div class=" row contact-list">
          {/* <pre>{JSON.stringify(Contact)}</pre> */}
          {Contact.length > 0 ? (
            <React.Fragment>
              {
              Contact.filter((Contact)=>{
                  return search.toLowerCase() === '' ? Contact:Contact.name.toLowerCase().includes(search)
              }).map((Contact) => {
                return (
                  <div class="col-md-3">
                    <div className="card my-3">
                      <div className="card-header bg-dark ">
                        <h5 className="mb-0 text-primary text-white text-center">
                          {Contact.name}
                        </h5>
                      </div>
                      <div className="text-center">
                        <img
                          src={Contact.photo}
                          class="mx-auto profile-img"
                          alt="profile"
                        />
                      </div>

                      <div className=" p-3">
                        <ul className="list-group list-group-light list-group-small">
                          <li class="list-group-item px-3 border-0">
                           
                            <span>ID: {Contact.id}</span>
                          </li>
                          <li class="list-group-item px-3 border-0">
                         
                            <p className="mb-0">
                              
                              <i class="fa-solid fa-building mr-2 text-muted "></i>
                              {Contact.company}
                            </p>
                          </li>

                          <li class="list-group-item px-3 border-0">
                            
                            <p className="mb-0">
                              
                              <i className="fa fa-envelope mr-2  text-muted"></i>
                              {Contact.email}
                            </p>
                          </li>
                          <li class="list-group-item px-3 border-0">
                            
                            <p className="mb-0">
                              
                              <i className="fa fa-mobile mr-2 text-muted"></i>
                              {Contact.mobile}
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="actions p-3">
                        {/* viewContact is to navigate and contact.id is to display the id details */}
                        <Link to={`/ViewContact/${Contact.id}`}>
                          <i className="fa fa-eye"></i>
                        </Link>
                        <Link to={`/EditContact/${Contact.id}`}> 
                      <i className="fa fa-edit "></i> 
                        </Link>
                        <Link to={`/Contactlist`}>
                          <i  className="fa fa-trash"  onClick={()=>{removeContact(Contact.id)}}></i>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </Mainlayout>
  );
};
export default Contactlist;
