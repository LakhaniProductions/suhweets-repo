import { Link } from "react-router-dom";
import logoMark from "../../img/suhweets_logomark.png";
import { HeaderProps } from "./Header.types";
import "./header.css";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";
import { useEffect, useState } from "react";

const Header = (props: HeaderProps) => {
  const [showShadow, setShowShadow] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY >= 16 ? setShowShadow(true) : setShowShadow(false);
    };
    window.addEventListener("scroll", scrollHandler);
  }, [showShadow]);
  return (
    <header className={showShadow ? "header scr-header" : "header"} id="header">
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
