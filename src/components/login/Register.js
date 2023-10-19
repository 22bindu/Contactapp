import React, { useState } from "react";
import Mainlayout from "./../../layout/Mainlayout";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

let Register = () => {
  const [name, nameChange] = useState("");
  const [id, idChange] = useState("");
  const [email, emailChange] = useState("");
  const [mobile, mobileChange] = useState("");
  const [password, passwordChange] = useState("");
  const [Address, AddressChange] = useState("");
  const [Country, CountryChange] = useState("India");
  const [gender, genderChange] = useState("Female");
  const navigate = useNavigate();
  // validation

  let IsValidate = () => {
    let isProceed = true;
    let errorMessage = "Please Enter Valid Details:\n";
    if (id === null || id === "") {
      isProceed = false;
      errorMessage += "- Username\n";
    }
    if (name === null || name === "") {
      isProceed = false;
      errorMessage += "- Name\n";
    }
    if (password === null || password === "") {
      isProceed = false;
      errorMessage += "- Password\n";
    }
    if (mobile === null || mobile === "") {
      isProceed = false;
      errorMessage += "- Mobile\n";
    }
    if (Country === null || Country === "") {
      isProceed = false;
      errorMessage += "- Country\n";
    }
    if (gender === null || gender === "") {
      isProceed = false;
      errorMessage += "- Gender\n";
    }
    if (email === null || email === "") {
      isProceed = false;
      errorMessage += "- Email\n";
    }
  
    if (!isProceed) {
      toast.warning(errorMessage);
// Check if the email matches the basic pattern for a valid email address
// The pattern requires alphanumeric characters for the username, followed by an '@' symbol,
// then alphanumeric characters for the domain, followed by a dot (.) and alphabetic characters for the top-level domain.                                                                                                        
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      isProceed = false;
      toast.warning("Please enter a valid email");
    }
  
    return isProceed;
  };
  
  // SUBMIT FUNCTIOn
  let handleSubmit = (e) => {
    e.preventDefault();
    if (IsValidate()) {
      let regObj = {id, name, email, mobile, password, Address, Country, gender };
      fetch("http://localhost:3500/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          setTimeout(() => {
            toast.success('Registered Successfully');
            setTimeout(() => {
              navigate("/Login");
              setTimeout(() => {
                toast.info("Now try logging in!"); // Display a toast message after navigation
              }, 500); // Adjust the delay as needed
            }, 1500); // Adjust the delay as needed
          }, 1000); // Adjust the delay as needed
        })
        .catch((error) => {
          toast.error("Registration failed: " + error.message);
        });
    }
  };

  return (
    <Mainlayout>
      <React.Fragment>
      <ToastContainer theme="colored" />
        <div className="container">
          <div class="row justify-content-center">
            <div class="col-md-6 ">
              <div class="wrap">
                <div class="img"></div>
                <div class="login-wrap p-4 p-md-5">
                  <div class="d-flex">
                    <div class="w-100">
                      <h3 class="mb-4">Register</h3>
                    </div>
                    <div class="w-50">
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
                  <form onSubmit={handleSubmit} class="signin-form">
                  <div class="form-group mt-1">
                      <input
                        type="text"
                        class="form-control"
                        value={id}
                        onChange={(e) => idChange(e.target.value)}
                        placeholder="Username"
                      />
                    </div>
                    <div class="form-group mt-1">
                      <input
                        type="text"
                        class="form-control"
                        value={name}
                        onChange={(e) => nameChange(e.target.value)}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div class="form-group ">
                      <input
                        type="text"
                        class="form-control"
                        value={email}
                        onChange={(e) => emailChange(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group ">
                      <input
                        type="text"
                        class="form-control"
                        value={mobile}
                        pattern="[0-9]{10}" 
                        onChange={(e) => mobileChange(e.target.value)}
                        placeholder="mobile no"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        id="password-field"
                        type="password"
                        class="form-control"
                        value={password}
                        onChange={(e) => passwordChange(e.target.value)}
                        placeholder="password"
                      />

                      <span
                        toggle="#password-field"
                        class="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div class="form-group ">
                      <input
                        type="text"
                        class="form-control"
                        value={Address}
                        onChange={(e) => AddressChange(e.target.value)}
                        placeholder="Address"
                      />
                    </div>
                    <div class="form-group ">
                      <input
                        type="text"
                        class="form-control"
                        value={Country}
                        onChange={(e) => CountryChange(e.target.value)}
                        placeholder="Country"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-around my-3">
                      Gender:
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          checked={gender === "Female"}
                          onChange={(e) => genderChange(e.target.value)}
                        />
                        <label class="form-check-label">Female</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          checked={gender === "male"}
                          onChange={(e) => genderChange(e.target.value)}
                        />
                        <label class="form-check-label">Male</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          checked={gender === "Others"}
                          onChange={(e) => genderChange(e.target.value)}
                        />
                        <label class="form-check-label">Others</label>
                      </div>
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="form-control btn btn-primary rounded submit px-3"
                      >
                        Register
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
                        <a className="a-1" href="/">
                          Forgot Password
                        </a>
                      </div>
                    </div>
                  </form>
                  <p class="text-center">
                    member?
                    <a className="a-1" data-toggle="tab" href="#signup">
                      Login
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
export default Register;
