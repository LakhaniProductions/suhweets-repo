import React, { useCallback, useContext, useState } from "react";
// import { GalleryNavProps } from "./GalleryNav.types";
import "../MainNav/mainnav.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const GalleryNav = () => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { selectedMenuItem: menuFromUrl } = useParams();
  const { setShowLoadingGif } = context;

  const { width, height } = useWindowDimensions();
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
  const [activeIndex, setActiveIndex] = useState(
    galleryMenu.indexOf(selectedMenuItem)
  );

  const setActiveClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    i: number
  ) => {
    const target = e.currentTarget as HTMLButtonElement;
    const isWedding = location.pathname.includes("/wedding-cakes");
    const basePath = isWedding ? "wedding-cakes" : "custom-cakes";
    const newPath = `/${basePath}/${target.id}/0`;

    setSelectedMenuItem(target.id);
    setActiveIndex(i);
    setShowLoadingGif(true);
    navigate(newPath);
  };

  const getFilterItemsClassName = useCallback(
    (item: string, i: number) => {
      if (selectedMenuItem === item) {
        return `navigation-item active-menu-item`;
      } else {
        if (width <= 1080 && width > 980) {
          if (i <= 1 && activeIndex === 0) {
            return `navigation-item `;
          } else if (activeIndex > 0 && activeIndex < galleryMenu.length) {
            if (
              i === activeIndex - 1 ||
              i === activeIndex ||
              i === activeIndex + 1
            ) {
              return `navigation-item `;
            } else {
              return `d-none`;
            }
          } else if (activeIndex === galleryMenu.length - 1 && i >= 3) {
            return `navigation-item `;
          } else {
            return "d-none";
          }
        } else if (width <= 980 || height <= 560) {
          if (selectedMenuItem === item) {
            return `navigation-item active-menu-item`;
          } else {
            return "d-none";
          }
        } else {
          return `navigation-item `;
        }
      }
    },
    [activeIndex, width, selectedMenuItem, height]
  );

  return (
    <nav className="navigation">
      {galleryMenu.map((item, i) => (
        <>
          {i === activeIndex - 1 &&
            activeIndex <= galleryMenu.length - 1 &&
            (width <= 980 || height <= 560) && (
              <button
                onClick={() => {
                  setSelectedMenuItem(galleryMenu[activeIndex - 1]);
                  setActiveIndex(activeIndex - 1);
                }}
                className="less-btn"
              >
                <>&lt;</>
              </button>
            )}

          <button
            onClick={(e) => setActiveClick(e, i)}
            className={getFilterItemsClassName(item, i)}
            id={`${galleryMenu[i]}`}
            key={i}
          >
            {item}
          </button>

          {i === activeIndex + 1 &&
            activeIndex >= 0 &&
            (width <= 980 || height <= 560) && (
              <button
                onClick={() => {
                  setSelectedMenuItem(galleryMenu[activeIndex + 1]);
                  setActiveIndex(activeIndex + 1);
                }}
                className="greater-btn"
              >
                <>&gt;</>
              </button>
            )}
        </>
      ))}
    </nav>
  );
};

export default GalleryNav;
