import { Button, TextField } from "@mui/material";
import "../Common/css/styles.css";
import Footer from "../Components/Footer";
import AuthLogin from "../Layouts/AuthLogin";
import Card from "../Components/Card";
import text from "../Assets/Text/Text.json"

const loginPage = () => {
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
              <span className="textBtn">{text.loginPage.noAccountText}</span>
            </div>
            <div className="login-inner inner1">
              <span className="textBtn">{text.loginPage.forgetPasswordText}</span>
            </div>
          </div>
          <div className="login-head-outer">
            <Button className="login-btn" variant="contained">
            {text.loginPage.loginButton}
            </Button>
          </div>
          <Footer />
        </div>
      </Card>
    </AuthLogin>
  );
};

export default loginPage;
