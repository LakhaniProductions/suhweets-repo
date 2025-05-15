import { useContext, useEffect, useState } from "react";
import MenuContext from "../../context/HamburgerMenuContext";
import Header from "../Header/Header";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import TextPanel from "../TextPanel/TextPanel";
import PageButtons from "../PageButtons/PageButtons";
import { ServingsProps } from "./ServingsProps.types";
import "./servings.css";
import ServingCards from "../ServingCards/ServingCards";
import PageNav from "../PageNav/PageNav";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import Loader from "../Loader/Loader";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Servings = (props: ServingsProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { width } = useWindowDimensions();
  const { showLoadingGif } = context;

  const menu = ["1 tier", "2 tier", "3 tier", "4 tier", "5 tier"];
  const [html, setHTML] = useState("1-tier");
  console.log(html);

  useEffect(() => {
    props.setMenuFade({
      BGClass: "",
      rightClass: "",
      leftClass: ""
    });
  }, []);

  return (
    <section className="container">
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass,
          rightClass: props.menuFade.rightClass,
          leftClass: props.menuFade.leftClass
        }}
      >
        {showLoadingGif && <Loader />}

        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu />
      </MenuContext.Provider>
      <div className={`servings-content ${showLoadingGif ? "no-opacity" : ""}`}>
        <TextPanel
          h2={"serving"}
          h1={"sizes"}
          p={
            "Our custom cakes come in many different sizes. We've complied a visual guide of all the tier combinations we offer to make things a bit easier."
          }
          widthClass={"servings"}
          layout={width <= 2160 && true}
        />

        <ServingCards />
      </div>

      <PageNav menu={menu} setHTML={setHTML} />
      <PageButtons />
    </section>
  );
};

export default Servings;
