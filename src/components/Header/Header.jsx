import "./Header.scss";
import headerLogo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

export function Header() {
  return (
    <header>
      <div className="header">
        <img src={headerLogo} alt="BrainFlix logo" />
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
        <button className="header__button">UPLOAD</button>
      </div>
    </header>
  );
}
