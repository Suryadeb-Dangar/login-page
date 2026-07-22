import React, { useState } from "react";
import InputField from "../../components/auth/InputField";

const ForgotPassword = ({ onNavigate }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    alert("Reset link sent!");
  };

  return (
    <div className="auth-page">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit" className="btn-primary">
          Send Reset Link
        </button>
      </form>
      <button className="link-btn" onClick={() => onNavigate("login")}>
        Back to Login
      </button>
    </div>
  );
};

export default ForgotPassword;
