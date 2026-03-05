import { Ref, useContext, useEffect, useRef } from "react";
import { SignatureProps } from "./SignatureProps.type";
import MenuContext from "../../context/HamburgerMenuContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Header from "../Header/Header";

import "../SignatureCakes/signature.css";
import SignatureContent from "../SignatureContent/SignatureContent";
import Footer from "../Footer/Footer";
import StickyDiv from "../StickyDiv/StickyDiv";
import { GlobalLoadingContext } from "../../context/GlobalLoadingContext";

const Cupcakes = (props: SignatureProps) => {
  const globalContext = useContext(GlobalLoadingContext);
  if (!globalContext) {
    return;
  }

  const cupcakeRef: Ref<HTMLElement | any> = globalContext.containerRef;
  const bcrumbData = [
    { url: "/", linkText: "Home" },
    { url: "", linkText: "Cupcakes" }
  ];

  const txtPanelData = {
    p: "An assortment of delectable flavors to choose from ",
    h1: "cupcakes",
    h2: "our"
  };

  const menu = ["Available daily", "Pre-order"];
  const categoriesRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    props.setMenuFade({
      BGClass: ""
    });
  }, []);

  return (
    <section className="home-container" ref={cupcakeRef}>
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass
        }}
      >
        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu setMenuFade={props.setMenuFade} />
      </MenuContext.Provider>
      <div className={`signature-content`}>
        <StickyDiv
          bcrumbData={bcrumbData}
          txtPanelData={txtPanelData}
          pageNavMenu={menu}
          catRefs={categoriesRefs}
        />
        <SignatureContent catRefs={categoriesRefs} />
      </div>
      <Footer />
    </section>
  );
};

export default Cupcakes;
