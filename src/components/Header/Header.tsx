import { Link } from "react-router-dom";
import fullLogo from "../../img/suhweetslogotagline.png";
import logoMark from "../../img/suhweets_logomark.png";
import wordMark from "../../img/suhweets_wordmark.png";
import { HeaderProps } from "./Header.types";
import "./header.css";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useEffect, useState } from "react";

const Header = (props: HeaderProps) => {
  const { width, height } = useWindowDimensions();
  const [logoSRC, setLogoSRC] = useState(fullLogo);
  const [logoClass, setLogoClass] = useState("logo");

  useEffect(() => {
    if (width <= 848 && width > 600) {
      setLogoSRC(wordMark);
      setLogoClass("logo wordmark");
    } else if (width <= 600) {
      setLogoSRC(logoMark);
      setLogoClass("logo logomark");
    } else {
      setLogoClass("logo");
      setLogoSRC(fullLogo);
    }
  }, [width, height]);

  return (
    <header className="header">
      <Link to="/" tabIndex={1}>
        <img src={`${logoSRC}`} alt="" className={`${logoClass}`} />
      </Link>
      <HamburgerMenuIcon setMenuFade={props.setMenuFade} />
    </header>
  );
};

export default Header;
