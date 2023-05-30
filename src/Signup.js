import React,{ useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import ValidationS from './ValidationS';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors, seterrors] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        seterrors(ValidationS(values));
        console.log(errors);
        if((errors.name === "" || !errors.name) && (errors.email === "" || !errors.email)&& (errors.pasword === ""|| !errors.password)){
        

            axios.post('http://localhost:8081/register', values)
            .then(res => {
                navigate('/');
            })
            .catch( err => console.log(err));
        }
    }
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))}


  return (
    <div className='d-flex justify-content-center align-items-center  vh-100'>
        <div className='bg-black p-3 rounded w-25'>
            <h2 className='text-white'> SignUp Page</h2>
            <form onSubmit={handleSubmit} >
                <div className='text-white mb-3'>
                    <label htmlFor = "name"> <strong>Name</strong></label>
                    <input type="text" placeholder='Enter your Name'  name='name'
                    onChange={handleInput}   className='form-control rounded-0'></input>
                    {errors.name && <span className='text-danger'> {errors.name}</span>}
                </div>
                <div className='text-white mb-3'>
                    <label htmlFor = "email"> <strong>Email</strong></label>
                    <input type="email" placeholder='Enter your email' name='email'
                    onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}

                </div>
                <div className='text-white mb-3'>
                    <label htmlFor = "password"> <strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' 
                    name = 'password' onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
         
                <button type='submit' className='btn btn-primary w-100 rounded-0'> Sign Up</button>

                <p className='text-white'> Please after signup return to Login !</p>
                <Link to="/" className='btn btn-default border w-100 bg-light rounded-0'> Login</Link>
        </form>
    </div>

</div>
)
}

export default Signup;