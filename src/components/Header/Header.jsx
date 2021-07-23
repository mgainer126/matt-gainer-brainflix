import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>
        <div className="header__btm-right">
          <form>
            <label for="search"></label>
            <input
              type="text"
              className="header__search"
              id="search"
              placeholder="Search"
            ></input>
          </form>
          <Link to="/upload-video">
            <button className="header__button">+UPLOAD</button>
          </Link>
          <div className="header__avitar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
