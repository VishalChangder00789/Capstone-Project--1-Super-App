import React, { useEffect, useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import {
  hasExceededCharacters,
  doesContainNumber,
  hasUpperCase,
  doesDomainExist,
} from "../../controllers/formInputController";

const Input = ({ type, placeholder, setInformation, information }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  // State Update
  useEffect(() => {
    let newobj;

    if (type === "name") {
      if (error) {
        return;
      }
      newobj = { ...information, name: input };
    } else if (type === "username") {
      if (error) {
        return;
      }
      newobj = { ...information, username: input };
    } else if (type === "email") {
      if (error) {
        return;
      }
      newobj = { ...information, email: input };
    } else if (type === "phone") {
      if (error) {
        return;
      }
      newobj = { ...information, phone: input };
    }

    setInformation(newobj);
  }, [input]);

  const handleChange = (e) => {
    let word = e.target.value;

    if (type === "name") {
      if (hasExceededCharacters(word, 20)) {
        setError("Name should be less than 20 characters");
        return;
      } else if (doesContainNumber(word)) {
        setError("Name should not contain any number");
        return;
      } else {
        setError("");
      }
    } else if (type === "username") {
      if (word === "") {
        setError("");
      } else {
        if (!hasUpperCase(word)) {
          setError("Username should atleast have an upper case");
        } else if (!doesContainNumber(word)) {
          setError("Username should atleast contain a number");
        } else if (hasExceededCharacters(word, 10)) {
          setError("Username should be less than 10 characters");
          return;
        } else {
          setError("");
        }
      }
    } else if (type === "email") {
      if (word === "") {
        setError("");
      } else if (!doesDomainExist(word)) {
        setError("Add a domain");
      } else {
        setError("");
      }
    } else if (type === "phone") {
      if (word === "") {
        setError("");
      } else {
        if (hasExceededCharacters(word, 10)) {
          setError("Phone number should be 10 digits");
          return;
        } else if (!doesContainNumber(word)) {
          setError("Phone number should be number");
        } else {
          setError("");
        }
      }
    }

    setInput(word);
  };

  return (
    <div className="InputContainer">
      <input
        value={input}
        onChange={(e) => handleChange(e)}
        className={`Input ${!error ? "" : "errorInput"}`}
        type={type}
        placeholder={placeholder}
      />
      {!error ? " " : <div className="ErrorClass">{error}</div>}
    </div>
  );
};

export default Input;
