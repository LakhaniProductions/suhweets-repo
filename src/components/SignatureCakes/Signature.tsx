import { Ref, useContext, useEffect, useRef } from "react";
import { SignatureProps } from "./SignatureProps.type";

import MenuContext from "../../context/HamburgerMenuContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Header from "../Header/Header";
import "./signature.css";
import SignatureContent from "../SignatureContent/SignatureContent";
import Footer from "../Footer/Footer";
import StickyDiv from "../StickyDiv/StickyDiv";
import { useParams } from "react-router-dom";
import { GlobalLoadingContext } from "../../context/GlobalLoadingContext";

const Signature = (props: SignatureProps) => {
  const globalContext = useContext(GlobalLoadingContext);
  if (!globalContext) {
    return;
  }

  const sigRef: Ref<HTMLElement | any> = globalContext.containerRef;
  const { selectedMenuItem, size } = useParams();

  //sticky div content
  const bcrumbData = [
    { url: "/", linkText: "Home" },
    { url: "", linkText: "Signature cakes" }
  ];

  const txtPanelData = {
    h2: "Signature",
    h1: "cakes",
    p: "write some cool description here. For now this stays"
  };

  const menu = [`classic flavors`, `specialty flavors`];
  const secMenu = [`6"`, `8"`, `10"`];
  const categoriesRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    props.setMenuFade({
      BGClass: ""
    });
  }, [location.pathname, selectedMenuItem, size]);

  return (
    <section className="home-container" ref={sigRef}>
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
          showSecMenu={true}
          secMenu={secMenu}
        />
        <SignatureContent catRefs={categoriesRefs} />
      </div>
      <Footer />
    </section>
  );
};

export default Signature;
