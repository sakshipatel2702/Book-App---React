import React, { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';

const LoginAdmins = (props:any) => {
    const [admin_name, setName] = useState('');
    const [admin_password, setPassword] = useState('');

  
    
    const onSubmitClicked = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(admin_name,admin_password);
 
        fetch("http://localhost:5000/login-admin",{
         method: "POST",
         //crossDomain:true,
         headers:{
             "Content-Type":"application/json",
             Accept:"application/json",
             "Access-Control-Allow-Origin":"*",
         },
         body:JSON.stringify({
             admin_name,
             admin_password,
         }),
 
     }).then((res) => res.json())
     .then(data => console.log(data));
     }
 
  return (
    <div>
      <>
       <div className="auth-form-container">
         <form className="login-form" onSubmit={onSubmitClicked}>
             <label htmlFor="admin_name">Admin Name:</label>
             <input value= {admin_name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Admin Name.." name="admin_name" id="admin_name"/>

             <label htmlFor="admin_password">Password:</label>
             <input value= {admin_password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" name="admin_password" id="admin_password"/>

             <button type="submit">Login</button>
          </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('registerusers')}>Don't have an account yet? Just Register Here.</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('loginadmin')}>Are you Admin? Log In Here...</button> 
        {/* <button className="link-btn" onClick={() => navigate('LoginAdmin')}>Are you Admin? Log In Here...</button>*/}
       </div> 
    </>
    </div>
  )
}

export default LoginAdmins;
