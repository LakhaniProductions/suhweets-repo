import { Ref, useContext, useEffect, useRef } from "react";
import { FlavorsProps } from "./FlavorsProps.type";
import MenuContext from "../../context/HamburgerMenuContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Header from "../Header/Header";
import "./flavors.css";
import FlavorsContent from "../FlavorsContent/FlavorContent";

import Footer from "../Footer/Footer";
import StickyDiv from "../StickyDiv/StickyDiv";
import { GlobalLoadingContext } from "../../context/GlobalLoadingContext";

const Flavors = (props: FlavorsProps) => {
  const globalContext = useContext(GlobalLoadingContext);
  if (!globalContext) {
    return;
  }

  const flavRef: Ref<HTMLElement | any> = globalContext.containerRef;
  const menu = ["classic flavors", "specialty flavors"];

  const bcrumbData = [
    { url: "/custom-cakes/birthday/0", linkText: "Custom cake gallery" },
    { url: "/serving-sizes/one-tier", linkText: "Serving sizes" },
    { url: "", linkText: "Cake flavors" }
  ];

  const txtPanelData = {
    h2: "cake",
    h1: "flavors",
    p: "A specially crafted menu of our favorite flavor combinations."
  };

  const categoriesRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    props.setMenuFade({
      BGClass: ""
    });
  }, []);

  return (
    <section className="home-container" ref={flavRef}>
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass
        }}
      >
        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu setMenuFade={props.setMenuFade} />
      </MenuContext.Provider>
      <div className={`flavors-content `}>
        <StickyDiv
          bcrumbData={bcrumbData}
          txtPanelData={txtPanelData}
          pageNavMenu={menu}
          catRefs={categoriesRefs}
        />
        <FlavorsContent catRefs={categoriesRefs} />
      </div>
      <Footer />
    </section>
  );
};

export default Flavors;
