import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = (props) => {
  let navigate = useNavigate();

  const [forgotCredentials, setForgotCredentials] = useState({
    email: "",
    forgetQues: "",
    forgetAns: "",
  });

  const onChange = (e) => {
    setForgotCredentials({
      ...forgotCredentials,
      [e.target.name]: e.target.value,
    });
    //console.log(forgotCredentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: forgotCredentials.email,
        forgetQues: forgotCredentials.forgetQues,
        forgetAns: forgotCredentials.forgetAns,
      }),
    });
    const json = await response.json();
    // console.log(json)

    if (json.success === true) {
      //navigating to the changePassword endpoint
      props.showAlert("Selected Correct Credentials successfully", "info");
      navigate("/changePassword");
    } else {
      props.showAlert("Selected Correct Credentials, Try Again!", "danger");
    }
  };

  const backToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="container p-1 flex flex-row item-center w-full justify-center ">
        <div
          id="loginbody"
          className="sm:p-5 mt-10 lg:mt-14 border-2 border-blue-900 rounded-xl bg-blue-200"
        >
          <div className="m-3">
            <h2 className="my-3 text-2xl font-medium sm:text-4xl lg:text-5xl xl:text-6xl text-center">Forgot Password</h2>
            <form className="login-form p-2 sm:p-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="block text-gray-800 text-base sm:text-lg font-medium sm:font-bold mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  className="shadow border rounded-lg w-full py-2 px-1 sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:italic placeholder:text-gray-400"
                  placeholder="Type email here..."
                  id="email"
                  name="email"
                  value={forgotCredentials.email}
                  aria-describedby="emailHelp"
                  onChange={onChange}
                />
                <div id="emailHelp" className="form-text px-1 sm:px-2">
                  Type email again to ensure your identity.
                </div>
              </div>

              <div className="mb-3 row flex flex-col sm:flex-row">
                <div className="form-floating col-12 sm:col-6 mb-3 sm:mb-0">
                  <select
                    className="form-select block w-full bg-white border border-gray-400 hover:border-gray-500 rounded-md sm:rounded-xl shadow "
                    id="forgetQues"
                    name="forgetQues"
                    value={forgotCredentials.forgetQues}
                    aria-label="Floating label select example"
                    onChange={(e) => onChange(e, "forgetQues")}
                  >
                    <option className="font-italic text-gray-400 text-base sm:text-md">Open this select menu</option>
                    <option value="Favourite Sport">Favourite Sport</option>
                    <option value="Favourite Food">Favourite Food</option>
                    <option value="Favourite City To Visit">
                      Favourite City To Visit
                    </option>
                  </select>
                  <label htmlFor="forgetQues">Select Question</label>
                </div>
                <div className="col-12 sm:col-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control rounded-md sm:rounded-xl shadow"
                      id="forgetAns"
                      name="forgetAns"
                      value={forgotCredentials.forgetAns}
                      onChange={(e) => onChange(e, "forgetAns")}
                    />
                    <label htmlFor="forgetAns">Answer</label>
                  </div>
                </div>
              </div>

              <div className="d-grid gap-2 my-4 col-6 mx-auto">
                <button
                  type="submit"
                  className="bg-cyan-700 hover:bg-cyan-900 text-white px-2 py-2 text-base sm:text-lg font-semibold  hover:border-2 hover:border-white hover:outline hover:outline-cyan-900 rounded-lg"
                >
                  Confirm Details
                </button>
              </div>
              <hr />
              <div className="mb-3 text-center">
                <div id="emailHelp" className="form-text center my-3">
                  Remembered your password ?
                </div>
                <div className="d-grid gap-2 my-3 col-6 mx-auto">
                  <button
                    onClick={backToLogin}
                    className="bg-cyan-700 hover:bg-cyan-900 text-white px-3 py-1 text-base sm:text-lg font-semibold  hover:border-2 hover:border-white hover:outline hover:outline-cyan-900 rounded-lg"
                  >
                    Login Again !
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

export default ForgotPasswordPage;
