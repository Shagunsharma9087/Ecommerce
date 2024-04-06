import { useState } from "react";
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
import axios from 'axios'

function Signup()
{
    let regex1 =  /^(?=.*[!@#$%^&*()_+={}[\]|\\:;'"<>,.?/`~])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;; 
    let regex2=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
const [name,setName]=useState();
const[email,setEmail]=useState();
const[passStatus,setPassstatus]=useState(true);
const[password,setpassword]=useState();
const navigate=useNavigate()
const handlesubmit= async (e)=>
{
    e.preventDefault();
    await axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>console.log(result),
    navigate('/login'))
    .catch(err=>console.log(err))

}
    return(
        <div class="main">
            <h1>Register</h1>
            <form onSubmit={handlesubmit}>
                <div id="name">
                    <label htmlFor="email"><strong>Name:</strong></label>
                    <input type="text" class="name" onChange={(e)=>setName(e.target.value)} placeholder="Enter the name" name="email" autoComplete="off"/>
                </div>
                <div id="email">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" class="email" onChange={(e)=>setEmail(e.target.value)}placeholder="Enter Email" name="email" autoComplete="off"/>
                </div>
                {
                    !regex2.test(email) && <small>*email must be end with "@gmail.com"</small>
                }
                <div id="password">
                    <label htmlFor="email"><strong>Password</strong></label>
                    <input type="password" class="password"onChange={(e)=>setpassword(e.target.value)} placeholder="Enter password" name="Password" autoComplete="off"/>
                </div>
                {
                    !regex1.test(password) && <small>*Password must have minimum 8 character, 1 numeric value and 1 special character</small>
                }
                <br/>
                {
                     (regex2.test(email)&&regex1.test(password))?  <button type="submit" id="regButton"> Register</button>
                     :<button type="submit" disabled id="regButton"> Register</button>
                }
                </form>
                <p>Already hava account?</p>
                <Link to="/login" id="login">Login</Link>
             
        </div>
    )
}
export default Signup;