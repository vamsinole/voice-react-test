import React, {useState} from 'react'
import './Styles.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const [error, setError] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    

    let isvalid = true;
    let validationError ={}
    
    if(formData.email === "" || formData.email === null) {
      isvalid=false;
      validationError.email='Email is required'
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      isvalid=false;
      validationError.email='Email is not valid'
    }
    if(formData.password === "" || formData.password === null) {
      isvalid=false;
      validationError.password='Password is required'
    }
    // else if(formData.password.length < 6) {
    //   isvalid=false;
    //   validationError.email='Password requierd'
    // }
    
    
    axios.get("https://uniquemindsolutions.com/umsjobportal/getjobseekardata")
      .then(result => {
       
        result.data.payload.map( user => {
          console.log(user.email, "loging user",formData.email)
          if(user.email === formData.email){
            if(user.password === formData.password) {
              alert("Login Successfully")
             navigate('/')
            }else{
              
              isvalid=false;
              validationError.password='Wrong password'
            }
          }else{
            //alert("Invalid login")
            isvalid=false;
            validationError.email='Invalid Credentials'
            navigate('/login')
          }
          
        })
        setError(validationError);
        setValid(isvalid)
        
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div className="login-main">
              <div className="login">
                <div className="login__head"> LOGIN HERE</div>
                <div className="login__body">
                  {
                    valid ? <></> : <span className='text-danger'>
                        {error.email};  {error.password}
                    </span>
                  }
                  <form onSubmit={handleSubmit}>
                    <input type="text" 
                    name='email' 
                    onChange={(event)=> setFormData({...formData, email:event.target.value}) }
                    className='login__body-forms' 
                    placeholder='Emaild' />

                    <input type="password" 
                    name='password' 
                    onChange={(event)=> setFormData({...formData, password:event.target.value}) }
                    className='login__body-forms' 
                    placeholder='Password' />

                    <Link className='btn btn-link  mb-3 text-decoration-none text-secondary'> <small>Forgot Password</small> </Link>
                    <button className='login__btn' type='submit'>Submit</button>
                  </form>

                  {/* <div className='text-center mt-4'>If you don't have an Account? <Link to='/register' className='register-btn'><b>Register here</b></Link></div>  */}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login