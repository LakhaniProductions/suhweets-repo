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
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Flavors = (props: FlavorsProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { showLoadingFlavorGif } = context;
  const { selectedMenuItem } = useParams();

  const menu = ["baker's favorites", "cake flavors", "fillings"];
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
    if (selectedMenuItem === "cake-flavors") {
      setSecClass("cake-flav");
    } else if (selectedMenuItem === "fillings") {
      setSecClass("fillings");
    } else {
      setSecClass("fav");
    }
  }, [selectedMenuItem]);
  return (
    <section className="container">
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass,
          rightClass: props.menuFade.rightClass,
          leftClass: props.menuFade.leftClass
        }}
      >
        {showLoadingFlavorGif && <Loader />}

        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu />
      </MenuContext.Provider>
      <div
        className={`flavors-content ${
          showLoadingFlavorGif ? "no-opacity" : ""
        } ${secClass}`}

        // className={`flavors-content ${secClass}`}
      >
        <FlavorsContent />
      </div>
      <PageNav menu={menu} />
      <PageButtons />
    </section>
  );
};

export default Flavors;
