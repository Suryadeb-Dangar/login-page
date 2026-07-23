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
    <div className={`auth-page ${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="auth-page">
        {/* Left panel contains all inputs and buttons */}
        <div className="auth-left-panel">
          {currentPage === "login" ? (
            <LoginForm onNavigate={(page) => setCurrentPage(page)} />
          ) : (
            <ForgotPassword onNavigate={(page) => setCurrentPage(page)} />
          )}

          {/* Sliding Theme Switch */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        {/* KEEP THIS PANEL COMPLETELY EMPTY */}
        {/* Having text inside here was causing the duplicate "Forgot your password?" on the black side */}
        <div className="auth-right-panel"></div>
      </div>
    </div>
  );
}

export default App;
