import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Validation from './LoginValidation';
import axios from 'axios';
import './css/styles2.css';
import './css/app2.css';
import Navbar from '../src/Components/Navbar/Navbar';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });   
    const navigate = useNavigate();

    const[errors, setErrors] = useState({});
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === "" ){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Login Success"){
                    navigate('/home');
            }else{
                alert("Not a valid user");
            }
        })
                .catch(err => console.log(err));
            }
    }

  return (
    <>
    <Navbar/>
    <div style ={{ justifyItems:"center", marginTop:"-120px"}} className='containerlogin'>
        <div style={{justifyContent:"center", alignItems:"center"}} className='card'>
            <h2  className='text-primary'>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Email address' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='form-control'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Password'  name='password'
                    onChange={handleInput} className='form-control rounded-0' />
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <div className='mb-3 form-check'>
                                    <input type="checkbox" className='form-check-input' id="terms" required />
                                    <label  className='form-check-label' htmlFor="terms">You agree to our terms and conditions</label>
                </div>
                <button type='submit' style={{color:"white", marginLeft:"90px", padding:"6px"}} className='btn btn-success w-100'>Login</button>
                <Link to="/signup" style={{color:"white", marginLeft:"15px", padding:"6px"}} className='btn btn-default border w-100 bg-light text-decoration-none'>Creat Account</Link>
            </form>
        </div>
    </div> 
    </>   
  );
}

export default Login;