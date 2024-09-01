import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Layouts/Dashboard";
import Sample from "./Pages/Sample";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard/sample" element={<Sample />}>
        <Route path="sample" element={<Sample />} />
        {/* You can add more child routes as needed */}
      </Route>
    </Routes>
  );
}

export default App;
