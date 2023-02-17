import React, { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import UserHome from '../models/UserHome';


const LoginUsers = (props: any) => {
    const navigate = useNavigate();

    const [username, setName] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitClicked = (e: { preventDefault: () => void; }) => {
       e.preventDefault();
       console.log(username,password);

       fetch("http://localhost:5000/login-user",{
        method: "POST",
        //crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            username,
            password,
        }),

    }).then((res) => res.json())
    .then((data) => {
        console.log(data, "userRegister");
        if(data.status=="Bookworm Signed Up!"){
            alert("Login Sucessfull!");
            navigate('/UserHome')
        }
    });
    }

  
      
    return (
    <>
       <div className="auth-form-container">
         <form className="login-form" onSubmit={onSubmitClicked}>
             <label htmlFor="username">User Name:</label>
             <input value= {username} onChange={(e) => setName(e.target.value)} type="username" placeholder="Enter User Name.." name="username" id="uesrname"/>

             <label htmlFor="password">Password:</label>
             <input value= {password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" name="password" id="password"/>

             <button type="submit" onClick={onSubmitClicked}>Login</button>
          </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('registerusers')}>Don't have an account yet? Just Register Here.</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('loginadmin')}>Are you Admin? Log In Here...</button> 
        {/* <button className="link-btn" onClick={() => navigate('LoginAdmin')}>Are you Admin? Log In Here...</button>*/}
       </div> 
    </>
    );
  };


export default LoginUsers;