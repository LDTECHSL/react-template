import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthLogin from "./Layouts/AuthLogin";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
