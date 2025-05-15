import { useContext, useEffect } from "react";
import { GalleryProps } from "./Gallery.types";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import GalleryNav from "../GalleryNav/GalleryNav";
import GalleryContent from "../GalleryContent/GalleryContent";
import MenuContext from "../../context/HamburgerMenuContext";
import Header from "../Header/Header";
import PageButtons from "../PageButtons/PageButtons";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./gallery.css";
import Loader from "../Loader/Loader";
import { useNavigate, useParams } from "react-router-dom";

const Gallery = (props: GalleryProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { showLoadingGif } = context;
  const { selectedMenuItem, activeThumbnail } = useParams();

  const galleryOpt =
    selectedMenuItem ??
    (location.pathname.includes("wedding-cakes") ? "wedding" : "all");
  const activeIndex = activeThumbnail ? parseInt(activeThumbnail) : 0;
  const navigate = useNavigate();

  useEffect(() => {
    const isWedding = location.pathname.includes("/wedding-cakes");
    const basePath = isWedding ? "wedding-cakes" : "custom-cakes";
    const currentPath = `/${basePath}/${galleryOpt}/${activeIndex}`;
    if (location.pathname !== currentPath) {
      navigate(currentPath, { replace: true });
    }
  }, [activeIndex, galleryOpt]);

  return (
    <section className="container">
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass,
          rightClass: props.menuFade.rightClass,
          leftClass: props.menuFade.leftClass
        }}
      >
        {showLoadingGif && <Loader />}
        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu />
      </MenuContext.Provider>

      <div className={`gallery-content`}>
        <GalleryContent
          customGalleryOpt={galleryOpt}
          activeThumbnail={activeIndex}
        />
      </div>

      <GalleryNav />
      <PageButtons />
    </section>
  );
};

export default Gallery;
