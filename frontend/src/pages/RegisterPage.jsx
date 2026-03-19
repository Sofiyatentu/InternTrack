import { Link } from "react-router-dom";
import { RegisterFormElements } from "../config/FormElements";
import CommonForm from "../components/CommonForm";
import { useState } from "react";
function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 201) {
        console.log(await response.json());
      }
      alert((await response.json()).message);
    } catch (error) {
      console.error("Internal server error occurred");
    }
  }
  return (
    <div>
      <h1>RegisterForm</h1>
      <CommonForm
        formElements={RegisterFormElements}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Register"}
        handleSubmit={handleSubmit}
      />
      <p>
        Already having an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
export default RegisterPage;
