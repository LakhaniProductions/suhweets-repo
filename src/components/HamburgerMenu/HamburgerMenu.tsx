import { useContext } from "react";
import MenuContext from "../../context/HamburgerMenuContext";
import { Link } from "react-router-dom";
import { HamburgerMenuProps } from "./HamburgerMenuProps.types";
import "./hamburgermenu.css";

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const menuContext = useContext(MenuContext);

  return (
    <div className={`hamburger-menu-container ${menuContext.BGClass}`}>
      <div className="test-bg">&nbsp;</div>

      <div className={`right-menu-container ${menuContext.rightClass}`}>
        <ul className="secondary-nav">
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
            <li>wedding</li>
          </Link>
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
            <li>custom</li>
          </Link>
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
            <li>signature</li>
          </Link>
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
            <li>cupcakes</li>
          </Link>
          {/* <Link
            to="/serving-sizes/1-tier"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li>serving sizes</li>
          </Link> */}
          {/* <Link
            to="/flavors/baker-favorites/berries-&-cream"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li>cake flavors</li>
          </Link> */}
          <Link
            to="/about-us"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li>about us</li>
          </Link>
          <Link
            to="/contact-us"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li>contact us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default HamburgerMenu;
