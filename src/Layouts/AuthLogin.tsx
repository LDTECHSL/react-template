import "../Comman/css/styles.css"
import LoginPage from "../Pages/LoginPage";
import logo from "../Assests/Images/logo.png"

const AuthLogin = () => {
    return (
        <div className="main-outer-container">
            <div className="login-container">
                <div className="login-header">
                    <img className="logo" src={logo} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AuthLogin