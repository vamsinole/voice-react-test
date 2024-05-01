// import React from 'react'
import Header from '../../Components/Header'
import React, { useState,useEffect } from 'react'
import env from '../../../config';
import './Styles.scss';
import TopMenu from '../../Components/TopMenu';
import { USER_ENDPOINTS } from '../../../config/enpoints';
import axios from 'axios';

const Orders = () => {

  const [orders, setOrders] = useState([]);

  const baseurl=env.baseUrl;
  const endpoint=USER_ENDPOINTS.getCustomer;

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
        console.log("responce33",response.data.data.rows);
        setOrders(response.data.data.rows);
        
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
                <h4 class="card-title pull-left mb-3">Orders</h4>
                {/* <button type="button" class="btn btn-primary pull-right" data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasAddAgent" aria-controls="offcanvasAddAgent">
                  <span class="ti-xs ti ti-plus me-1"></span>New Action
                </button> */}
                
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
              {orders.map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value.name}</td>
                    <td>{value.phone}</td>
                    <td>{value.address}</td>
                    <td style={{ width: '70px' }}>
                      <div className="d-flex acation-btns">
                        <button className='btn px-1'><i class="lar la-edit"></i></button>
                        <button className='btn px-1'><i className="las la-trash-alt la-lg"></i></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
                </table>
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

export default Orders