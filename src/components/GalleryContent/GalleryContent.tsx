import { SyntheticEvent, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TextPanel from "../TextPanel/TextPanel";
import { GalleryContentProps } from "./GalleryContentProps.type.";
import allCakesData from "../../data/allGalleryCakesData";
import StickyDiv from "../StickyDiv/StickyDiv";
import "../MainNav/mainnav.css";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const GalleryContent = (props: GalleryContentProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { width } = useWindowDimensions();

  const [weddingGalleryContent, setWeddingGalleryContent] = useState<
    Record<string, string | number>[]
  >([]);
  const [customGalleryContent, setCustomGalleryContent] = useState<
    Record<string, string | number>[]
  >([]);

  const imgRefs = useRef<Array<HTMLImageElement | null>>([]);

  const cakeGalleryContent = useMemo(() => {
    if (weddingGalleryContent && customGalleryContent) {
      return location.pathname.includes("/custom-cakes")
        ? customGalleryContent
        : weddingGalleryContent;
    }
  }, [weddingGalleryContent, customGalleryContent, location.pathname]);

  const bcrumbData = [
    { url: "/", linkText: "Home" },
    location.pathname.includes("wedding-cakes")
      ? { url: "", linkText: "Wedding cakes" }
      : { url: "", linkText: "Custom cakes" },
    { url: "/serving-sizes/one-tier", linkText: "Serving Size" }
  ];
  const [txtPanelData, setTxtPanelData] = useState({ h2: "", h1: "", p: "" });

  const allCakesOnPage = cakeGalleryContent;

  const [mainImgLoaded, setMainImgLoaded] = useState<boolean>(false);

  const [showMain, setShowMain] = useState<boolean>(false);

  const handleThumbnailClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLImageElement;
    if (target.className.includes("gallery-thumbnails-container")) return;

    // const clickedIndex = +target.id.replace(/^[^_]*_/, "");
    setShowMain(!showMain);

    const isWedding = location.pathname.includes("/wedding-cakes");
    const basePath = isWedding ? "wedding-cakes" : "custom-cakes";
    navigate(`/${basePath}/${target.classList.value}`);
  };

  const [firstItemInCat, setFirstItemInCat] = useState<Record<string, any>[]>(
    []
  );

  useEffect(() => {
    firstItemInCat.length <
      ["birthday", "characters", "fashion", "food"].length &&
      ["birthday", "characters", "fashion", "food"].forEach((item) => {
        if (allCakesOnPage!.find((cake) => cake.category === item)) {
          setFirstItemInCat((prevState: any) => [
            ...prevState,
            allCakesOnPage!.find((cake) => cake.category === item)
          ]);
        }
      });
  }, [allCakesOnPage]);

  useEffect(() => {
    firstItemInCat.map((item) => {
      if (location.pathname.includes(item.category)) {
        navigate(`${location.pathname.replace("/0", "")}/${item.id}`);
      }
    });

    width <= 895 &&
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Use "auto" for instant jump
      });
  }, [location.pathname]);

  useEffect(() => {
    location.pathname.includes("custom-cakes")
      ? setTxtPanelData({
          h2: "Custom",
          h1: "cakes",
          p: ""
        })
      : setTxtPanelData({
          h2: "Wedding",
          h1: "cakes",
          p: ""
        });
  }, [location.pathname]);

  useEffect(() => {
    const imageMap = Object.fromEntries(
      Object.entries(
        import.meta.glob("../../img/galleryImages/*.{png,jpg,jpeg,PNG,JPEG}", {
          eager: true,
          as: "url"
        })
      ).map(([path, url]) => [path.split("/").pop(), url])
    );

    const enriched = allCakesData.map((cakeObj) => ({
      ...cakeObj,
      thumbnail: imageMap[cakeObj.thumbnailTitle],
      img: imageMap[cakeObj.imgTitle],
      mobileImg: imageMap[cakeObj.mobileImgTitle!],
      lazyImg: imageMap[cakeObj.lazyImgTitle]
    }));

    const wedding = enriched.filter((cake) => cake.category === "wedding");
    const custom = enriched.filter((cake) =>
      ["birthday", "characters", "fashion", "food"].includes(cake.category)
    );

    setWeddingGalleryContent(wedding);
    setCustomGalleryContent(custom);
  }, []);

  const menus = {
    wedding: ["wedding"],
    custom: ["birthday", "characters", "fashion", "food"]
  };

  const getMenu = () => {
    if (location.pathname.includes("custom-cakes")) {
      return menus.custom;
    } else {
      return menus.wedding;
    }
  };
  const [mainImgClass, setMainImgClass] = useState<string>("");

  useEffect(() => {
    showMain ? setMainImgClass("showMain") : setMainImgClass("");
  }, [showMain]);

  return (
    <>
      {showMain && (
        <div
          className="main-overlay"
          onClick={() => setShowMain(!showMain)}
        ></div>
      )}
      <StickyDiv
        bcrumbData={bcrumbData}
        txtPanelData={txtPanelData}
        pageNavMenu={getMenu()}
        catRefs={imgRefs}
      />

      <div
        className="gallery-thumbnails-container"
        onClick={(e) => {
          handleThumbnailClick(e);
        }}
      >
        {allCakesOnPage &&
          allCakesOnPage.length &&
          allCakesOnPage &&
          allCakesOnPage.map((item, i) => {
            return (
              <>
                <img
                  onClick={() =>
                    props.activeThumbnail !== i &&
                    mainImgLoaded &&
                    setMainImgLoaded(!mainImgLoaded)
                  }
                  src={`${item.thumbnail}`}
                  key={i}
                  id={`${item.thumbnailTitle}_${i}`}
                  alt=""
                  className={
                    props.activeThumbnail === i
                      ? `active ${item.category}/${i}`
                      : `${item.category}/${i}`
                  }
                  ref={(el) => {
                    imgRefs.current[i] = el;
                  }}
                />
              </>
            );
          })}
      </div>
      {showMain && (
        <>
          {/* <div
            className="popClsBtn"
            onClick={() => {
              setShowMain(false);
            }}
          >
            &times;
          </div> */}
        </>
      )}

      {/* CREATE MAIN IMAGE COMPONENT */}
      {allCakesOnPage && allCakesOnPage.length && (
        <div className={`gallery-mainImg-container ${mainImgClass}`}>
          <div className="sticky-div gallery">
            {showMain && (
              <>
                <div
                  className="popRtBtn"
                  onClick={() => {
                    const basePath = location.pathname.match(/^(.*)\//)![1];
                    const nextImg = +location.pathname.split("/").pop()! + 1;
                    nextImg < allCakesOnPage!.length
                      ? navigate(`${basePath}/${nextImg}`)
                      : navigate(`${basePath}/0`);
                  }}
                >
                  &rsaquo;
                </div>
                <div
                  className="popLtBtn"
                  onClick={() => {
                    const basePath = location.pathname.match(/^(.*)\//)![1];
                    const nextImg = +location.pathname.split("/").pop()! - 1;
                    nextImg >= 0
                      ? navigate(`${basePath}/${nextImg}`)
                      : navigate(`${basePath}/${allCakesOnPage!.length - 1}`);
                  }}
                >
                  &lsaquo;
                </div>{" "}
              </>
            )}
            <div
              className={mainImgLoaded ? "" : "lazy-img"}
              style={{
                backgroundImage: `url(${
                  allCakesOnPage &&
                  allCakesOnPage[props.activeThumbnail!].lazyImg
                })`
              }}
            ></div>
            {
              <img
                onLoad={() => {
                  setMainImgLoaded(true);
                }}
                src={`${
                  allCakesOnPage && allCakesOnPage[props.activeThumbnail!].img
                }`}
                alt=""
              />
            }
            {allCakesOnPage && allCakesOnPage.length && (
              <TextPanel
                h2={`${
                  allCakesOnPage &&
                  allCakesOnPage[props.activeThumbnail!].subhead
                }`}
                h1={`${
                  allCakesOnPage &&
                  allCakesOnPage[props.activeThumbnail!].heading
                }`}
                p={`${allCakesOnPage && allCakesOnPage[props.activeThumbnail!].p}`}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryContent;
