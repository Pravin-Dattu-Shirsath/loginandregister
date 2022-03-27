import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registeration';


function App() {
  return (
    <div className=" container mt-5 ">
      <div className="row">
      <div className="outer col-6 ">
        <div className="inner bg-warning">
          <Registration />
        </div>
      </div>
      <div className="outer col-6">
        <div className="inner">
         <img src="https://dowpie.com/wp-content/uploads/2020/04/Facebook-Login-signup-Welcome-page.png" alt="" width="350" height="420" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;