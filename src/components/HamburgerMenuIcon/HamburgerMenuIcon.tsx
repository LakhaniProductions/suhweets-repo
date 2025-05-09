import { useContext } from "react";
import MenuContext from "../../context/HamburgerMenuContext";
import { HamburgerProps } from "./HamburgerProps.types";

const HamburgerMenuIcon = (props: HamburgerProps) => {
  const menuContext = useContext(MenuContext);
  const toggleClick = () => {
    menuContext.BGClass !== "fade-in"
      ? props.setMenuFade({
          BGClass: "fade-in",
          rightClass: "slide-up",
          leftClass: "slide-down"
        })
      : props.setMenuFade({
          BGClass: "",
          rightClass: "",
          leftClass: ""
        });
  };

  return (
    <div
      className="hamburger-menu-icon-container"
      onKeyDown={(e) => {
        (e.key === "Enter" || e.key === " ") && toggleClick();
      }}
      tabIndex={1}
    >
      <input
        type="checkbox"
        className="hamburger-menu-checkbox"
        id="sec-nav-toggle"
      />
      <label
        htmlFor="sec-nav-toggle"
        className="hamburger-menu-btn-toggle"
        onClick={() => {
          toggleClick();
        }}
      >
        <span className="hamburger-menu-icon"></span>
      </label>
    </div>
  );
};
export default HamburgerMenuIcon;
