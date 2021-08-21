
import { span } from "prelude-ls";
import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [value, setvalue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
    
    const [submit, setSubmit] = useState(false);

    const [valid, setValid] = useState(false);

  const firstnameInputChange = (e) => {
    setvalue({ ...value, firstName: e.target.value });
  };
  const lastnameInputChange = (e) => {
    setvalue({ ...value, lastName: e.target.value });
  };
  const emailInputChange = (e) => {
    setvalue({ ...value, email: e.target.value });
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (value.firstName && value.lastName && value.email) {
            setValid(true)
        }
       setSubmit(true)
    }
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-container">
              <div className="form-item">
              {submit && valid ? <h3 className="success">Success! Thanks for registering</h3> : null}
                  <h1>Please Register</h1>
          <input
            type="text"
            placeholder="First Name"
                      value={value.firstName}
                      onChange={firstnameInputChange}
          />
                  <br />
                 {submit && !value.firstName ? <span>Please enter your first name</span> : null} 
        </div>
        <div className="form-item">
          <input
            type="text"
            placeholder="Last Name"
                      value={value.lastName}
                      onChange={lastnameInputChange}
          />
                  <br />
                  {submit && !value.lastName ? <span>Please enter your last name</span> : null }
        </div>
        <div className="form-item">
          <input
            type="email"
            placeholder="Email"
                      value={value.email}
                      onChange={emailInputChange}
          />
                  <br />
                  {submit && !value.email ? <span>Please enter your email address</span> : null }
        </div>
              <button >Register</button>
              <p>Have a account? <a href="#">Login</a></p>
      </div>
    </form>
  );
}

export default Form;
