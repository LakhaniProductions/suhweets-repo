import { useContext, useEffect, useRef } from "react";
import MenuContext from "../../context/HamburgerMenuContext";
import Header from "../Header/Header";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { ServingsProps } from "./ServingsProps.types";
import "./servings.css";
import ServingCards from "../ServingCards/ServingCards";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import StickyDiv from "../StickyDiv/StickyDiv";

const Servings = (props: ServingsProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { showLoadingGif } = context;

  const menu = ["One tier", "Two tier", "Three tier", "Four tier", "Five tier"];
  const bcrumbData = [
    { url: "/custom-cakes/birthday/0", linkText: "Custom Cakes Gallery" },
    { url: "", linkText: "Serving Sizes" }
  ];
  const txtPanelData = {
    h2: "Serving",
    h1: "sizes",
    p: "A visual guide of all the cake sizes we offer."
  };

  useEffect(() => {
    props.setMenuFade({
      BGClass: ""
    });
  }, []);

  const tiersRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="home-container">
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass
        }}
      >
        {showLoadingGif && <Loader />}

        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu setMenuFade={props.setMenuFade} />
      </MenuContext.Provider>
      <div className={`servings-content ${showLoadingGif ? "no-opacity" : ""}`}>
        <StickyDiv
          bcrumbData={bcrumbData}
          txtPanelData={txtPanelData}
          pageNavMenu={menu}
          catRefs={tiersRefs}
        />

        <ServingCards tiersRefs={tiersRefs} />
      </div>

      <Footer />
    </section>
  );
};

export default Servings;
