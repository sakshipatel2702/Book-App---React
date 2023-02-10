//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import LoginUsers from './components/LoginUsers';
import RegisterUsers from './components/RegisterUsers';
import LoginAdmin from './components/LoginAdmin';

function App() {
  //const [page, setPage] = useState(1);
  const [currentForm, setcurrentForm] = useState('userlogin');

   const toogleforms = (formShow: React.SetStateAction<string>) => 
   {
     setcurrentForm(formShow)
   }

  return (
    <div className="App">
      {
         currentForm === "loginusers" ? <LoginUsers onFormSwitch={toogleforms}/> : <RegisterUsers onFormSwitch={toogleforms} />
        
      }

    </div>
  //   <div className="App">
  //   <button onClick={() => setPage(page === 1 ? 2 : page === 2 ? 3 : 1)}>
  //     Toggle Page
  //   </button>
  //   {page === 1 ? (
  //     <LoginUsers />
  //   ) : page === 2 ? (
  //     <RegisterUsers />
  //   ) : (
  //     <LoginAdmin />
  //   )}
  // </div>
  );
}

export default App;
