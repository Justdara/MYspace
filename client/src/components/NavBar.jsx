import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AuthContext } from "../context/authContext";

export default function NavBar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="nav">
      <div className="nav-left">
        <img
          className="navimg navleftitem"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlB0ZDJrio-ZdGwfmbZUgWNLrTvS7EvIaVw&usqp=CAU"
          alt=""
        />
        <b className="navleftitem">MYspace</b>
      </div>
      <div className="nav-center">
        <input className="searchbar" type="text" placeholder="Search" />
      </div>
      <div className="nav-right">
        <Link className="link" to="/?cat=science">
          <h4>Science</h4>
        </Link>
        <Link className="link" to="/?cat=Technology">
          <h4>Technology</h4>
        </Link>
        <Link className="link" to="/?cat=cinema">
          <h4>Cinema</h4>
        </Link>
        <Link className="link" to="/?cat=design">
          <h4>Design</h4>
        </Link>
        <Link className="link" to="/?cat=art">
          <h4>Art</h4>
        </Link>
        <span>{currentUser?.username}</span>
        {currentUser ? (
          <span onClick={logout}>Logout</span>
        ) : (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
        <span className="write">
          <Link className="link" to="/write">
            Write
          </Link>
        </span>
      </div>
    </div>
  );
}
