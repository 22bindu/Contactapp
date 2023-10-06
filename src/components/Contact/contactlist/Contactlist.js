import React from "react";
import Mainlayout from "./../../../layout/Mainlayout";
import Popper from 'popper.js';

let Contactlist = () => {
  return (
    <Mainlayout>
      <React.Fragment>
        <div className="container mt-3">
        <h4 className=".h4">Contact List</h4>
        <div class=" row contact-list">
          <div class="col-md-3">
            <div className="card">
            <img src="../../images/profile.jpeg" class="rounded mx-auto d-block p-3" alt="profile"/>
           
              <div className="text-center p-3">
              <h5 class="mt-0 mb-1">Amarnadh</h5>
              <p className="mb-1"><i className="fa fa-envelope mr-2 text-primary"></i> Email id</p>
              <p className="mb-1"><i className="fa fa-mobile mr-2 text-primary"></i>9290999696</p>
            </div>
              <div className="actions p-3">
                <a href="" className="fa fa-eye" ></a>
                <a href="" data-toggle="modal" data-target="#editModal" className="fa fa-edit" ></a>
                <a href="" className="fa fa-trash" ></a>
              </div>
          
          </div>
          </div>
</div>

<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
         
        </div>
      </React.Fragment>
    </Mainlayout>
  );
};
export default Contactlist;
