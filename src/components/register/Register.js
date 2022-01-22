import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./register.css";

export const Register = () => {
  const history = useHistory();
  return (
    <>
      <h3 className="title">Register</h3>

      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="input"
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="input"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="input"
        />
        <button
          onClick={() => history.push("/")}
          className="btn "
          type="submit"
        >
          Register
        </button>

        <Link to="/login" className="link">
          Alredy registered?
        </Link>
      </form>
    </>
  );
};
