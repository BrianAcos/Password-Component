import React, { useState, useEffect } from "react";
import "./styles.css";

interface props {}

const PasswordComponent = (props: props) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <div>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordComponent;
