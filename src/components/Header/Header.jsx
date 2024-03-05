import "../../styles/Header.scss";
import headerLogo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchImg from "../../assets/images/search.svg";

export function Header() {
  return (
    <header>
      <div className="header">
        <img src={headerLogo} alt="BrainFlix logo" height={25} width="120" />
      </div>
      <div className="header__row-2">
        <input
          type="text"
          placeholder="Search"
          className="header__search-bar"
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
