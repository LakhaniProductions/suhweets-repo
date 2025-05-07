import { useContext, useEffect, useState } from "react";
import { SignatureProps } from "./SignatureProps.type";
import PageButtons from "../PageButtons/PageButtons";
import MenuContext from "../../context/HamburgerMenuContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Header from "../Header/Header";
import PageNav from "../PageNav/PageNav";
import "./signature.css";
import SignatureContent from "../SignatureContent/SignatureContent";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
// import Loader from "../Loader/Loader";

const Signature = (props: SignatureProps) => {
  const { showLoadingFlavorGif } = useContext(GalleryImgLoadContext);
  const menu = [`6"`, `8"`, `10"`];
  const [html, setHTML] = useState("6");
  const [secClass, setSecClass] = useState("");

  useEffect(() => {
    props.setMenuFade({
      BGClass: "",
      rightClass: "",
      leftClass: ""
    });
  }, []);

  useEffect(() => {}, [showLoadingFlavorGif]);

  return (
    <section className="container">
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
      <div className={`signature-content ${secClass}`}>
        <SignatureContent html={html} />
      </div>
      <PageNav menu={menu} setHTML={setHTML} />
      <PageButtons />
    </section>
  );
};

export default Signature;
