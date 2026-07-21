import React, { useState } from "react";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
  // Simple state to toggle between pages (Use React Router for a real app)
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <main>
      {currentPage === "login" ? (
        <Login onNavigate={setCurrentPage} />
      ) : (
        <ForgotPassword onNavigate={setCurrentPage} />
      )}
    </main>
  );
}

export default App;
