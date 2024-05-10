/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
import React, { useState } from "react";
import "./Styles.scss";
import axios from "axios";
// import axios from '../axiosInterceptor';
import env from "../../../config";
import { USER_ENDPOINTS } from "../../../config/enpoints";
import { useNavigate } from "react-router-dom";
import Logo from "./../../../assets/logo.png";

const AuthLogin = () => {
  localStorage.removeItem("token");

  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.login;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can implement your sign-in logic, like sending the data to a server or authenticating locally
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post(baseurl + endpoint, {
        email: email,
        password: password,
      });

      const token = response.data.data.token;
      localStorage.setItem("token", token);

      navigate("/assistant");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="authentication-wrapper authentication-cover authentication-bg">
        <div className="authentication-inner row">
          <div className="d-none d-lg-flex col-lg-7 p-0">
            <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
              <img
                src="../../assets/img/illustrations/auth-login-illustration-light.png"
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

              <h3 className="mb-1">Welcome to Contact Swing 👋</h3>
              <p className="mb-4">
                Please sign-in to your account and start the adventure
              </p>

              <form className="mb-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email or Username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    name="email-username"
                    placeholder="Enter your email or username"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autofocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <a href="#">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder=""
                      aria-describedby="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />

                    <span
                      className="input-group-text cursor-pointer"
                      id="password"
                      onClick={handleTogglePassword}
                    >
                      <i
                        className={showPassword ? "ti ti-eye" : "ti ti-eye-off"}
                      ></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label className="form-check-label" htmlFor="remember-me">
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-grid w-100">
                  Sign in
                </button>
              </form>

              <p className="text-center">
                <span>New on our platform?</span>
                <a href="#">
                  <span>Create an account</span>
                </a>
              </p>

              <div className="divider my-4">
                <div className="divider-text">or</div>
              </div>

              <div className="d-flex justify-content-center">
                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-facebook me-3"
                >
                  <i className="tf-icons fa-brands fa-facebook-f fs-5"></i>
                </a>

                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-google-plus me-3"
                >
                  <i className="tf-icons fa-brands fa-google fs-5"></i>
                </a>

                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-twitter"
                >
                  <i className="tf-icons fa-brands fa-twitter fs-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;
