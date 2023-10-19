import React, { useEffect, useState } from "react";
import Mainlayout from "./../../../layout/Mainlayout";
// import Contactlist from './../contactlist/Contactlist';
import { Link, useNavigate, useParams} from "react-router-dom";
import Contactservices from "../../../contactservecies/Contactservices";
import 'bootstrap/js/src/modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function EditContact() {
  const { Contactid } = useParams();
  const [contacts, setContacts] = useState({});
  const [error, seterrorMessage] = useState("");

  useEffect(() => {
    Contactservices.getContact(Contactid)
      .then((res) => {
        setContacts(res.data);
      })
      .catch((error) => {
        console.error(error);
        seterrorMessage(error.message);
      });
  }, [Contactid]);

    //   to update the details in input fileds
    let navigate = useNavigate();
    let updateInput = (event) => {
      setContacts({
        ...contacts,
        [event.target.name]: event.target.value,
      });
    };

    // it is for form submittion to update the contact and reflect in contactlist 
    let submitForm = (event) => {
        event.preventDefault();
        try {
          Contactservices.UpdateContact(Contactid, contacts)
            .then(() => {
              navigate("/Contactlist");
            })
            .catch((error) => {
              alert("Error updating contact: " + error.message);
            });
        } catch (error) {
          alert("Error contact: " + error.message);
        }
      };

  return (
    <Mainlayout>
   
    <React.Fragment>

        <div className="container w-75">
        <div className="card p-3 create-card card-heading text-white">
        <div className="card-header ">
                    <h3 className="text-danger ">EditContact</h3>
                    <p className="">
                    This Contact Us page is for a marketing agency that works directly with businesses.
                     Since it knows its audience, Brandaffair encourages visitors to
                     "have a talk" one-on-one rather than providing a one-way communication channel via support resources.
                    </p>

                </div>
          <div className="row ">
            {/* <pre>{JSON.stringify(contact)}</pre> */}
            <div className="col-md-7">
                
              <form onSubmit={submitForm}>
                <div className="form-group col-md-11 mb-2">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"name"}
                     value={contacts.name} 
                    onChange={updateInput}
                  />
                </div>
                <div className="form-group col-md-11 mb-2">
                  <label>ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"id"}
                   value={contacts.id} 
                 
                    onChange={updateInput}
                  />
                </div>
                <div className="form-group col-md-11 mb-2">
                  <label>E-mail ID</label>
                  <input
                    type="email"
                    className="form-control"
                    name={"email"}
                    value={contacts.email} 
                    onChange={updateInput}
                  />
                </div>
                <div className="form-group col-md-11 mb-2">
                  <label title="Please enter 10 digits">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"mobile"}
                    value={contacts.mobile} 
                    pattern="[0-9]{10}" 
                    onChange={updateInput}
                  />
                </div>
                <div className="form-group col-md-11 mb-2">
                  <label>Company</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"company"}
                    value={contacts.company} 
                   
                    onChange={updateInput}
                  />
                </div>
                <div className="form-group col-md-11 mb-2">
                  <label>Upload Profile Picture</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"photo"}
                    value={contacts.photo} 
                    onChange={updateInput}
                  />
                </div>
                <div className="form-group col-md-11 mb-2">
                <button className={'btn btn-success  me-5'}>
                                        Update
                                    </button>
                  <Link to="/Contactlist" className="btn btn-primary">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>

            <div className="col">
              <div className="profile-pic-holder">
                <img
                  src={contacts.photo}
                  alt="profile"
                  className="w-100% Add-profile-pic-holder"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        </React.Fragment>
    </Mainlayout>
   
  );
}

export default EditContact;
