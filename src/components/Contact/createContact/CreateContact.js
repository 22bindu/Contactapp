import React from "react";
import Mainlayout from './../../../layout/Mainlayout';
let CreateContact=()=>{

    return(
        <Mainlayout>
        <React.Fragment>
        <div className="container w-50 ">
       
        <div className="card p-3  create-card ">
            <div className="row align-items-center">
            <div className="col-md-8">
                <form>
                    <div className="from-group col-md-8 mb-2">
                        <label className="">Name</label>
                        <input type="text" className="form-control" name="" value="" />
                    </div>
                    <div className="from-group col-md-8 mb-2">
                        <label className="">E-mail ID</label>
                        <input type="email" className="form-control" name="" value={""} />
                    </div>
                    <div className="from-group col-md-8 mb-2">
                        <label className="">Phone Number</label>
                        <input type="number" className="form-control" name="" value={""} />
                    </div>
                    <div className="from-group col-md-8 mb-2">
                        <label className="">Upload Profile Picture</label>
                        <input type="file" className="form-control" name="" value={""} />
                    </div>
                    <div className="from-group col-md-8 mb-2">
                        <input type="submit" className="btn btn-sm btn-primary" name="Submit" value={"Submit"} />
                        <a href="#" className="btn btn-sm btn-secondary">Clear</a>
                    </div>
                </form>
            </div>

            <div className="col-md-4 h-100vh">
                <div className="profile-pic-holder">
                    <img src="" alt="profile" />
                </div>
                </div>
        </div>
        </div>
        </div>

            
        </React.Fragment>
        </Mainlayout>
        
        );

}
export default CreateContact