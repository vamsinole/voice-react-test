import React, { useState } from "react";
import Logo from "./../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making API requests
import env from "../../../config";
import { USER_ENDPOINTS } from "../../../config/enpoints";

const OtpVerification = () => {
  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.Otpverification;
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    // Add async keyword here
    e.preventDefault();
    try {
      // Example API call using axios
      const response = await axios.post(baseurl + endpoint, { otp });
      console.log(response);
      // Assuming the API returns success
      navigate("/reset-password");
    } catch (error) {
      // Handle errors, such as displaying an error message to the user
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="authentication-wrapper authentication-cover authentication-bg">
        <div className="authentication-inner row">
          {/* <!-- /Left Text --> */}
          <div className="d-none d-lg-flex col-lg-7 p-0">
            <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
              <img
                src="../../assets/img/illustrations/auth-two-step-illustration-light.png"
                alt="auth-two-steps-cover"
                className="img-fluid my-5 auth-illustration"
                data-app-light-img="illustrations/auth-two-step-illustration-light.png"
                data-app-dark-img="illustrations/auth-two-step-illustration-dark.png"
              />
              <img
                src="../../assets/img/illustrations/bg-shape-image-light.png"
                alt="auth-two-steps-cover"
                className="platform-bg"
                data-app-light-img="illustrations/bg-shape-image-light.png"
                data-app-dark-img="illustrations/bg-shape-image-dark.png"
              />
            </div>
          </div>
          {/* Left Text */}

          {/* <!-- Two Steps Verification --> */}
          <div className="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">
            <div className="w-px-400 mx-auto">
              {/* <!-- Logo --> */}
              <div className="app-brand mb-4">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    <img src={Logo} height={32} width={32} alt="" />
                  </span>
                </a>
              </div>
              {/* Logo */}

              <h4 className="mb-1">OTP Verification 💬</h4>
              <p className="text-start mb-4">
                We sent a verification code to your email. Enter the code from
                the email in the field below.
                {/* <span className="fw-medium d-block mt-2">******1234</span> */}
              </p>
              <p className="mb-0 fw-medium">Type your 6 digit security code</p>
              <form id="twoStepsForm" action="index.html" method="GET">
                <div className="mb-3">
                  <div className="auth-input-wrapper d-flex align-items-center justify-content-sm-between numeral-mask-wrapper">
                    <input
                      type="tel"
                      className="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                      autofocus
                    />
                    <input
                      type="tel"
                      className="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                    />
                    <input
                      type="tel"
                      className="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                    />
                    <input
                      type="tel"
                      className="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                    />
                    <input
                      type="tel"
                      className="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                    />
                    <input
                      type="tel"
                      className="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                    />
                  </div>
                </div>
                <button className="btn btn-primary d-grid w-100 mb-3">
                  Verify my account
                </button>
                <div className="text-center">
                  Didn't get the code?
                  <a href="javascript:void(0);"> Resend </a>
                </div>
              </form>
            </div>
          </div>
          {/* Two Steps Verification */}
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
