import { Link } from "react-router-dom";
import logoMark from "../../img/suhweets_logomark.png";
import { HeaderProps } from "./Header.types";
import "./header.css";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" tabIndex={1}>
          <img src={`${logoMark}`} alt="" className={"logo logomark"} />
        </Link>
        <HamburgerMenuIcon setMenuFade={props.setMenuFade} />
      </div>
    </header>
  );
};

export default Header;
