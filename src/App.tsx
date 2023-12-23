import React from "react";
import "./App.css";
import PasswordComponent from "./passwordComponent";
import { InputProps } from "./passwordComponent/types";

const inputProps: InputProps = {
  maxLength: 20,
  minLength: 8,
  hasNumbers: true,
  hasLetters: true,
  hasSpecialChar: true,
  hasUppercase: true,
  hasNoConsecutive: true,
  ableToSubmit: () => {},
};

function App() {
  const handleAbleButton = (ok: boolean) => {
    // TODO: set able or unable button when check all requirements
    console.log({ok});
  };

  return (
    <div className="App">
      <h1>Password Component</h1>
      <PasswordComponent {...inputProps} ableToSubmit={handleAbleButton} />
    </div>
  );
}

export default App;
