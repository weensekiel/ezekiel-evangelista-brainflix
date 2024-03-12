import "./Header.scss";
import headerLogo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="header__row-1">
        <Link to={"/"}>
          <img src={headerLogo} alt="BrainFlix logo" />
        </Link>
      </div>
      <div className="header__row-2">
        <input
          type="text"
          placeholder="Search"
          className="header__search-bar"
          src="searchImg"
        />
        <img
          className="header__avatar-img"
          src={avatar}
          alt="user avatar"
          height={36}
          width={36}
        />
      </div>
      <div>
        <Link to={"/upload"}>
          <button className="header__button">UPLOAD</button>
        </Link>
      </div>
    </header>
  );
}
