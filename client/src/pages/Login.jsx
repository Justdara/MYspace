import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <form>
        <h1>LOGIN TO MYSPACE</h1>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>LOG IN</button>
        <p>Error message</p>
        <span>
          New User? <Link to="/register"> Register Now </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
