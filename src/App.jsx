import React from "react";
import LoginForm from "./components/auth/LoginForm";

function App() {
  return (
    <div className="auth-page">
      {/* Left panel contains all inputs and buttons */}
      <div className="auth-left-panel">
        <LoginForm />
      </div>

      {/* KEEP THIS PANEL COMPLETELY EMPTY */}
      {/* Having text inside here was causing the duplicate "Forgot your password?" on the black side */}
      <div className="auth-right-panel"></div>
    </div>
  );
}

export default App;