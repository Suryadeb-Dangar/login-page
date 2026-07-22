import React, { useState } from "react";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
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
