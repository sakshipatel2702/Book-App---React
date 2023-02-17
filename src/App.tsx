//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import LoginUsers from './components/LoginUsers';
import RegisterUsers from './components/RegisterUsers';
import LoginAdmin from './components/LoginAdmin';
import { Route, Routes } from 'react-router-dom';
import UserHome from './models/UserHome';
import AdminHome from './components/AdminHome';
import Service from './components/Service';


function App() {
  //const [page, setPage] = useState(1);
  const [currentForm, setcurrentForm] = useState('loginusers');

   const toogleforms = (formShow: React.SetStateAction<string>) => 
   {
     setcurrentForm(formShow)
   }

  return (
    <div>
     <Routes>
      <Route>
        
      </Route>
     </Routes>
    
    <div className="App">
      {
      
      currentForm === "loginusers" ? <LoginUsers onFormSwitch={toogleforms}/> : <RegisterUsers onFormSwitch={toogleforms} />
      
      }
      

    </div>
  </div>
  );
}

export default App;
