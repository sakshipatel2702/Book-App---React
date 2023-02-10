import React, { useState } from 'react';

const LoginUsers = (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitClicked = (e: { preventDefault: () => void; }) => {
       e.preventDefault();
       console.log(email);
    }
    return (
    <>
       <div className="auth-form-container">
         <form className="login-form" onSubmit={onSubmitClicked}>
             <label htmlFor="email">E-mail:</label>
             <input value= {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourname@gmail.com" name="email" id="email"/>

             <label htmlFor="password">Password:</label>
             <input value= {password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" name="password" id="password"/>

             <button type="submit">Login</button>
          </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('registerusers')}>Don't have an account yet? Just Register Here.</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('loginadmin')}>Are you Admin? Log In Here...</button>
       </div> 
    </>
    );
  };


export default LoginUsers;