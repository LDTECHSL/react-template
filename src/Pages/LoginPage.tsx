import { Button, TextField } from "@mui/material";
import "../Common/css/styles.css";
import Footer from "../Components/Footer";
import AuthLogin from "../Layouts/AuthLogin";
import Card from "../Components/Card";
import text from "../Assets/Text/Text.json";
import { useNavigate } from "react-router";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  
  // State to manage input values
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');

  const handleLogin = () => {
    // Replace this with your actual authentication logic
    if (username === "admin" && password === "password") {
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <AuthLogin>
      <Card>
        <div className="login-main-outer">
          <div className="login-head-outer">
            <span className="content-header-text">{text.loginPage.header}</span>
          </div>
          <div className="login-head-outer">
            <TextField
              id="outlined-basic"
              size="small"
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update state on change
            />
          </div>
          <div className="login-head-outer">
            <TextField
              id="outlined-basic"
              size="small"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
          </div>
          <div className="login-head-outer">
            <div className="login-inner">
              <span className="textBtn">{text.loginPage.noAccountText}</span>
            </div>
            <div className="login-inner inner1">
              <span className="textBtn">{text.loginPage.forgetPasswordText}</span>
            </div>
          </div>
          <div className="login-head-outer">
            <Button className="login-btn" variant="contained" onClick={handleLogin}>
              {text.loginPage.loginButton}
            </Button>
          </div>
        </div>
      </Card>
    </AuthLogin>
  );
};

export default LoginPage;
