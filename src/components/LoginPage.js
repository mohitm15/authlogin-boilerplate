import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgPath from "../assests/badrequest.png";

const LoginPage = (props) => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    //console.log(credentials);
  };

  const handleSubmit = async (e) => {
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
    });
    const json = await response.json();
    // console.log(json)

    if (json.success === true) {
      //storing the authtoken
      localStorage.setItem("token", json.authToken);
      props.showAlert("User logged in successfully", "info");
      navigate("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const togglePasswordVisibilty = () => {
    setShowPassword(!showPassword ? true : false);
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  const goToForgotPassword = () => {
    navigate("/forgotPassword");
  };

  return (
    <>
      <div className="container w-90 mt-3">
        <div
          id="loginbody"
          className="p-2 border-2 border-blue-900 rounded-xl bg-blue-200 flex flex-row item-center"
        >
          {/* left col */}
          <div className="p-10 w-90">
            <img
              src={imgPath}
              alt="imagebadrequest"
              className="w-97 h-97 m-auto"
            />
          </div>
          {/* right col */}
          <div className="p-5 bg-blue-100 border-none shadow-2xl shadow-sky-800 w-95 ml-20 rounded-3xl my-5">
            <h2 className="my-3 text-6xl text-center">Login Here</h2>
            <form className="login-form p-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="block text-gray-800 text-lg font-bold mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:italic placeholder:text-gray-400"
                  placeholder="Type email here..."
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    border: "1px solid #ced4da",
                  }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    className="shadow appearance-none border border-red-500 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:border-sky-700 focus:shadow-outline placeholder:italic placeholder:text-gray-400"
                    id="password"
                    name="password"
                    placeholder="Type password here...  "
                    value={credentials.password}
                    onChange={onChange}
                    style={{ outline: "none", border: 0 }}
                    required
                  />
                  <i
                    className={
                      showPassword ? "fas fa-eye-slash mx-2" : "fas fa-eye mx-2"
                    }
                    title={showPassword ? "Hide Password" : "Show Password"}
                    onClick={togglePasswordVisibilty}
                  ></i>
                </div>
              </div>
              <div className="d-grid gap-2 my-4 col-6 mx-auto">
                <button
                  type="submit"
                  className="bg-cyan-700 hover:bg-cyan-900 text-white px-2 py-2 text-lg font-semibold  hover:border-2 hover:border-white hover:outline hover:outline-cyan-900 rounded-lg"
                >
                  Login
                </button>
                <button
                  onClick={goToForgotPassword}
                  className="bg-cyan-700 hover:bg-cyan-900 text-white px-2 py-2 text-lg font-semibold  hover:border-2 hover:border-white hover:outline hover:outline-cyan-900 w-full rounded-lg"
                >
                  Forgot Password?
                </button>
              </div>
              <hr />
              <div className="mb-3 text-center">
                <div id="emailHelp" className="form-text center my-3">
                  Didn't have an account ?
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    onClick={goToSignUp}
                    className="bg-cyan-700 hover:bg-cyan-900 text-white px-2 py-2 text-lg font-semibold  hover:border-2 hover:border-white hover:outline hover:outline-cyan-900 rounded-lg"
                  >
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
