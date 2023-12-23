import React, { useState } from "react";
import "./styles.css";
import { CheckImg, ErrorImg } from "./images";
import { InputProps } from "./types";
import {
  cleanRegex,
  hasLettersRegex,
  hasNoConsecutiveRegex,
  hasNumberRegex,
  hasSpecialCharRegex,
  hasUppercaseRegex,
} from "./regex";

const PasswordComponent = (props: InputProps) => {
  const {
    hasNumbers,
    maxLength,
    minLength,
    hasLetters,
    hasSpecialChar,
    hasUppercase,
    hasNoConsecutive,
    ableToSubmit,
  } = props;

  const [value, setValue] = useState("");
  const [hasNumbersError, setHasNumberError] = useState(true);
  const [minLengthError, setMinLengthError] = useState(true);
  const [specialCharError, setSpecialCharError] = useState(true);
  const [hasUppercaseError, setHasUppercaseError] = useState(true);
  const [hasNoConsecutiveError, setHasNoConsecutiveError] = useState(true);
  const [hasLettersError, setHasLettersError] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(cleanRegex, "");
    setValue(newValue);

    let noErrors = true;

    if (hasNumbers) {
      const fails = !hasNumberRegex.test(newValue);
      setHasNumberError(fails);
      if (fails) noErrors = false;
    }

    if (minLength) {
      const fails = minLength > newValue.length;
      setMinLengthError(fails);
      if (fails) noErrors = false;
    }

    if (hasSpecialChar) {
      const fails = !hasSpecialCharRegex.test(newValue);
      setSpecialCharError(fails);
      if (fails) noErrors = false;
    }

    if (hasUppercase) {
      const fails = !hasUppercaseRegex.test(newValue);
      setHasUppercaseError(fails);
      if (fails) noErrors = false;
    }

    if (hasNoConsecutive) {
      const fails = !hasNoConsecutiveRegex.test(newValue);
      setHasNoConsecutiveError(fails);
      if (fails) noErrors = false;
    }

    if (hasLetters) {
      const fails = !hasLettersRegex.test(newValue);
      setHasLettersError(fails);
      if (fails) noErrors = false;
    }

    ableToSubmit(noErrors);
  };

  return (
    <div className="container">
      <input
        maxLength={maxLength}
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
        {minLength && (
          <li>
            {minLengthError ? <ErrorImg /> : <CheckImg />}
            <p>Has at least {minLength} characters</p>
          </li>
        )}
        {hasSpecialChar && (
          <li>
            {specialCharError ? <ErrorImg /> : <CheckImg />}
            <p>Has a special char !@#$%^&*</p>
          </li>
        )}
        {hasUppercase && (
          <li>
            {hasUppercaseError ? <ErrorImg /> : <CheckImg />}
            <p>Has uppercase letter</p>
          </li>
        )}
        {hasNoConsecutive && (
          <li>
            {hasNoConsecutiveError ? <ErrorImg /> : <CheckImg />}
            <p>Has no consecutive characters</p>
          </li>
        )}
        {hasLetters && (
          <li>
            {hasLettersError ? <ErrorImg /> : <CheckImg />}
            <p>Has letters</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default PasswordComponent;
