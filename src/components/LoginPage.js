import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {

let navigate = useNavigate();

const [credentials, setCredentials] = useState({email:"",password:""});


const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value})
    //console.log(credentials.email, credentials.password);
}


const handleSubmit = async(e) => {
    
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
    ;

    const json = await response.json();
    // console.log(json)

    if(json.success === true) {
        //storing the authtoken
        localStorage.setItem("token",json.authToken);
        props.showAlert("User logged in successfully", "info");
        navigate("/")
    }
    else {
        props.showAlert("Invalid Credentials", "danger");
    }
}

const goToSignUp = () => {
    navigate("/signup");
}


  return (
    <>
      <div className="container my-5">
        <div id="loginbody">
          <div className="mt-3">
            <h2 className="my-3 display-3">Login Here</h2>
            <form className="login-form p-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={credentials.email}
                  aria-describedby="emailHelp"
                  onChange={onChange}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                />
              </div>
              <div className="d-grid gap-2 my-4 col-6 mx-auto">
              <button type="submit" className="btn btn-success" >
                Submit
              </button>
              </div>
              <hr />
            <div className="mb-3 text-center">
              <div id="emailHelp" className="form-text center my-3">
                Didn't have an account ?
              </div>
              <div className="d-grid gap-2 my-3 col-6 mx-auto">
                <button onClick={goToSignUp} className="btn btn-success ">
                  SignUp Here !
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
