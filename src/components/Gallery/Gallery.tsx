import { Ref, useContext, useEffect } from "react";
import { GalleryProps } from "./Gallery.types";

import GalleryContent from "../GalleryContent/GalleryContent";
import MenuContext from "../../context/HamburgerMenuContext";
import Header from "../Header/Header";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./gallery.css";

import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { GlobalLoadingContext } from "../../context/GlobalLoadingContext";

const Gallery = (props: GalleryProps) => {
  const { selectedMenuItem, activeThumbnail } = useParams();

  const galleryOpt =
    selectedMenuItem ??
    (location.pathname.includes("wedding-cakes") ? "wedding" : "birthday");
  const activeIndex = activeThumbnail ? parseInt(activeThumbnail) : 0;
  const navigate = useNavigate();

  const globalContext = useContext(GlobalLoadingContext);
  if (!globalContext) {
    return;
  }

  const galleryRef: Ref<HTMLElement | any> = globalContext.containerRef;

  useEffect(() => {
    const isWedding = location.pathname.includes("/wedding-cakes");
    const basePath = isWedding ? "wedding-cakes" : "custom-cakes";
    const currentPath = `/${basePath}/${galleryOpt}/${activeIndex}`;
    if (location.pathname !== currentPath) {
      navigate(currentPath, { replace: true });
    }
  }, [activeIndex, galleryOpt]);

  useEffect(() => {
    props.setMenuFade({
      BGClass: ""
    });
  }, [location.pathname]);

  return (
    <div className={"home-container"} ref={galleryRef}>
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass
        }}
      >
        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu setMenuFade={props.setMenuFade} />
      </MenuContext.Provider>

      <section className={`gallery-container`}>
        <div className="gallery-content">
          <GalleryContent
            customGalleryOpt={galleryOpt}
            activeThumbnail={activeIndex}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
