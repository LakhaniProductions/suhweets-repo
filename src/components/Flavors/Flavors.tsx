import { useContext, useEffect, useState } from "react";
import { FlavorsProps } from "./FlavorsProps.type";
import PageButtons from "../PageButtons/PageButtons";
import MenuContext from "../../context/HamburgerMenuContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Header from "../Header/Header";
import PageNav from "../PageNav/PageNav";
import "./flavors.css";
import FlavorsContent from "../FlavorsContent/FlavorContent";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";

const Flavors = (props: FlavorsProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { showLoadingFlavorGif } = context;
  const menu = ["baker's favorites", "cake flavors", "fillings"];
  const [html, setHTML] = useState("baker's-favorites");
  const [secClass, setSecClass] = useState("");

  useEffect(() => {
    props.setMenuFade({
      BGClass: "",
      rightClass: "",
      leftClass: ""
    });
  }, []);

  useEffect(() => {}, [showLoadingFlavorGif]);
  useEffect(() => {
    if (html === "cake-flavors") {
      setSecClass("cake-flav");
    } else if (html === "fillings") {
      setSecClass("fillings");
    } else {
      setSecClass("fav");
    }
  }, [html]);
  return (
    <section className="container">
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass,
          rightClass: props.menuFade.rightClass,
          leftClass: props.menuFade.leftClass
        }}
      >
        {/* {showLoadingFlavorGif && <Loader />} */}

        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu />
      </MenuContext.Provider>
      <div
        // className={`flavors-content ${
        //   showLoadingFlavorGif ? "no-opacity" : ""
        // } ${secClass}`}

        className={`flavors-content ${secClass}`}
      >
        <FlavorsContent html={html} />
      </div>
      <PageNav menu={menu} setHTML={setHTML} />
      <PageButtons />
    </section>
  );
};

export default Flavors;
