import React, { useState } from 'react'; 

const RegisterUsers = (props: any) => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const onSubmitClicked = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(username, password, contact, birthdate);
        fetch("http://localhost:5000/register",{
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
                contact,
                birthdate,
            }),

        }).then((res) => res.json())
        .then((data) => {
            console.log(data, "userRegister");
            if(data.status=="Bookworm Signed Up!"){
                alert("Register Sucessfull!");
            }
        });
     }

    return (
    <>
    <div className="auth-form-container">
      <form className="register-form" onSubmit={onSubmitClicked}>
         <label htmlFor="username">User Name:</label>
         <input value={username} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name here.." name="username" id="username"/>

         {/* <label htmlFor="email">E-mail:</label>
         <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" name="email" id="email"/> */}

         <label htmlFor="password">Password:</label>
         <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" name="password" id="password"/>

         <label htmlFor="contact">Contact:</label>
         <input value={contact} onChange={(e) => setContact(e.target.value)} type="contact" placeholder="Enter your Phone Number.." name="contact" id="contact"/>

         <label htmlFor="birthdate">Birthdate:</label>
         <input value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type="birthdate" placeholder="Enter your Birthday in MM/DD/YYYY" name="birthdate" id="birthdate"/>

         <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('loginusers')}>Already have an account? Just Sign In.</button>
      <button className="link-btn" onClick={() => props.onFormSwitch('loginadmin')}>Are you Admin? Log In Here...</button>
      </div>
      </>
    );
  };

export default RegisterUsers;