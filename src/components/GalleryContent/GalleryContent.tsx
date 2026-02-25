import {
  SyntheticEvent,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import TextPanel from "../TextPanel/TextPanel";
import { GalleryContentProps } from "./GalleryContentProps.type.";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import allCakesData from "../../data/allGalleryCakesData";
import StickyDiv from "../StickyDiv/StickyDiv";
import "../MainNav/mainnav.css";

const GalleryContent = (props: GalleryContentProps) => {
  const navigate = useNavigate();
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { selectedMenuItem } = useParams();

  const { setShowLoadingGif, setAllGalleryImagesArr } = context;
  const location = useLocation();
  const [isGourmetPage, setIsGourmetPage] = useState<boolean>(false);
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
      : { url: "", linkText: "Custom cakes" }
  ];
  const [txtPanelData, setTxtPanelData] = useState({ h2: "", h1: "", p: "" });

  const allCakesOnPage = cakeGalleryContent;

  const [mainImgLoaded, setMainImgLoaded] = useState<boolean>(false);

  const handleThumbnailClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLImageElement;
    if (target.className.includes("gallery-thumbnails-container")) return;

    // const clickedIndex = +target.id.replace(/^[^_]*_/, "");

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
  }, [location.pathname]);

  const handleImageLoading = (e: SyntheticEvent) => {
    const target = e.target as HTMLImageElement;

    setAllGalleryImagesArr((prevState: string[]) => {
      const match = /[^/]*$/.exec(target.src);
      return match ? [...prevState, match[0]] : prevState;
    });
  };

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
    location.pathname.includes("gourmet-cakes")
      ? setIsGourmetPage(true)
      : setIsGourmetPage(false);
  }, [location]);

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

  const [thumbImgsLoaded, setThumbImgsLoaded] = useState<
    Array<string | number>
  >([]);

  useEffect(() => {
    const loadedImgs = imgRefs.current.filter((img) => img && img.complete);

    loadedImgs.forEach((img) =>
      setThumbImgsLoaded((prev) => {
        if (!prev.includes(img!.id.split("_")[0])) {
          return [...prev, img!.id.split("_")[0]]; //removes "_"and everything after
        }
        return prev;
      })
    );
  }, [allCakesOnPage]);

  useEffect(() => {
    const allThumbsLoaded =
      allCakesOnPage &&
      allCakesOnPage.every((cake) =>
        thumbImgsLoaded.includes(cake.thumbnailTitle)
      );

    if (allThumbsLoaded && mainImgLoaded) {
      setShowLoadingGif(false);
    } else {
      setShowLoadingGif(true);
    }
  }, [thumbImgsLoaded, allCakesOnPage, mainImgLoaded]);

  useEffect(() => {
    setThumbImgsLoaded([]);
  }, [selectedMenuItem]);

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

  return (
    <>
      <StickyDiv
        bcrumbData={bcrumbData}
        txtPanelData={txtPanelData}
        pageNavMenu={getMenu()}
        catRefs={imgRefs}
        // catRefs={customGalleryRefs}
      />

      <div
        className={
          !isGourmetPage
            ? "gallery-thumbnails-container one"
            : "gallery-thumbnails-container flex-grow"
        }
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
                  onLoad={(e) => {
                    handleImageLoading(e);
                  }}
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

      {/* CREATE MAIN IMAGE COMPONENT */}
      {!isGourmetPage && allCakesOnPage && allCakesOnPage.length && (
        <div className="gallery-mainImg-container">
          <div className="sticky-div gallery">
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
