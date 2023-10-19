import React, { useEffect, useState } from "react";
import Mainlayout from './../../../layout/Mainlayout';
import '../../.././App.css';
import { useNavigate, useParams ,Link } from "react-router-dom";
import Contactservices from './../../../contactservecies/Contactservices';

let EditContact =()=>{
    let[Contact , setContact ]= useState({});
    let{Contactid}=useParams();


    useEffect(()=>{
        Contactservices.EditContact(Contactid).then((res)=>{
            setContact(res.data);
        }).catch((error)=>{
            console.error("error",error);
    
        });

    },[Contactid]);

  





    let navigate= useNavigate();
   let UpdateInput=(event)=>{
        setContact({
            ...Contact,
            [event.target.name]:event.target.value,
        });
    }


    let handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          let response= await Contactservices.EditContact(Contactid , Contact)
          if(response){
              navigate('/Contactlist', {replace:true})
          }
            
        }catch(error){
          navigate('/CreateContact', {replace:true})
        }
      
      }


    return(
        <Mainlayout>
        <React.Fragment>
        <div className="container w-75">
        <div className="card p-3 create-card">
          <div className="row ">
            <pre>{JSON.stringify(Contact)}</pre>
            <div className="col-md-7">
              <form onSubmit={handleSubmit}>
                <div className="form-group col-md-8 mb-2">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"name"}
                   value={Contact.name}
                    onChange={UpdateInput}
                  />
                </div>
                <div className="form-group col-md-8 mb-2">
                  <label>ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"id"}
                    value={Contact.id}
                    onChange={UpdateInput}
                  />
                </div>
                <div className="form-group col-md-8 mb-2">
                  <label>E-mail ID</label>
                  <input
                    type="email"
                    className="form-control"
                    name={"email"}
                   value={Contact.email}
                    onChange={UpdateInput}
                  />
                </div>
                <div className="form-group col-md-8 mb-2">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name={"phone"}
                    value={Contact.phone}
                    
                    onChange={UpdateInput}
                  />
                </div>
                <div className="form-group col-md-8 mb-2">
                  <label>Company</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"company"}
                    value={Contact.company}
                    onChange={UpdateInput}
                  />
                </div>
                <div className="form-group col-md-8 mb-2">
                  <label>Upload Profile Picture</label>
                  <input
                    type="text"
                    className="form-control"
                    name={"photo"}
                    value={Contact.photo}
                    onChange={UpdateInput}
                  />
                </div>
                <div className="form-group col-md-8 mb-2">
                  <input
                    type="submit"
                    className="btn me-3 btn-primary"
                    name={"Submit"}
                    value="Submit"
                  />
                  <Link to="/Contactlist" className="btn btn-primary">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>

            <div className="col">
              <div className="profile-pic-holder">
                <img
                  src={Contact.photo}
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