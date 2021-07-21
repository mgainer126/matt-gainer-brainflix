import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo"></div>
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
          <button className="header__button">+UPLOAD</button>
          <div className="header__avitar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
