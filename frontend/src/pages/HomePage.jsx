import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/login")}>Get started</button>
    </div>
  );
}
export default HomePage;
