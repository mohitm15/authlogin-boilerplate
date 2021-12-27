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
      <div className="container my-3">
        <div
          id="loginbody"
          style={{ backgroundColor: "gainsboro", padding: "5%" }}
        >
          <div className="mt-3">
            <h2 className="my-3 display-3">Forgot Password</h2>
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
                  value={forgotCredentials.email}
                  aria-describedby="emailHelp"
                  onChange={onChange}
                />
                <div id="emailHelp" className="form-text">
                  Type email again to ensure your identity.
                </div>
              </div>

              <div className="mb-3 row">
                <div className="form-floating col-6">
                  <select
                    className="form-select"
                    id="forgetQues"
                    name="forgetQues"
                    value={forgotCredentials.forgetQues}
                    aria-label="Floating label select example"
                    onChange={(e) => onChange(e, "forgetQues")}
                  >
                    <option>Open this select menu</option>
                    <option value="Favourite Sport">Favourite Sport</option>
                    <option value="Favourite Food">Favourite Food</option>
                    <option value="Favourite City To Visit">
                      Favourite City To Visit
                    </option>
                  </select>
                  <label htmlFor="forgetQues">Select Question</label>
                </div>
                <div className="col-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
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
                  className="btn btn-primary col-6 m-auto my-2"
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
                    className="btn btn-primary col-6 m-auto"
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
