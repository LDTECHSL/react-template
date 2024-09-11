import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import StatPage from "./Pages/StatPage";
import DetailsPage from "./Pages/DetailsPage";
import Landing from "./Pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects/stat" element={<StatPage />} />
      <Route path="/projects/details" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
