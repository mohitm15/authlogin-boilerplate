import { useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import ChangePasswordPage from "./components/ChangePasswordPage";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  return (
    <>
      <Router>
        <Navbar showAlert={showAlert} />
        {alert === null ? null:<Alert alert={alert} />}
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route
            exact
            path="/about"
            element={<About showAlert={showAlert} />}
          />
          <Route
            exact
            path="/signup"
            element={<SignupPage showAlert={showAlert} />}
          />
          <Route
            exact
            path="/login"
            element={<LoginPage showAlert={showAlert} />}
          />
          <Route
            exact
            path="/forgotPassword"
            element={<ForgotPasswordPage showAlert={showAlert} />}
          />
          <Route
            exact
            path="/changePassword"
            element={<ChangePasswordPage showAlert={showAlert} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
