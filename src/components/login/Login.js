import React from "react";
import Mainlayout from "./../../layout/Mainlayout";
import "../css/login.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let Login = () => {
  return (
    <Mainlayout>

      <React.Fragment>
      <ToastContainer theme="colored"></ToastContainer>
        <div className="container">
          <div class="row justify-content-center">
            <div class="col-md-6 ">
              <div class="wrap">
                <div class="img"></div>
                <div class="login-wrap p-4 p-md-5">
                  <div class="d-flex">
                    <div class="w-100">
                      <h3 class="mb-4">Sign In</h3>
                    </div>
                    <div class="w-100">
                      <p class="social-media d-flex justify-content-end">
                        <a
                          href="/"
                          class="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span class="fa-brands fa-facebook"></span>
                        </a>
                        <a
                          href="/"
                          class="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span class="fa-brands fa-twitter"></span>
                          
                        </a>
                      </p>
                    </div>
                  </div>
                  <form action="#" class="signin-form">
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        required=""
                        
                      />
                      <label class="form-control-placeholder" for="username">
                        Username
                      </label>
                    </div>
                    <div class="form-group">
                      <input
                        id="password-field"
                        type="password"
                        class="form-control"
                        required=""
                        
                      />
                      <label class="form-control-placeholder" for="password">
                        Password
                      </label>
                      <span
                        toggle="#password-field"
                        class="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="form-control btn btn-primary rounded submit px-3"
                       
                      >
                        Sign In
                      </button>
                    </div>
                    <div class="form-group d-md-flex">
                      <div class="w-50 text-left">
                        <label class="checkbox-wrap checkbox-primary mb-0">
                          Remember Me
                          <input type="checkbox" className="ms-2" />
                         
                        </label>
                      </div>
                      <div class="w-50 text-md-right">
                        <a className="a-1" href="#">Forgot Password</a>
                      </div>
                    </div>
                  </form>
                  <p class="text-center">
                    Not a member?
                    <a className="a-1" data-toggle="tab" href="#signup">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Mainlayout>
  );
};
export default Login;
