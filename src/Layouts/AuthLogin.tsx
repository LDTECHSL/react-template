import "../Common/css/styles.css"
import LoginPage from "../Pages/LoginPage";
import logo from "../Assets/Images/logo.png"
import Card from "../Components/Card";

const AuthLogin = () => {
    return (
        <div className="main-outer-container">
            <div className="login-container">
                <div className="login-header">
                    <img className="logo" src={logo} alt=""/>
                    <span className="login-header-text">React</span>
                </div>
                <div className="login-content-container middle">
                    <div className="login-outer">
                        <Card>
                            <LoginPage/>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLogin