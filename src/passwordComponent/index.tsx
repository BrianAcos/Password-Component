import React, { useState } from "react";
import "./styles.css";
import { CheckImg, ErrorImg } from "./images";
import { InputProps } from "./types";
import { hasNumberRegex } from "./regex";

const PasswordComponent = (props: InputProps) => {
  const { hasNumbers, maxLength } = props;
  const [value, setValue] = useState("");
  const [hasNumbersError, setHasNumberError] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (hasNumbers) {
      const result = hasNumberRegex.test(newValue);
      setHasNumberError(!result);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        max={maxLength}
        className="inputPassword"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <ul className="listOfErrors">
        {hasNumbers && (
          <li>
            {hasNumbersError ? <ErrorImg /> : <CheckImg />}
            <p>Has a number 0-9</p>
          </li>
        )}
        <li>
          <ErrorImg />
          <p>Has a special char !@#$%^&*</p>
        </li>
        <li>
          <ErrorImg />
          <p>Has uppercase letter</p>
        </li>
      </ul>
    </div>
  );
};

export default PasswordComponent;
