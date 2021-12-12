import React from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login")
  }

  return (
    <>
      <div className="container my-5">
        <div id="loginbody">
          <div className="mt-3">
            <h2 className="my-3 display-3">Create your account here </h2>
            <form className="login-form p-5">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confmpassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confmpassword"
                  name="confmpassword"
                  minLength={5}
                  required
                />
              </div>
              <div className="d-grid gap-2 my-4 col-6 mx-auto">
                <button type="submit" className="btn btn-success ">
                  SignUp
                </button>
              </div>
              <hr />
              <div className="mb-3 text-center">
                <div id="emailHelp" className="form-text center my-3">
                  Already have an account ?
                </div>
                <div className="d-grid gap-2 my-3 col-6 mx-auto">
                  <button onClick={goToLogin} className="btn btn-success ">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
