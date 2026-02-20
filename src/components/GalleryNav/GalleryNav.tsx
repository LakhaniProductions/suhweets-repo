import React, { useContext, useState } from "react";
// import { GalleryNavProps } from "./GalleryNav.types";
import "../MainNav/mainnav.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";

const GalleryNav = () => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { selectedMenuItem: menuFromUrl } = useParams();
  const { setShowLoadingGif } = context;
  const navigate = useNavigate();

  const menus = {
    wedding: ["wedding"],
    custom: ["all", "birthday", "characters", "fashion", "food"]
  }; // derive options from allcakesdata, category

  const galleryLocation = useLocation();
  const galleryMenu = galleryLocation.pathname.includes("/custom-cakes")
    ? menus.custom
    : menus.wedding;
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    menuFromUrl ?? galleryMenu[0]
  );

  const isWedding = location.pathname.includes("/wedding-cakes");
  const basePath = isWedding ? "wedding-cakes" : "custom-cakes";

  const setActiveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    const newPath = `/${basePath}/${target.id}/0`;

    setSelectedMenuItem(target.id);
    setShowLoadingGif(true);
    navigate(newPath);
  };

  return (
    <nav className="navigation">
      {galleryMenu.map((item, i) => (
        <>
          <button
            onClick={(e) => setActiveClick(e)}
            className={"navigation-item"}
            id={`${galleryMenu[i]}`}
            key={i}
          >
            <div>
              {String(item).charAt(0).toUpperCase() + String(item).slice(1)}
              {selectedMenuItem === item && <span>&nbsp;</span>}
            </div>
          </button>
        </>
      ))}
    </nav>
  );
};

export default GalleryNav;
