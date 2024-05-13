import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import env from "../../../config";
import { USER_ENDPOINTS } from "../../../config/enpoints";
import Logo from "./../../../assets/logo.png";

const ForgetPassword = () => {
  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.forgotpassword;
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example API call using axios
      const response = await axios.post(baseurl + endpoint, { email });
      console.log(response);
      // Assuming the API returns success
      navigate("/otp-verification");
    } catch (error) {
      // Handle errors, such as displaying an error message to the user
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="authentication-wrapper authentication-cover authentication-bg">
        <div className="authentication-inner row">
          <div className="d-none d-lg-flex col-lg-7 p-0">
            <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
              <img
                src="../../assets/img/illustrations/auth-forgot-password-illustration-light.png"
                alt="auth-login-cover"
                className="img-fluid my-5 auth-illustration"
                data-app-light-img="illustrations/auth-login-illustration-light.png"
                data-app-dark-img="illustrations/auth-login-illustration-dark.png"
              />
              <img
                src="../../assets/img/illustrations/bg-shape-image-light.png"
                alt="auth-login-cover"
                className="platform-bg"
                data-app-light-img="illustrations/bg-shape-image-light.png"
                data-app-dark-img="illustrations/bg-shape-image-dark.png"
              />
            </div>
          </div>
          <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
            <div className="w-px-400 mx-auto">
              <div className="app-brand mb-4">
                <a href="#" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    <img src={Logo} height={32} width={32} alt="" />
                  </span>
                </a>
              </div>
              <h3 className="mb-1">Forgot Password? 🔒</h3>
              <p className="mb-4">
                Enter your email and we'll send you instructions to reset your
                password
              </p>
              <form className="mb-3" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    required
                    autoFocus
                    onChange={handleEmailChange}
                  />
                </div>
                <button
                  className="btn btn-primary d-grid w-100 mb-3"
                  type="submit"
                >
                  Send OTP
                </button>
              </form>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  to="/login"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Back to login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
