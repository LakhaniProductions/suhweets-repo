import { useContext } from "react";
import MenuContext from "../../context/HamburgerMenuContext";
import { Link } from "react-router-dom";
import { HamburgerMenuProps } from "./HamburgerMenuProps.types";
import "./hamburgermenu.css";

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const menuContext = useContext(MenuContext);

  return (
    <div className={`hamburger-menu-container ${menuContext.BGClass}`}>
      <ul className="secondary-nav">
        <div className="link-box">
          <Link
            to="/wedding-cakes/wedding/0"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li className="nav-heading">Wedding</li>
          </Link>
          <div className="int-links-box">
            <Link
              to="/wedding-cakes/wedding/0"
              onClick={() => {
                props.setMenuFade!({
                  BGClass: "",
                  rightClass: "",
                  leftClass: ""
                });
              }}
            >
              <li className="int-link">Servings sizes</li>
            </Link>
            <Link
              to="/wedding-cakes/wedding/0"
              onClick={() => {
                props.setMenuFade!({
                  BGClass: "",
                  rightClass: "",
                  leftClass: ""
                });
              }}
            >
              <li className="int-link">Flavors and fillings</li>
            </Link>
            <Link
              to="/wedding-cakes/wedding/0"
              onClick={() => {
                props.setMenuFade!({
                  BGClass: "",
                  rightClass: "",
                  leftClass: ""
                });
              }}
            >
              <li className="int-link">Request a quote</li>
            </Link>
          </div>
        </div>
        <div className="link-box">
          <Link
            to="/custom-cakes/all/0"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li className="nav-heading">Custom</li>
          </Link>
          <div className="int-links-box">
            <Link
              to="/wedding-cakes/wedding/0"
              onClick={() => {
                props.setMenuFade!({
                  BGClass: "",
                  rightClass: "",
                  leftClass: ""
                });
              }}
            >
              <li className="int-link">Servings sizes</li>
            </Link>
            <Link
              to="/wedding-cakes/wedding/0"
              onClick={() => {
                props.setMenuFade!({
                  BGClass: "",
                  rightClass: "",
                  leftClass: ""
                });
              }}
            >
              <li className="int-link">Flavors and fillings</li>
            </Link>
            <Link
              to="/wedding-cakes/wedding/0"
              onClick={() => {
                props.setMenuFade!({
                  BGClass: "",
                  rightClass: "",
                  leftClass: ""
                });
              }}
            >
              <li className="int-link">Request a quote</li>
            </Link>
          </div>
        </div>
        <div className="link-box">
          <Link
            to="/signature-cakes/6-inch"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li className="nav-heading">Signature</li>
          </Link>
        </div>
        <div className="link-box">
          <Link
            to="/cupcakes"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li className="nav-heading">Cupcakes</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};
export default HamburgerMenu;
