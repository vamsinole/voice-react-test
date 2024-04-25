// import React from 'react'
import Header from '../../Components/Header'
import React, { useState,useEffect } from 'react'
import env from '../../../config';
import './Styles.scss';
import TopMenu from '../../Components/TopMenu';
import { USER_ENDPOINTS } from '../../../config/enpoints';
import axios from 'axios';

const Users = () => {

  const [users, setUsers] = useState([]);

  const baseurl=env.baseUrl;
  const endpoint=USER_ENDPOINTS.getUsers;

  const token=localStorage.getItem('token');
  console.log("token",token);

  useEffect(() => {
    const fetchVoiceAgents = async () => {
      try {
        const response = await axios.get(baseurl+endpoint, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        //console.log("responce22",response.data.data.rows);
        setUsers(response.data.data.rows);
        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchVoiceAgents();
  }, []);
  return (
    <>
        <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
        <Header/>
        <div className='layout-page'>
            <TopMenu/>
            <div class="content-wrapper">
          

          <div class="container-xxl flex-grow-1 container-p-y">
            <div class="card">
              <div class="card-header border-bottom">
                <h4 class="card-title pull-left mb-3">Users</h4>
                <button type="button" class="btn btn-primary pull-right" data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasAddUser" aria-controls="offcanvasAddUser">
                  <span class="ti-xs ti ti-plus me-1"></span>New User
                </button>
                
              </div>
              <div class="card-datatable table-responsive">
                <table class="datatables-voice-agents table">
                  <thead class="border-top">
                    <tr>
                      
                      <th>USER</th>
                      <th>PHONE</th>
                      <th>ADDRESS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
              {users.map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value.name}</td>
                    <td>{value.type}</td>
                    <td>{value.phone_number}</td>
                    <td>{value.status}</td>
                    <td style={{ width: '70px' }}>
                      <div className="d-flex acation-btns">
                        <button className='btn px-1'><i class="lar la-edit"></i></button>
                        <button className='btn px-1'><i class="las la-phone-volume"></i></button>
                        <button className='btn px-1'><i className="las la-trash-alt la-lg"></i></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
                </table>
              </div>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddUser"
                aria-labelledby="offcanvasAddUserLabel">
                <div class="offcanvas-header">
                  <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Add User</h5>
                  <button type="button" id="close-add-user-canvas" class="btn-close text-reset"
                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                  <form class="add-new-user pt-0" id="addNewUserForm" onsubmit="return false">
                    <div class="row mb-3">
                      <label class="col-sm-12 col-form-label" for="basic-default-name">Name</label>
                      <div class="col-sm-12">
                        <input type="text" class="form-control" id="basic-default-name" placeholder="John Doe" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-12 col-form-label" for="basic-default-email">Email</label>
                      <div class="col-sm-12">
                        <div class="input-group input-group-merge">
                          <input type="text" id="basic-default-email" class="form-control" placeholder="john.doe"
                            aria-label="john.doe" aria-describedby="basic-default-email2" />
                          <span class="input-group-text" id="basic-default-email2">@example.com</span>
                        </div>
                        <div class="form-text">You can use letters, numbers & periods</div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-12 col-form-label" for="basic-default-phone">Phone No</label>
                      <div class="col-sm-12">
                        <input type="text" id="basic-default-phone" class="form-control phone-mask"
                          placeholder="658 799 8941" aria-label="658 799 8941" aria-describedby="basic-default-phone" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-12 col-form-label" for="basic-default-password">Password</label>
                      <div class="col-sm-12">
                        <div class="input-group input-group-merge">
                          <input type="password" class="form-control" id="basic-default-password" />
                          <span class="input-group-text cursor-pointer" id="basic-default-password2"><i
                              class="ti ti-eye-off"></i></span>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-12 col-form-label" for="basic-default-website">Website</label>
                      <div class="col-sm-12">
                        <input type="text" class="form-control" id="basic-default-website" placeholder="example.com" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-12 col-form-label" for="basic-default-address">Address</label>
                      <div class="col-sm-12">
                        <textarea id="basic-default-address" class="form-control" placeholder="" aria-label=""
                          aria-describedby="basic-icon-default-message2"></textarea>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit" onclick="createUser()">
                      {/* <span id="create-user-button-loader" style="display: none;">
                        <span class="spinner-border" role="status" aria-hidden="true"></span>
                        <span class="visually-hidden">Loading...</span>
                      </span> */}
                      <span class="ms-2">Submit</span>
                    </button>
                    <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="content-backdrop fade"></div>
        </div>
        </div>
    </div>
    </div>
        
    </>
  )
}

export default Users