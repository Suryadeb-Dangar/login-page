import React from "react";

const SignUpButton = ({ onClick }) => {
  return (
    <button type="button" className="btn-signup" onClick={onClick}>
      Sign Up
    </button>
  );
};

export default SignUpButton;