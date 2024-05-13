/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import "./Styles.scss";

const Header = () => {
  const navigate = useNavigate();

  const [path] = useState(() => {
    let init_value = "";
    init_value = window.location.pathname.replace("/", "");
    return init_value;
  });

  if (localStorage.getItem("token") === null) {
    navigate("/login");
  }

  return (
    <>
      <div className="d-flex">
        <aside
          id="layout-menu"
          className="layout-menu menu-vertical menu bg-menu-theme"
        >
          <div className="app-brand demo">
            <a className="app-brand-link">
              <span className="app-brand-logo demo">
                <img src={Logo} height={32} width={32} alt="" />
              </span>{" "}
              <span className="app-brand-text demo menu-text fw-bold">
                ContactsSwing
              </span>
            </a>
          </div>
          <div className="menu-inner-shadow"></div>
          <ul className="menu-inner py-1">
            <li
              className={
                path === "knowledge" ? "menu-item active" : "menu-item"
              }
            >
              <a className="menu-link">
                <i className="menu-icon tf-icons ti ti-files"></i>
                {/* <div data-i18n="Knowledge Base">Knowledge Base</div> */}
                <Link className="nav-link" to="/knowledge">
                  Knowledge Base
                </Link>
              </a>
            </li>
            <li className={path === "voice" ? "menu-item active" : "menu-item"}>
              <a className="menu-link">
                <i className="menu-icon tf-icons ti ti-microphone"></i>
                <Link className="nav-link" to="/voice">
                  Voice Agents
                </Link>
                {/* <div data-i18n="Voice Agents">Voice Agents</div> */}
              </a>
            </li>
            <li className={path === "users" ? "menu-item active" : "menu-item"}>
              <a className="menu-link">
                <i className="menu-icon tf-icons ti ti-user"></i>
                <Link className="nav-link" to="/users">
                  Users
                </Link>
                {/* <div data-i18n="Users">Users</div> */}
              </a>
            </li>
            <li className={path === "calls" ? "menu-item active" : "menu-item"}>
              <a className="menu-link">
                <i className="menu-icon tf-icons ti ti-phone-call"></i>
                <Link className="nav-link" to="/calls">
                  Calls
                </Link>
                {/* <div data-i18n="Calls">Calls</div> */}
              </a>
            </li>
            <li
              className={
                path === "assistants" ||
                path === "new-assistant" ||
                path === "/"
                  ? "menu-item active"
                  : "menu-item"
              }
            >
              <a className="menu-link">
                <i className="menu-icon tf-icons ti ti-brain"></i>
                <Link className="nav-link" to="/assistants">
                  Assistants
                </Link>
              </a>
            </li>

            <li
              className={path === "actions" ? "menu-item active" : "menu-item"}
            >
              <a className="menu-link">
                <i className="menu-icon tf-icons ti ti-checkup-list"></i>
                <Link className="nav-link" to="/actions">
                  Actions
                </Link>
                {/* <div data-i18n="Actions">Actions</div> */}
              </a>
            </li>
            <li
              className={
                path === "customers" ? "menu-item active" : "menu-item"
              }
            >
              <a className="menu-link">
                <i className="menu-icon tf-icons ti ti-users-group"></i>
                <Link className="nav-link" to="/customers">
                  Customers
                </Link>
                {/* <div data-i18n="Customers">Customers</div> */}
              </a>
            </li>
            <li
              className={path === "orders" ? "menu-item active" : "menu-item"}
            >
              <a className="menu-link">
                <i className="menu-icon tf-icons ti ti-shopping-cart"></i>
                <Link className="nav-link" to="/orders">
                  Orders
                </Link>
                {/* <div data-i18n="Orders">Orders</div> */}
              </a>
            </li>
            <li
              className={path === "emails" ? "menu-item active" : "menu-item"}
            >
              <a className="menu-link">
                <i className="ti ti-mail ti-sm"></i>
                {/* <i className="menu-icon tf-icons ti ti-shopping-cart"></i> */}
                <Link className="nav-link align-middle ms-2" to="/emails">
                  Emails
                </Link>
                {/* <div data-i18n="Orders">Orders</div> */}
              </a>
            </li>
          </ul>
        </aside>
      </div>

      {/* <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <div className="container-cust">
                        <a className="navbar-brand text-white" href="#">Job <span className='text-warning'> Portal</span> </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Packages</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Jobs
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Jobs by Keywords</a></li>
                                        <li><a className="dropdown-item" href="#">Jobs by Company</a></li>
                                        <li><a className="dropdown-item" href="#">Jobs by Locations</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Jobs Type
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Full Time Job</a></li>
                                        <li><a className="dropdown-item" href="#">Part Time Jobs</a></li>
                                        <li><a className="dropdown-item" href="#">Interns Jobs</a></li>
                                        <li><a className="dropdown-item" href="#">Consultant Jobs</a></li>
                                        <li><a className="dropdown-item" href="#">Temporary Jobs</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/seeker-dashboard">Seeker Dashboard</Link>
                                </li>
                            </ul>
                            <Link to='/login' className="nav-link btn btn-warning mx-3">Job Seeker</Link>
                            <Link to='/login' className="nav-link btn btn-primary">Recruter</Link>
                        </div>
                    </div>
                </div>
            </nav> */}
    </>
  );
};
export default Header;
