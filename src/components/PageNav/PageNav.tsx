import { SyntheticEvent, useCallback, useContext, useState } from "react";
import { PageNavProps } from "./PageNavProps.type";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useLocation } from "react-router-dom";

const PageNav = (props: PageNavProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { width } = useWindowDimensions();
  const location = useLocation();
  const { setShowLoadingFlavorGif, setShowLoadingGif, setAllGalleryImagesArr } =
    context;
  const [active, setActive] = useState("0");

  const handleClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    const clicked = target.closest(".navigation-item");
    if (!clicked) return;
    if (props.menu[+active] !== target.innerHTML) {
      setAllGalleryImagesArr([]);
      setShowLoadingGif(true);
    }
    setActive(target.id);

    props.setHTML(target.innerHTML.replace(" ", "-"));
    target.innerHTML !== "fillings" && setShowLoadingFlavorGif(true);
  };

  const getFilterItemsClassName = useCallback(
    (item: string, i: number) => {
      const editedName = item.includes(" ")
        ? item.replace(" ", "-").split("-").slice(1).join("-")
        : item;

      if (location.pathname.includes("/serving")) {
        if (i === +active) {
          return `navigation-item ${editedName} active-menu-item`;
        } else {
          if (width <= 1019 && width > 500) {
            if (i > 1 && +active === 0) {
              return `d-none`;
            } else if (+active === props.menu.length - 1 && i <= 2) {
              return `d-none`;
            } else if (+active !== 0 && +active !== props.menu.length) {
              if (+active + 1 === i || +active - 1 === i) {
                return `navigation-item ${editedName}`;
              } else {
                return `d-none`;
              }
            }
          } else if (width <= 500) {
            if (i !== +active) {
              return `d-none`;
            }
          }
          return `navigation-item ${editedName}`;
        }
      } else {
        if (location.pathname.includes("/signature-cakes")) {
          if (i === +active) {
            return `navigation-item active-menu-item`;
          }
          if (width <= 464) {
            if (+active === 0) {
              if (i === +active) {
                return `navigation-item ${editedName} active-menu-item`;
              }
              if (i === +active + 1) {
                return `navigation-item ${editedName}`;
              } else {
                return "d-none";
              }
            } else if (+active === props.menu.length - 1) {
              if (i === +active) {
                return `navigation-item ${editedName} active-menu-item`;
              }
              if (i === +active - 1) {
                return `navigation-item ${editedName}`;
              } else {
                return "d-none";
              }
            } else {
              if (i === +active + 1 || i === +active - 1) {
                return `navigation-item ${editedName}`;
              } else {
                return "d-none";
              }
            }
          }
          return `navigation-item`;
        } else {
          if (width <= 1720 && width > 1024) {
            if (+active === 0) {
              if (i === +active) {
                return `navigation-item ${editedName} active-menu-item`;
              }
              if (i === +active + 1) {
                return `navigation-item ${editedName}`;
              } else {
                return "d-none";
              }
            } else if (+active === props.menu.length - 1) {
              if (i === +active) {
                return `navigation-item ${editedName} active-menu-item`;
              }
              if (i === +active - 1) {
                return `navigation-item ${editedName}`;
              } else {
                return "d-none";
              }
            } else {
              if (i === +active + 1 || i === +active - 1) {
                return `navigation-item ${editedName}`;
              }
              return `navigation-item ${editedName} active-menu-item`;
            }
          } else if (width < 1024) {
            if (i !== +active) {
              return "d-none";
            } else {
              return `navigation-item ${editedName} active-menu-item`;
            }
          } else {
            if (i === +active) {
              return `navigation-item ${editedName} active-menu-item`;
            } else {
              return `navigation-item ${editedName}`;
            }
          }
        }
      }
    },
    [width, active, location]
  );

  return (
    <nav className="navigation" onClick={(e) => handleClick(e)}>
      {props.menu.map((item, i) => (
        <>
          {location.pathname.includes("/serving") &&
            i === +active - 1 &&
            +active <= props.menu.length - 1 &&
            width <= 500 && (
              <button
                onClick={() => {
                  setActive(`${+active - 1}`);
                  props.setHTML(`${+active}-tier`);
                }}
                className="less-btn"
              >
                <>&lt;</>
              </button>
            )}

          {location.pathname.includes("/flavors") &&
            +active > 0 &&
            i == +active - 1 &&
            width < 1025 && (
              <button
                onClick={() => {
                  setActive(`${+active - 1}`);
                  props.menu[+active - 1].includes(" ")
                    ? props.setHTML(props.menu[+active - 1].replace(" ", "-"))
                    : props.setHTML(props.menu[+active - 1]);
                }}
                className="less-btn"
              >
                <>&lt;</>
              </button>
            )}

          <button
            className={getFilterItemsClassName(item, i)}
            id={`${i}`}
            key={i}
          >
            {item}
          </button>

          {location.pathname.includes("/serving") &&
            i === +active + 1 &&
            +active >= 0 &&
            width <= 500 && (
              <button
                onClick={() => {
                  setActive(`${+active + 1}`);
                  props.setHTML(`${+active + 2}-tier`);
                }}
                className="greater-btn"
              >
                <>&gt;</>
              </button>
            )}

          {location.pathname.includes("/flavors") &&
            +active < props.menu.length - 1 &&
            i == +active + 1 &&
            width < 1025 && (
              <button
                onClick={() => {
                  setActive(`${+active + 1}`);
                  props.setHTML(props.menu[+active + 1]);
                  props.menu[+active + 1].includes(" ")
                    ? props.setHTML(props.menu[+active + 1].replace(" ", "-"))
                    : props.setHTML(props.menu[+active + 1]);
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

export default PageNav;
