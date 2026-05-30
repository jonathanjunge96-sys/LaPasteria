import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Vänligen fyll i alla fält!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Lösenorden matchar inte!");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        navigate("/login");
      } else {
        alert(data.message || "Något gick fel!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="register-card">
        <h1>Registrering</h1>
        <form onSubmit={handleSubmit}>
          <label>Användarnamn:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Lösenord:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label>Bekräfta lösenord:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">Registrera</button>
        </form>
        <p>
          Har du redan ett konto? <Link to="/login">Logga in här!</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
