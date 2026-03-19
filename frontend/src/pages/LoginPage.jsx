import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginFormElements } from "../config/FormElements";
import CommonForm from "../components/CommonForm.jsx";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        alert("Login succesful");
      }
      console.log(await response.json());
    } catch (error) {
      console.error("Login failed", error);
    }
  }

  return (
    <div>
      <h1>LoginForm</h1>
      <CommonForm
        formElements={LoginFormElements}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Login"}
        handleSubmit={handleSubmit}
      />
      <p>
        New user,Create an account <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default LoginPage;
