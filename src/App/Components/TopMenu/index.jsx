import React from 'react'
import { Link } from 'react-router-dom'


const TopMenu = () => {
    return (
        <>
                    <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme mt-lg-n2"
                            id="layout-navbar">
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                    <i className="ti ti-menu-2 ti-sm"></i>
                                </a>
                            </div>

                            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                <ul className="navbar-nav flex-row align-items-center ms-auto">

                                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <div className="avatar avatar-online">
                                                <img src="assets/img/avatars/1.png" alt className="h-auto rounded-circle" />
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="pages-account-settings-account.html">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar avatar-online">
                                                                <img src="assets/img/avatars/1.png" alt className="h-auto rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <span className="fw-medium d-block">John Doe</span>
                                                            <small className="text-muted">Admin</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" onclick="logout()">
                                                    <i className="ti ti-logout me-2 ti-sm"></i>
                                                    <span className="align-middle">Log Out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>

                            <div className="navbar-search-wrapper search-input-wrapper d-none">
                                <input type="text" className="form-control search-input container-xxl border-0" placeholder="Search..."
                                    aria-label="Search..." />
                                <i className="ti ti-x ti-sm search-toggler cursor-pointer"></i>
                            </div>
                        </nav>
                    




            
        </>
    )
}
export default TopMenu