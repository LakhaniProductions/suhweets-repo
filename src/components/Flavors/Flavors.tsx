import { Ref, useContext, useEffect, useRef, useState } from "react";
import { FlavorsProps } from "./FlavorsProps.type";
import MenuContext from "../../context/HamburgerMenuContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Header from "../Header/Header";
import "./flavors.css";
import FlavorsContent from "../FlavorsContent/FlavorContent";

import Footer from "../Footer/Footer";
import StickyDiv from "../StickyDiv/StickyDiv";
import { GlobalLoadingContext } from "../../context/GlobalLoadingContext";
import { useLocation } from "react-router-dom";

const Flavors = (props: FlavorsProps) => {
  const globalContext = useContext(GlobalLoadingContext);
  if (!globalContext) {
    return;
  }
  const location = useLocation();
  const flavRef: Ref<HTMLElement | any> = globalContext.containerRef;
  const menu = ["classic flavors", "specialty flavors"];

  const [bcrumbData, setBcrumbData] = useState<
    { url: string; linkText: string }[]
  >([]);

  // const bcrumbData = [
  //   { url: "/custom-cakes/birthday/0", linkText: "Custom cake gallery" },
  //   { url: "/serving-sizes/one-tier", linkText: "Serving sizes" },
  //   { url: "", linkText: "Cake flavors" }
  // ];

  const txtPanelData = {
    h2: "cake",
    h1: "flavors",
    p: "A specially crafted menu of our favorite flavor combinations."
  };

  const categoriesRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [comingFromPg, setComingFromPg] = useState<string | null>("");

  useEffect(() => {
    props.setMenuFade({
      BGClass: ""
    });
  }, []);

  //get localstorage value
  useEffect(() => {
    if (!localStorage.getItem("clicked")) return;
    setComingFromPg(localStorage.getItem("clicked"));
  }, [location.key]);

  useEffect(() => {
    comingFromPg === "custom"
      ? setBcrumbData(() => [
          { url: "/custom-cakes/birthday/0", linkText: "Custom cake gallery" },
          { url: "/serving-sizes/one-tier", linkText: "Serving sizes" },
          { url: "", linkText: "Cake flavors" }
        ])
      : setBcrumbData(() => [
          { url: "/wedding-cakes/wedding/0", linkText: "Wedding Cake Gallery" },
          { url: "/serving-sizes/one-tier", linkText: "Serving sizes" },
          { url: "", linkText: "Cake flavors" }
        ]);
  }, [comingFromPg]);

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
