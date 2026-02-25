import { SyntheticEvent, useContext, useEffect, useRef } from "react";
import MenuContext from "../../context/HamburgerMenuContext";
import { Link } from "react-router-dom";
import { HamburgerMenuProps } from "./HamburgerMenuProps.types";
import "./hamburgermenu.css";

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const menuContext = useContext(MenuContext);

  const hamMenuRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    target.classList.value.includes("hamburger") &&
    menuContext.BGClass !== "fade-in"
      ? props.setMenuFade({
          BGClass: "fade-in"
        })
      : props.setMenuFade({
          BGClass: ""
        });
  };
  useEffect(() => {
    const listener = (e: SyntheticEvent) => {
      const target = e.target as HTMLDivElement;
      // Do nothing if clicking ref's element or descendent elements
      if (!hamMenuRef.current || hamMenuRef.current.contains(target)) {
        return;
      }
      handleOutsideClick(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [hamMenuRef, menuContext]);

  return (
    <div
      className={`hamburger-menu-container ${menuContext.BGClass}`}
      ref={hamMenuRef}
    >
      <ul className="secondary-nav">
        <div className="link-box">
          <Link to="/wedding-cakes/wedding/0">
            <li className="nav-heading">Wedding</li>
          </Link>
          <div className="int-links-box">
            <Link to="/serving-sizes/one-tier">
              <li className="int-link">Servings sizes</li>
            </Link>
            <Link to="/flavors/classic-flavors">
              <li className="int-link">Cake flavors</li>
            </Link>
            <Link to="/quote-request">
              <li className="int-link">Request a quote</li>
            </Link>
          </div>
        </div>
        <div className="link-box">
          <Link to="/custom-cakes/birthday/0">
            <li className="nav-heading">Custom</li>
          </Link>
          <div className="int-links-box">
            <Link to="/serving-sizes/one-tier">
              <li className="int-link">Servings sizes</li>
            </Link>
            <Link to="/flavors/classic-flavors">
              <li className="int-link">Cake flavors</li>
            </Link>
            <Link to="/quote-request">
              <li className="int-link">Request a quote</li>
            </Link>
          </div>
        </div>
        <div className="link-box">
          <Link to="/signature-cakes/classic-flavors/6-inch">
            <li className="nav-heading">Signature</li>
          </Link>
          <div className="int-links-box">
            <Link to="/signature-cakes/classic-flavors/6-inch">
              <li className="int-link">6" Cakes</li>
            </Link>
            <Link to="/signature-cakes/classic-flavors/8-inch">
              <li className="int-link">8" Cakes</li>
            </Link>
            <Link to="/signature-cakes/classic-flavors/10-inch">
              <li className="int-link">10" Cakes</li>
            </Link>

            <Link to="/signature-form">
              <li className="int-link">Order form</li>
            </Link>
          </div>
        </div>
        <div className="link-box">
          <Link to="/cupcakes">
            <li className="nav-heading">Cupcakes</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};
export default HamburgerMenu;
