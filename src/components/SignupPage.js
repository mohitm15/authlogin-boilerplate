import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = (props) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfmPassword, setShowConfmPassword] = useState(false);

  const goToLogin = () => {
    navigate("/login");
  };

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confmpassword: "",
    role: "guest",
    forgetQues: "",
    forgetAns: "",
  });

  const onChange = (e, key) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [key]: e.target.value,
    }));
    //console.log(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        role: credentials.role,
        forgetQues: credentials.forgetQues,
        forgetAns: credentials.forgetAns,
      }),
    });

    const json = await response.json();
    //console.log(json);

    if (json.success === true) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("User Registered Successfully !", "info");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  function togglePasswordVisibilty() {
    setShowPassword(!showPassword ? true : false);
  }

  function toggleConfmPasswordVisibilty() {
    setShowConfmPassword(!showConfmPassword ? true : false);
  }

  return (
    <>
      <div className="container mt-3 sm:mt-10 flex flex-row item-center w-full justify-center">
        <div
          id="loginbody"
          className="sm:p-5 sm:border-2 border-blue-900 rounded-xl bg-blue-100 w-11/12 lg:w-3/6"
        >
          <div className="m-3">
            <h2 className="my-3 text-2xl font-medium sm:text-4xl lg:text-5xl xl:text-6xl text-center">Create your account here </h2>
            <form className="login-form p-2 sm:p-5 sm:w-full lg:w-full  " onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="block text-gray-800 text-base sm:text-lg font-medium sm:font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="shadow border rounded-md sm:rounded-lg w-full py-2 px-1 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:italic placeholder:text-gray-400"
                  placeholder="Type name here..."
                  id="name"
                  name="name"
                  value={credentials.name}
                  onChange={(e) => onChange(e, "name")}
                  aria-describedby="emailHelp"
                />
              </div>
              {/* --------------- */}
              <div className="mb-3">
                <label htmlFor="email" className="block text-gray-800 text-base sm:text-lg font-medium sm:font-bold mb-2">
                  Email{" "}
                </label>
                <input
                  type="email"
                  className="shadow border rounded-md sm:rounded-lg w-full py-2 px-1 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:italic placeholder:text-gray-400"
                  placeholder="Type email here..."
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={(e) => onChange(e, "email")}
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <div className="flex sm:flex-row flex-col sm:items-baseline">
                  <label
                    htmlFor="password"
                    className="block text-gray-800 text-base sm:text-lg font-medium sm:font-bold mb-2 w-2/5"
                  >
                    Password
                  </label>
                  <span className="flex flex-row items-center sm:w-3/5">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="shadow appearance-none border border-red-500 rounded-md sm:rounded-lg w-full py-2 px-1 sm:px-3 text-gray-700  leading-tight focus:border-sky-700 focus:shadow-outline placeholder:italic placeholder:text-gray-400"
                      placeholder="Type password here..."
                      id="password"
                      name="password"
                      minLength={5}
                      value={credentials.password}
                      onChange={(e) => onChange(e, "password")}
                      style={{ outline: "none", border: 0 }}
                      required
                    />
                    <i
                      className={
                        showPassword
                          ? "fas fa-eye-slash mx-2"
                          : "fas fa-eye mx-2"
                      }
                      title={showPassword ? "Hide Password" : "Show Password"}
                      onClick={togglePasswordVisibilty}
                    ></i>
                  </span>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex sm:flex-row flex-col sm:items-baseline">
                  <label
                    htmlFor="confmpassword"
                    className="block text-gray-800 text-base sm:text-lg font-medium sm:font-bold w-2/5"
                  >
                    Confirm Password
                  </label>
                  <span className="flex flex-row items-center sm:w-3/5">
                    <input
                      type={showConfmPassword ? "text" : "password"}
                      className="shadow appearance-none border border-red-500 rounded-md sm:rounded-lg w-full py-2 px-1 sm:px-3 text-gray-700 leading-tight focus:border-sky-700 focus:shadow-outline placeholder:italic placeholder:text-gray-400"
                      placeholder="Confirm password here..."
                      id="confmpassword"
                      name="confmpassword"
                      value={credentials.confmpassword}
                      onChange={(e) => onChange(e, "confmpassword")}
                      minLength={5}
                      required
                      style={{ border: 0, outline: "none" }}
                    />
                    <i
                      className={
                        showConfmPassword
                          ? "fas fa-eye-slash mx-2"
                          : "fas fa-eye mx-2"
                      }
                      title={
                        showConfmPassword
                          ? "Hide Confirmed Password"
                          : "Show Confirmed Password"
                      }
                      onClick={toggleConfmPasswordVisibilty}
                    ></i>
                  </span>
                </div>
              </div>

              <div className="mb-3 col-md">
                <div className="flex flex-row items-center">
                <label htmlFor="role" className="block text-gray-800 text-base sm:text-lg font-medium sm:font-bold">
                  Role
                </label>
                <div className="form-check form-check-inline mx-2 sm:mx-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="roleOptions"
                    id="role1"
                    value="admin"
                    onChange={(e) => onChange(e, "role")}
                  />
                  <label className="form-check-label" htmlFor="role1">
                    Admin
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="roleOptions"
                    id="role2"
                    value="client"
                    onChange={(e) => onChange(e, "role")}
                  />
                  <label className="form-check-label" htmlFor="role2">
                    Client
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="roleOptions"
                    id="role3"
                    value="guest"
                    onChange={(e) => onChange(e, "role")}
                  />
                  <label className="form-check-label" htmlFor="role3">
                    Guest
                  </label>
                </div>
                </div>
              </div>
              <div className="mb-3 row">
                <div className="form-floating col-6">
                  <select
                    className="form-select block w-full bg-white border border-gray-400 hover:border-gray-500 rounded-md sm:rounded-xl shadow "
                    id="forgetQues"
                    name="forgetQues"
                    value={credentials.forgetQues}
                    aria-label="Floating label select example"
                    onChange={(e) => onChange(e, "forgetQues")}
                  >
                    <option className="font-italic text-gray-400">Open this select menu</option>
                    <option value="Favourite Sport">Favourite Sport</option>
                    <option value="Favourite Food">Favourite Food</option>
                    <option value="Favourite City To Visit">
                      Favourite City To Visit
                    </option>
                  </select>
                  <label htmlFor="forgetQues" className="text-gray-800 text-base sm:text-lg font-medium sm:font-bold">Select Question</label>
                </div>
                <div className="col-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control rounded-md sm:rounded-xl shadow"
                      id="forgetAns"
                      name="forgetAns"
                      value={credentials.forgetAns}
                      onChange={(e) => onChange(e, "forgetAns")}
                    />
                    <label htmlFor="forgetAns" className="text-gray-800 text-base sm:text-lg font-medium sm:font-bold">Answer</label>
                  </div>
                </div>
              </div>

              <div className="d-grid gap-2 my-4 col-6 mx-auto">
                <button type="submit" className="bg-cyan-700 hover:bg-cyan-900 text-white  py-2 text-base sm:text-lg font-semibold  hover:border-2 hover:border-white hover:outline hover:outline-cyan-900 rounded-lg">
                  SignUp
                </button>
              </div>
              <hr />
              <div className="mb-3 text-center ">
                <div id="emailHelp" className="form-text center my-3">
                  Already have an account ?
                </div>
                <div className="d-grid gap-2 my-3 col-6 mx-auto">
                  <button
                    onClick={goToLogin}
                    className="bg-cyan-700 hover:bg-cyan-900 text-white px-2 py-2 text-base sm:text-lg font-semibold  hover:border-2 hover:border-white hover:outline hover:outline-cyan-900 rounded-lg"
                  >
                    Login Here!
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

export default SignupPage;
