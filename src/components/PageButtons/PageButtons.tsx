import { useLocation, useNavigate } from "react-router-dom";
import "../../css/icons.css";
import "../Gallery/gallery.css";
import { useContext, useEffect, useState } from "react";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const PageButtons = () => {
  const { setShowLoadingFlavorGif, setShowLoadingGif, setAllGalleryImagesArr } =
    useContext(GalleryImgLoadContext);

  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const location: Record<string, any> = useLocation();
  const [forwardRoute, setForwardRoute] = useState<string>("/serving-sizes");
  const [forwardRouteText, setForwardRouteText] =
    useState<string>("view serving sizes");
  const [backRoute, setBackRoute] = useState<string>("/");
  const [backRouteText, setBackRouteText] = useState<string>("back");
  const [previousRoute, setPreviousRoute] = useState<string>("");
  const [secondaryClassName, setSecondaryClassName] = useState("");

  useEffect(() => {
    setPreviousRoute(location.pathname);
    setAllGalleryImagesArr([]);

    if (
      location.pathname.includes("/wedding-cakes") ||
      location.pathname.includes("/custom-cakes")
    ) {
      setForwardRoute("/serving-sizes");
      setBackRoute("/");

      setSecondaryClassName("flavors");
    }

    if (location.pathname.includes("/serving-sizes")) {
      setForwardRoute("/flavors");
      setForwardRouteText("explore our flavors");
      setBackRoute(previousRoute);
      setBackRouteText("gallery");
      setSecondaryClassName("serving-page");
    }

    if (location.pathname.includes("/flavors")) {
      setForwardRoute("/contact-us");
      setForwardRouteText("request a quote");
      setBackRoute(previousRoute);
      setBackRouteText("servings");
      setSecondaryClassName("flavors");
    }

    if (location.pathname.includes("/signature")) {
      setForwardRoute("/signature-form");
      setForwardRouteText("place an order");
      setBackRoute("/");
      setBackRouteText("home");
      setSecondaryClassName("flavors");
    }

    if (location.pathname.includes("/cupcakes")) {
      setForwardRoute("/cupcake-form");
      setForwardRouteText("place an order");
      setBackRoute("/");
      setBackRouteText("home");
      setSecondaryClassName("flavors");
    }
  }, [location, previousRoute, forwardRoute]);

  return (
    <div className={`page-button-container ${secondaryClassName}`}>
      <button
        className="gallery-btn back"
        onClick={() => {
          navigate(-1);
          // setShowLoadingGif(true);
          setShowLoadingFlavorGif(true);
        }}
      >
        <span className="icon-circle-left"></span>
        {location.pathname.includes("/serving-sizes")
          ? width > 560 && backRouteText
          : width > 1180 && backRouteText}
      </button>

      <button
        onClick={() => {
          navigate(forwardRoute);
          // setShowLoadingGif(true);
          setShowLoadingFlavorGif(true);
        }}
        className="gallery-btn forward"
      >
        {location.pathname.includes("/serving-sizes")
          ? width >= 848 && forwardRouteText
          : width >= 681 && forwardRouteText}

        <span className="icon-circle-right"></span>
      </button>
    </div>
  );
};

export default PageButtons;
