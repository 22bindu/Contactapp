import React, {useState} from "react";
import { Link,useNavigate} from "react-router-dom";
import Contactservices from "../../../contactservecies/Contactservices";
import Mainlayout from "../../../layout/Mainlayout";

let AddContact=()=>{
    let navigate=useNavigate();

   let [contact,setContact]=useState({
       name:"",
       id:"",
       email:"",
       mobile:"",
       photo:"",
       company:""
   }) 
 let updateInput=(event)=>{
       setContact({
           ...contact,
           [event.target.name]:event.target.value
       });
       setFormError({
        ...formError,
        [event.target.name]: false
        
       });

 };
//  if form is creating empty 
  //  formerror
  const [formError, setFormError] = useState({
    name: false,
    id: false,
    email: false,
    mobile: false,
    company: false
  });
 
const submitContact = (event) => {
  event.preventDefault();
  // Check if any required field is empty
  if (!contact.name || !contact.id || !contact.email || !contact.mobile || !contact.company || !contact.photo) {
    // Set an error for the empty fields
    setFormError({
      name: !contact.name,
      id: !contact.id,
      email: !contact.email,
      mobile: !contact.mobile,
      photo: !contact.photo,
      company: !contact.company
      
    });
    return;
  } try {
    Contactservices.addContact(contact).then(() => {
      navigate('/Contactlist');
    });
  } catch (error) {
    alert(error.message);
  }
};

    return(
        <Mainlayout>
        <React.Fragment>

        <div className="container w-75">
        <div className="card p-3 create-card card-heading text-white">
        <div className="card-header ">
                    <h3 className="text-danger ">Create Contact</h3>
                    <p className="">
                    This Contact Us page is for a marketing agency that works directly with businesses.
                     Since it knows its audience, Brandaffair encourages visitors to
                     "have a talk" one-on-one rather than providing a one-way communication channel via support resources.
                    </p>

                </div>
          <div className="row ">
            {/* <pre>{JSON.stringify(contact)}</pre> */}
            <div className="col-md-7">
                
              <form onSubmit={submitContact}>
                <div className="form-group col-md-11 mb-2">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"name"}
                  
                    onChange={updateInput}
                  />
                </div>
                <div className="form-group col-md-11 mb-2">
                  <label>ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"id"}
                 
                    onChange={updateInput}
                  />
                </div>
                <div className="form-group col-md-11 mb-2">
                  <label>E-mail ID</label>
                  <input
                    type="email"
                    className="form-control"
                    name={"email"}
                  
                    onChange={updateInput}
                  />
                </div>
                <div className="form-group col-md-11 mb-2">
                  <label title="Please enter 10 digits">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"mobile"}
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
                   
                    onChange={updateInput}
                  />
                </div>
                <div className="form-group col-md-11 mb-2">
                  <label>Upload Profile Picture</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"photo"}
                    
                    onChange={updateInput}
                  />
                </div>
                <div className="form-group col-md-11 mb-2">
                <button className={'btn btn-success  me-5'}>
                                        Create
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
                  src={contact.photo}
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
export default AddContact;