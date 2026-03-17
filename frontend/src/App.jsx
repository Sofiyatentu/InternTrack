import { Routes, Route, Link, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>InternTrack</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
