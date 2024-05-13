/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Styles.scss";

const SettingControls = () => {
  const navigate = useNavigate();

  if (localStorage.getItem("token") === null) {
    // alert(localStorage.getItem('token'))
    if (
      window.location.pathname !== "/login" ||
      window.location.pathname !== "/" ||
      window.location.pathname !== "/terms" ||
      window.location.pathname !== "/privacy" ||
      window.location.pathname !== "/register"
    ) {
      navigate("/login");
    }
  }

  return (
    <>
      <div className="d-flex">
        <aside
          id="layout-menu"
          className="layout-menu menu-vertical menu bg-menu-theme"
        >
          <div className="menu-inner-shadow"></div>
          <ul className="menu-inner py-1">
            <li className="menu-item">
              <a className="menu-link">
                <Link className="nav-link" to="/userscontrols">
                  User and Controls
                </Link>
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-link">
                <Link className="nav-link" to="#">
                  Organization
                </Link>
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-link">
                <Link className="nav-link" to="#">
                  Fields
                </Link>
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-link">
                <Link className="nav-link" to="#">
                  Stages
                </Link>
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-link">
                <Link className="nav-link" to="#">
                  Forms
                </Link>
              </a>
            </li>
            {/* <li className="menu-item"><a className="menu-link"><i
                                className="menu-icon tf-icons ti ti-checkup-list"></i>
                                <Link className="nav-link" to="/actions">Actions</Link>
                                
                            </a></li>
                            <li className="menu-item"><a className="menu-link"><i
                                className="menu-icon tf-icons ti ti-users-group"></i>
                                <Link className="nav-link" to="/customers">Customers</Link>
                                
                            </a></li>
                            <li className="menu-item"><a className="menu-link"><i
                                className="menu-icon tf-icons ti ti-shopping-cart"></i>
                                <Link className="nav-link" to="/orders">Orders</Link>
                                
                            </a></li>
                            <li className="menu-item"><a className="menu-link">
                            <i className="ti ti-mail ti-sm"></i>
                                
                                <Link className="nav-link align-middle ms-2" to="/emails">Emails</Link>
                                
                            </a></li> */}
          </ul>
        </aside>
      </div>
    </>
  );
};
export default SettingControls;
