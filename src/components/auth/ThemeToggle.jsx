import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`theme-toggle-switch ${isDark ? "dark" : ""}`}
      onClick={toggleTheme}
      title="Toggle Light / Dark Mode"
    >
      <div className="theme-toggle-thumb">
        {isDark ? "🌙" : "☀️"}
      </div>
    </div>
  );
};

export default ThemeToggle;