import { useContext, useEffect } from "react";
import { SignatureProps } from "./SignatureProps.type";
import MenuContext from "../../context/HamburgerMenuContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Header from "../Header/Header";

import "../SignatureCakes/signature.css";
import SignatureContent from "../SignatureContent/SignatureContent";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import Footer from "../Footer/Footer";
import StickyDiv from "../StickyDiv/StickyDiv";

const Cupcakes = (props: SignatureProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }

  const bcrumbData = [
    { url: "/", linkText: "Home" },
    { url: "", linkText: "Cupcakes" }
  ];

  const txtPanelData = {
    p: "An assortment of delectable flavors to choose from ",
    h1: "cupcakes",
    h2: "our"
  };

  useEffect(() => {
    props.setMenuFade({
      BGClass: "",
      rightClass: "",
      leftClass: ""
    });
  }, []);

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
        <StickyDiv bcrumbData={bcrumbData} txtPanelData={txtPanelData} />
        <SignatureContent />
      </div>
      <Footer />
    </section>
  );
};

export default Cupcakes;
