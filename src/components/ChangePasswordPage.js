import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePasswordPage = (props) => {
  let navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfmPassword, setShowConfmPassword] = useState(false);

  const [newCredentials, setNewCredentials] = useState({
    email: "",
    newPassword: "",
    confmNewPassword: "",
  });

  const onChange = (e) => {
    setNewCredentials({
      ...newCredentials,
      [e.target.name]: e.target.value,
    });
  };

  //console.log(newCredentials);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/changePassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: newCredentials.email,
        newPassword: newCredentials.newPassword,
        confmNewPassword: newCredentials.confmNewPassword,
      }),
    });

    const json = await response.json();
    //console.log(json)

    if (json.success === true) {
      localStorage.setItem("token", json.authToken);
      props.showAlert("Password Changed Successfully !", "info");
      navigate("/login");
    } else {
      props.showAlert("Password Did Not Changed", "danger");
    }
  };

  const backToForgot = () => {
    navigate("/forgotPassword");
  };

  function togglePasswordVisibilty() {
    setShowPassword(!showPassword ? true : false);
  }

  function toggleConfmPasswordVisibilty() {
    setShowConfmPassword(!showConfmPassword ? true : false);
  }

  return (
    <>
      <div className="container my-3">
        <div
          id="loginbody"
          style={{ backgroundColor: "gainsboro", padding: "5%" }}
        >
          <div className="mt-3">
            <h2 className="my-3 display-3">Change Password</h2>
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
                  value={newCredentials.email}
                  aria-describedby="emailHelp"
                  onChange={onChange}
                />
                <div id="emailHelp" className="form-text">
                  Type email again to ensure your identity.
                </div>
              </div>

              <div className="mb-3">
                <div
                  className="pass-wrapper"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <label
                    htmlFor="newPassword"
                    className="form-label"
                    style={{ width: "200px" }}
                  >
                    New Password
                  </label>
                  <div
                    style={{
                      border: "1px solid #ced4da",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control mx-3"
                      id="newPassword"
                      name="newPassword"
                      minLength={5}
                      value={newCredentials.newPassword}
                      onChange={(e) => onChange(e, "newPassword")}
                      style={{ outline: "none", border: 0 }}
                      required
                    />
                    <i
                      className={
                        showPassword
                          ? "fas fa-eye-slash mx-2"
                          : "fas fa-eye mx-2"
                      }
                      title={
                        showPassword ? "Hide New Password" : "Show New Password"
                      }
                      onClick={togglePasswordVisibilty}
                    ></i>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div
                  className="pass-wrapper"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <label
                    htmlFor="confmNewPassword"
                    className="form-label"
                    style={{ width: "200px" }}
                  >
                    Confirm New Password
                  </label>
                  <div
                    style={{
                      border: "1px solid #ced4da",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <input
                      type={showConfmPassword ? "text" : "password"}
                      className="form-control mx-3"
                      id="confmNewPassword"
                      name="confmNewPassword"
                      value={newCredentials.confmNewPassword}
                      onChange={(e) => onChange(e, "confmNewPassword")}
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
                          ? "Hide Confirmed NewPassword"
                          : "Show Confirmed NewPassword"
                      }
                      onClick={toggleConfmPasswordVisibilty}
                    ></i>
                  </div>
                </div>
              </div>

              <div className="d-grid gap-2 my-4 col-6 mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary col-6 m-auto my-2"
                >
                  Change Password
                </button>
              </div>
              <hr />
              <div className="mb-3 text-center">
                <div id="emailHelp" className="form-text center my-3">
                  Want to go back ?
                </div>
                <div className="d-grid gap-2 my-3 col-6 mx-auto">
                  <button
                    onClick={backToForgot}
                    className="btn btn-primary col-6 m-auto"
                  >
                    Back
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

export default ChangePasswordPage;
