import { Ref, useContext, useEffect, useRef } from "react";
import MenuContext from "../../context/HamburgerMenuContext";
import Header from "../Header/Header";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { ServingsProps } from "./ServingsProps.types";
import "./servings.css";
import ServingCards from "../ServingCards/ServingCards";

import Footer from "../Footer/Footer";
import StickyDiv from "../StickyDiv/StickyDiv";
import { GlobalLoadingContext } from "../../context/GlobalLoadingContext";

const Servings = (props: ServingsProps) => {
  const globalContext = useContext(GlobalLoadingContext);
  if (!globalContext) {
    return;
  }

  const servRef: Ref<HTMLElement | any> = globalContext.containerRef;
  const menu = ["one tier", "two tier", "three tier", "four tier", "five tier"];
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
    <section className="home-container" ref={servRef}>
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass
        }}
      >
        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu setMenuFade={props.setMenuFade} />
      </MenuContext.Provider>

      <div className={"servings-content"}>
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
