import React from "react";
import LoginForm from "./components/auth/LoginForm";

function App() {
  return (
    <div className="auth-page">
      {/* Left panel contains all inputs and buttons */}
      <div className="auth-left-panel">
        <LoginForm />
      </div>
      <div className="auth-right-panel"></div>
    </div>
  );
}

export default App;
