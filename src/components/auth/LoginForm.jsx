import React, { useState } from "react";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SignUpButton from "./SignUpButton";
import GoogleAuthButton from "./GoogleAuthButton";
import LinkedInAuthButton from "./LinkedInAuthButton";

const LoginForm = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", formData);
  };

  return (
    <div className="login-form-container">
      <h2 className="welcome-heading">Welcome Back</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <PasswordField value={formData.password} onChange={handleChange} />

        <button type="submit" className="btn-primary btn-signin">
          Sign In
        </button>
      </form>

      {/* Button Stack below Sign In */}
      <div className="auth-buttons-stack">
        <SignUpButton onClick={() => onNavigate && onNavigate("signup")} />
        <GoogleAuthButton onClick={() => console.log("Google click")} />
        <LinkedInAuthButton onClick={() => console.log("LinkedIn click")} />

        {/* Single Forgot Password link at bottom */}
        <button
          type="button"
          className="link-btn-forgot"
          onClick={() => onNavigate && onNavigate("forgot")}
        >
          Forgot your password?
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
