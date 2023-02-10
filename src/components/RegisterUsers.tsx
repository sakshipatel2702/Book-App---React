import React, { useState } from 'react'; 

const RegisterUsers = (props: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitClicked = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(name);
     }

    return (
    <>
    <div className="auth-form-container">
      <form className="register-form" onSubmit={onSubmitClicked}>
         <label htmlFor="name">Name:</label>
         <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name here.." name="name" id="name"/>

         <label htmlFor="email">E-mail:</label>
         <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" name="email" id="email"/>

         <label htmlFor="password">Password:</label>
         <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" name="password" id="password"/>

         <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('loginusers')}>Already have an account? Just Sign In.</button>
      <button className="link-btn" onClick={() => props.onFormSwitch('loginadmin')}>Are you Admin? Log In Here...</button>
      </div>
      </>
    );
  };

export default RegisterUsers;