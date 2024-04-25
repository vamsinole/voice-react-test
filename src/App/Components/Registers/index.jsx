import React, { useState } from 'react'
import '../Login/Styles.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const [formData, setFormData] = useState({
    fname:'',
    lname:'',
    email:'',
    phone:'',
    password:'',
    cpassword:''
  })

  const [error, setError] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)

    let isvalid = true;
    let validationError ={}
    if(formData.fname === "" || formData.fname === null) {
      isvalid=false;
      validationError.fname='First name is required'
    }
    if(formData.lname === "" || formData.lname === null) {
      isvalid=false;
      validationError.lname='Last name is required'
    }
    if(formData.email === "" || formData.email === null) {
      isvalid=false;
      validationError.email='Email is required'
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      isvalid=false;
      validationError.email='Email is not valid'
    }
    if(formData.phone === "" || formData.phone === null) {
      isvalid=false;
      validationError.phone='Phone number is required'
    }
    if(formData.password === "" || formData.password === null) {
      isvalid=false;
      validationError.password='Password is required'
    }else if(formData.password.length < 6){
      isvalid=false;
      validationError.email='Password should be more then 6 charector'
    }
    if(formData.cpassword !== formData.password) {
      isvalid=false;
      validationError.cpassword='Confirm Password not match'
    }

    setError(validationError);
    setValid(isvalid)

    if(Object.keys(validationError).length === 0 ){
      axios.post("https://uniquemindsolutions.com/umsjobportal/registration", formData)
      .then(result => {
        console.log(result);
         alert("Register Successfully")
         navigate('/login')
      })
      .catch(error => console.log(error))
     
    }
  }
  return (
    <>
    <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div className="login-main my-4">
              <div className="login">
                <div className="login__head"> Register</div>
                <div className="login__body">
                  {
                    valid ? <></> : <span className='text-danger'>
                      {error.fname}; {error.lname}; {error.email}; {error.phone}; {error.password}; {error.cpassword};
                    </span>
                  }
                  <form onSubmit={handleSubmit}>

                    <input type="text" 
                    name='fname' 
                    onChange={(event)=> setFormData({...formData, fname:event.target.value}) } className='login__body-forms' 
                    placeholder='First Name' />

                    <input type="text" 
                    name='lname' 
                    onChange={(event)=> setFormData({...formData, lname:event.target.value}) }
                    className='login__body-forms' 
                    placeholder='Last Name' />

                    <input type="text" 
                    name='email' 
                    onChange={(event)=> setFormData({...formData, email:event.target.value}) }
                    className='login__body-forms' 
                    placeholder='Emaild' />

                    <input type="text" 
                    onChange={(event)=> setFormData({...formData, phone:event.target.value}) }
                    name='phone' 
                    className='login__body-forms' 
                    placeholder='Phone' />

                    <input type="password" 
                    name='password' 
                    onChange={(event)=> setFormData({...formData, password:event.target.value}) }
                    className='login__body-forms' 
                    placeholder='Password' />

                    <input type="password" 
                    name='cpassword' 
                    onChange={(event)=> setFormData({...formData, cpassword:event.target.value}) }
                    className='login__body-forms' 
                    placeholder='Confirm Password' />

                    <button className='login__btn' type='submit'>Submit</button>
                  </form>
                  <div className='text-center mt-4'>If already have an account? <Link to='/login' className='register-btn'><b>Login here</b></Link></div> 
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register