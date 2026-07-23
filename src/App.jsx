import React, { useState } from "react";
import LoginForm from "./components/auth/LoginForm";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ThemeToggle from "./components/auth/ThemeToggle";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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
