import React, { useState } from "react";
import InputField from "./InputField";
import PasswordField from "./PasswordField";

const LoginForm = () => {
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
    alert("Form submitted! Check console for data.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <PasswordField value={formData.password} onChange={handleChange} />
      <button type="submit" className="btn-primary">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
