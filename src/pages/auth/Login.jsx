import React from "react";
import LoginForm from "../../components/auth/LoginForm";
// import ForgotPassword from "../../pages/auth/ForgotPassword"

const Login = ({ onNavigate }) => {
  return (
    <div className="auth-page">
      <h2>Welcome Back</h2>
      <LoginForm />
      <button className="link-btn" onClick={() => onNavigate("forgot")}>
        Forgot your password?
      </button>
    </div>
  );
};

export default Login;
