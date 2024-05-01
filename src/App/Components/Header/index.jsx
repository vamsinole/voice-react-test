import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
                    <div className='d-flex'>
                    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                        <div className="app-brand demo"><a className="app-brand-link">
                            <span className="app-brand-logo demo">
                                <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                                fill="#7367F0" />
                            <path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616" />
                            <path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                                fill="#7367F0" />
                            </svg></span> <span className="app-brand-text demo menu-text fw-bold">ContactsSwing</span></a>

                        </div>
                        <div className="menu-inner-shadow"></div>
                        <ul className="menu-inner py-1">
                            <li className="menu-item">
                                <a className="menu-link">
                                <i className="menu-icon tf-icons ti ti-files"></i>
                                {/* <div data-i18n="Knowledge Base">Knowledge Base</div> */}
                                <Link className="nav-link" to="/knowledge">Knowledge Base</Link>
                            </a></li>
                            <li className="menu-item"><a className="menu-link"><i
                                className="menu-icon tf-icons ti ti-microphone"></i>
                                 <Link className="nav-link" to="/voice">Voice Agents</Link>
                                {/* <div data-i18n="Voice Agents">Voice Agents</div> */}
                            </a></li>
                            <li className="menu-item"><a className="menu-link">
                                <i className="menu-icon tf-icons ti ti-user"></i>
                                <Link className="nav-link" to="/users">Users</Link>
                                {/* <div data-i18n="Users">Users</div> */}
                            </a></li>
                            <li className="menu-item"><a className="menu-link"><i
                                className="menu-icon tf-icons ti ti-phone-call"></i>
                                <Link className="nav-link" to="/calls">Calls</Link>
                                {/* <div data-i18n="Calls">Calls</div> */}
                            </a></li>
                            <li className="menu-item"><a className="menu-link"><i
                                className="menu-icon tf-icons ti ti-brain"></i>
                                <Link className="nav-link" to="/assistant">Assistants</Link>
                                {/* <div data-i18n="Assistants">Assistants</div> */}
                            </a></li>
                            {/* <li className="menu-item">
                                <a className="menu-link"><i
                                    className="menu-icon tf-icons ti ti-brain"></i>
                                    <Link className="nav-link" to="/newassistant">New Assistants</Link>
                                    
                                </a>
                            </li> */}
                            <li className="menu-item"><a className="menu-link"><i
                                className="menu-icon tf-icons ti ti-checkup-list"></i>
                                <Link className="nav-link" to="/actions">Actions</Link>
                                {/* <div data-i18n="Actions">Actions</div> */}
                            </a></li>
                            <li className="menu-item"><a className="menu-link"><i
                                className="menu-icon tf-icons ti ti-users-group"></i>
                                <Link className="nav-link" to="/customers">Customers</Link>
                                {/* <div data-i18n="Customers">Customers</div> */}
                            </a></li>
                            <li className="menu-item"><a className="menu-link"><i
                                className="menu-icon tf-icons ti ti-shopping-cart"></i>
                                <Link className="nav-link" to="/orders">Orders</Link>
                                {/* <div data-i18n="Orders">Orders</div> */}
                            </a></li>
                            <li className="menu-item"><a className="menu-link">
                            <i class="ti ti-mail ti-sm"></i>
                                {/* <i className="menu-icon tf-icons ti ti-shopping-cart"></i> */}
                                <Link className="nav-link align-middle ms-2" to="/emails">Emails</Link>
                                {/* <div data-i18n="Orders">Orders</div> */}
                            </a></li>
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
    )
}
export default Header