import { useContext, useEffect, useRef } from "react";
import { SignatureProps } from "./SignatureProps.type";

import MenuContext from "../../context/HamburgerMenuContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Header from "../Header/Header";
import "./signature.css";
import SignatureContent from "../SignatureContent/SignatureContent";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import Footer from "../Footer/Footer";
import StickyDiv from "../StickyDiv/StickyDiv";

const Signature = (props: SignatureProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { showLoadingFlavorGif } = context;
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
      BGClass: "",
      rightClass: "",
      leftClass: ""
    });
  }, []);

  useEffect(() => {}, [showLoadingFlavorGif]);

  return (
    <section className="home-container">
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
