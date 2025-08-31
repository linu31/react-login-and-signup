import React, { useState } from "react";
import "./Auth.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="title">Evaluator</h2>
        <p className="subtitle">CONDUCT SECURE ONLINE EXAMS NOW</p>

        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="options">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember this Device
            </label>
            <a href="#" className="forgot">
              Forgot Password ?
            </a>
          </div>

          <button type="submit" className="btn">
            Sign In
          </button>
        </form>

        <p className="footer">
          New to Online Evaluator? <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
