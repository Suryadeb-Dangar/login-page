import React from "react";
import InputField from "./InputField";

// We separate this in case you want to add a "Show/Hide password" toggle later
const PasswordField = ({ value, onChange }) => {
  return (
    <InputField
      label="Password"
      type="password"
      name="password"
      value={value}
      onChange={onChange}
      placeholder="Enter your password"
    />
  );
};

export default PasswordField;
