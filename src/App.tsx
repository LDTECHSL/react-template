import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />}>
        {/*<Route path="sample" element={<Dashboard />} />*/}
      </Route>
    </Routes>
  );
}

export default App;
