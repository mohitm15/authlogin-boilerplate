import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    //console.log("hello");
    navigate("/login");
    props.showAlert("User Logged Out succesfully! ", "info");
    
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>

            {!localStorage.getItem("token") ? (
              <form className="d-flex ml-auto">
                <Link
                  className="btn btn-outline-primary mx-2 border-2"
                  to="/signup"
                  role="button"
                >
                  SignUp
                </Link>
                <Link
                  className="btn btn-outline-primary border-2"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
              </form>
            ) : (
              <form className="d-flex">
                <button
                  className="btn btn-outline-primary border-2 mx-2"
                  onClick={handleLogout}
                >
                  LogOut
                </button>
              </form>
            )}
            </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
