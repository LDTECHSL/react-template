import './App.css';
import {Route, Routes} from 'react-router-dom';
import AuthLogin from "./Layouts/AuthLogin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLogin />} />
      </Routes>
    </div>
  );
}

export default App;
