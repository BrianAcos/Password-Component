import React from "react";
import "./App.css";
import PasswordComponent from "./passwordComponent";
import { InputProps } from "./passwordComponent/types";

const inputProps: InputProps = {
  maxLength: 10,
  hasNumbers: true
};

function App() {
  return (
    <div className="App">
      <h1>Password Component</h1>
      <PasswordComponent {...inputProps} />
    </div>
  );
}

export default App;
