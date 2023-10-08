import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function NavBar() {
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
        <span>Username </span>
        <span>Logout </span>
        <span className="write">
          <Link className="link" to="/write">
            Write
          </Link>
        </span>
      </div>
    </div>
  );
}
