import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import '../App.css';
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [pa, setPa] = useState(false);
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }
  const strongRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[@])(?=.*[0-9])(?=.{8,})");
  return (
    <>
 
        <div >
          {" "}
          {login ? (<div className="bg-warning">
            <form onSubmit={handleFormSubmit} >
              <h3 >Register your details 👨</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                 
                  onChange={(e)=>{if(strongRegex.test(e.target.value)){
                    setPassword(e.target.value)
                    
                  }else{
                    setPassword()
                    setPa(true)
                  } }} 
                />
                
                {pa==true&& <p>first later capital,one symbole,numbers,must be contain 8 cah
                
                haracter</p>}
                
              </div>

              <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Choose your Profession</label>
                <Form.Control
                  as="select"
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>Select</option>
                  <option>Artist</option>
                  <option>Photographer</option>
                  <option>Team Player</option>
                  <option>Full Stack</option>
                </Form.Control>
              </div>

              <button type="submit" className="btn btn-success btn-lg btn-block mt-3">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right mou">
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger " className="mt-5">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form></div>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Registration;
