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
      <div className="container w-full flex items-center justify-center">
        <div
          id="loginbody"
          className="p-1 sm:p-2 sm:border-2 mt-10 sm:mt-10 border-blue-900 rounded-xl bg-blue-200 w-11/12 lg:w-5/6 flex xl:flex-row item-center justify-center"
        >
          {/* left col */}
          <div className="p-10 w-90 hidden xl:block">
            <img
              src={imgPath}
              alt="imagebadrequest"
              className="w-97 h-97 m-auto"
            />
          </div>
          {/* right col */}
          <div className="sm:p-5 xl:bg-blue-100 border-none xl:shadow-2xl xl:shadow-sky-800 sm:w-4/5 lg:w-3/5 rounded-3xl">
            <h2 className="my-3 text-2xl font-medium sm:text-4xl lg:text-5xl xl:text-6xl text-center">Login Here</h2>
            <form className="login-form p-2 sm:p-5 w-full " onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="block text-gray-800 ext-base sm:text-lg font-medium sm:font-bold mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="shadow border rounded-md sm:rounded-lg w-full py-2 px-1 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:italic placeholder:text-gray-400"
                  placeholder="Type email here..."
                  id="email"
                  name="email"
                  value={credentials.email}
                  aria-describedby="emailHelp"
                  onChange={onChange}
                />
                <div id="emailHelp" className="form-text text-xs sm:text-sm">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-5">
              <div className="flex sm:flex-row flex-col sm:items-baseline">
                <label htmlFor="exampleInputPassword1" className="block text-gray-800 text-base sm:text-lg font-medium sm:font-bold mb-2 w-2/5">
                  Password
                </label>
                <span className="flex flex-row items-center sm:w-4/5"
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    className="shadow appearance-none border border-red-500 rounded-md sm:rounded-lg w-full py-2 px-1 sm:px-3 text-gray-700 leading-tight focus:border-sky-700 focus:shadow-outline placeholder:italic placeholder:text-gray-400"
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
                </span>
                </div>
              </div>
              <div className="d-grid gap-2 my-8 col-6 mx-auto">
                <button
                  type="submit"
                  className="bg-cyan-700 hover:bg-cyan-900 text-white px-1 md:px-2 py-2 text-base sm:text-lg font-semibold  hover:border-2 hover:border-white hover:outline hover:outline-cyan-900 rounded-lg"
                >
                  Login
                </button>
                <button
                  onClick={goToForgotPassword}
                  className="bg-cyan-700 hover:bg-cyan-900 text-white px-1 md:px-2 py-2 text-base sm:text-lg font-semibold  hover:border-2 hover:border-white hover:outline hover:outline-cyan-900 w-full rounded-lg"
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
                    className="bg-cyan-700 hover:bg-cyan-900 text-white px-1 md:px-2 py-2 text-base sm:text-lg font-semibold  hover:border-2 hover:border-white hover:outline hover:outline-cyan-900 rounded-lg"
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
