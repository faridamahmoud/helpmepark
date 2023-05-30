import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import  Validation from './Validation' ;
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors, seterrors] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        seterrors(Validation(values));
        if(errors.email === "" && errors.pasword === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if (res.data === "Success"){
                    navigate('/home');
                }else{
                    alert("no user existed")
                }
            })
            .catch( err => console.log(err));
        }
    }
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))}

  return (
    <div className='d-flex justify-content-center align-items-center  vh-100'>
        <div className=' bg-black p-3 rounded w-25'>
            <h2 className='text-white'> Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3 text-white'>
                    <label htmlFor = "email"> <strong>Email</strong></label>
                    <input type="email" placeholder='Enter your email' name ='email'
                    onChange = {handleInput}className='form-control rounded-0 '></input>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}

                </div>
                <div className=' text-white mb-3'>
                    <label htmlFor = "password"> <strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                    onChange = {handleInput} className='form-control rounded-0'></input>
                    {errors.password && <span className='text-danger'> {errors.password}</span>}

                </div>
                <button type='submit' className='btn btn-primary w-100 rounded-0'> Log in</button>
                <p className='text-white'> Dont have an acount?</p>
                <Link to="/Signup" className='btn btn-default border w-100 bg-white rounded-0'> Create An Account</Link>
            </form>
        </div>

    </div>
  )
  };

export default Login;