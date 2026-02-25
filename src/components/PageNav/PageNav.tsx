import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { PageNavProps } from "./PageNavProps.type";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";

import { useLocation, useNavigate, useParams } from "react-router-dom";

const PageNav = (props: PageNavProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }

  const location = useLocation();
  const { setAllGalleryImagesArr, setShowLoadingGif } = context;
  const { selectedMenuItem, size } = useParams();

  const [active, setActive] = useState("0");
  const navigate = useNavigate();

  const handleClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    const clicked = target.closest(".navigation-item");
    if (!clicked) return;

    const cleanParam = clicked.innerHTML.replace(
      /<\/?(div|span)>|&nbsp;/gi,
      ""
    );

    if (props.menu[+active] !== target.innerHTML) {
      setAllGalleryImagesArr([]);
      // setShowLoadingGif(true);
    }

    if (location.pathname.includes("serving-sizes")) {
      if (
        location.pathname
          .toUpperCase()
          .includes(cleanParam.replace(" ", "-").toUpperCase())
      ) {
        setShowLoadingGif(false);
        return;
      } else {
        navigate(
          `/serving-sizes/${cleanParam.replace(" ", "-").toLowerCase()}`
        );
      }
    } else if (
      location.pathname.includes("/flavors") &&
      !location.pathname.includes("signature-cakes")
    ) {
      navigate(`/flavors/${cleanParam.replace(" ", "-").toLowerCase()}`);
    } else if (location.pathname.includes("/custom-cakes")) {
      navigate(`/custom-cakes/${cleanParam.toLowerCase()}`);
    } else {
      navigate(
        `/signature-cakes/${target.innerHTML.replace(" ", "-").toLowerCase()}/${size?.replace(`"`, "-inch")}`
      );
    }
    props.handleRefs!(e);
    target.innerHTML !== "fillings" && setShowLoadingGif(true);
  };

  const handleAltClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    navigate(
      `/signature-cakes/${selectedMenuItem}/${target.innerHTML.replace(`"`, "-inch ")}`
    );
  };
  useEffect(() => {
    if (location.pathname.includes("serving-sizes")) {
      setActive(`${props.menu.indexOf(selectedMenuItem!.replace("-", " "))}`);
    } else if (location.pathname.includes("flavors")) {
      selectedMenuItem!.includes("baker") ? setActive("0") : setActive("1");
    } else {
      setActive(
        `${props.menu.indexOf(selectedMenuItem!.replace("-inch", '"'))}`
      );
    }
  }, [active, selectedMenuItem]);

  const getClassName = () => {
    if (location.pathname.includes("signature-cakes")) {
      if (props.secClass) {
        return `navigation ${props.secClass}`;
      } else {
        return `navigation sig-cake-nav`;
      }
    } else if (
      location.pathname.includes("serving-sizes") ||
      (location.pathname.includes("flavors") &&
        !location.pathname.includes("signature-cakes"))
    ) {
      return "navigation serv-nav";
    } else {
      return "navigation";
    }
  };
  return (
    <nav
      className={getClassName()}
      onClick={(e) => {
        props.useAltHC ? handleAltClick(e) : handleClick(e);
      }}
    >
      {props.menu.map((item, i) => (
        <>
          <button className={`navigation-item`} id={`${i}`} key={i}>
            <div>
              {String(item).charAt(0).toUpperCase() + String(item).slice(1)}
              {/* {item} */}
              {selectedMenuItem!.replace("-", " ") === item.toLowerCase() && (
                <span>&nbsp;</span>
              )}

              {/* if selected menu item's div is out of view */}

              {size?.replace("-inch", `"`) === item && <span>&nbsp;</span>}
            </div>
          </button>
        </>
      ))}
    </nav>
  );
};

export default PageNav;
