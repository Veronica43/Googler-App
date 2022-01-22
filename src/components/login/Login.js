import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./login.css";

export const Login = () => {
  const history = useHistory();
  return (
    <>
      <h3 className="title">Login</h3>

      <form>
        <input type="text" placeholder="Email" name="email" className="input" />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="input"
        />
        <button
          onClick={() => history.push("/")}
          className="btn "
          type="submit"
        >
          Login
        </button>
        <Link to="/register" className="link">
          {" "}
          Create a new account
        </Link>{" "}
      </form>
    </>
  );
};
