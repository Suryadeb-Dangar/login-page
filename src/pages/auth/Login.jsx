import React from "react";
import LoginForm from "../../components/auth/LoginForm";

const Login = ({ onNavigate }) => {
  return (
    <div className="login-split-container">
      <div className="auth-page">
        <div className="auth-header">
          <h2>WELCOME BACK</h2>
          <span className="subtitle">
            Welcome back! Please enter your details.
          </span>
        </div>
        <LoginForm />
        <button className="link-btn" onClick={() => onNavigate("forgot")}>
          Forgot your password?
        </button>
      </div>
      <div className="sidebar-pane"></div>
    </div>
  );
};

export default Login;
