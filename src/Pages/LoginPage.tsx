import { Button, TextField } from "@mui/material";
import "../Common/css/styles.css";
import Footer from "../Components/Footer";

const loginPage = () => {
  return (
    <div className="login-main-outer">
      <div className="login-head-outer">
        <span className="content-header-text">Login</span>
      </div>
      <div className="login-head-outer">
        <TextField
          id="outlined-basic"
          size="small"
          label="Username"
          variant="outlined"
          fullWidth
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
        />
      </div>
      <div className="login-head-outer">
        <div className="login-inner">
          <span className="textBtn">Don't have an account?</span>
        </div>
        <div className="login-inner inner1">
          <span className="textBtn">Forget password?</span>
        </div>
      </div>
      <div className="login-head-outer">
        <Button className="login-btn" variant="contained">
          Login
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default loginPage;
