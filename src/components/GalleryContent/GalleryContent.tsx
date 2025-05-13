import {
  SyntheticEvent,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useLocation, useParams } from "react-router-dom";
import TextPanel from "../TextPanel/TextPanel";
import { GalleryContentProps } from "./GalleryContentProps.type.";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import allCakesData from "../../data/allGalleryCakesData";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const GalleryContent = (props: GalleryContentProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { selectedMenuItem } = useParams();
  const { width, height } = useWindowDimensions();
  const { setShowLoadingGif, setAllGalleryImagesArr } = context;
  const location = useLocation();
  const [isGourmetPage, setIsGourmetPage] = useState<boolean>(false);
  const [weddingGalleryContent, setWeddingGalleryContent] = useState<
    Record<string, string | number>[]
  >([]);
  const [customGalleryContent, setCustomGalleryContent] = useState<
    Record<string, string | number>[]
  >([]);
  const [twoColLayout, setTwoColLayout] = useState(false);
  const [threeColLayout, setThreeColLayout] = useState(true);

  const [oneColLayout, setOneColLayout] = useState(false);
  const [mobileLrg, setMobileLrg] = useState(false);
  const [horizontalMainImgGallery, setHorizontalMainImgGallery] =
    useState(false);

  const imgRefs = useRef<Array<HTMLImageElement | null>>([]);

  /* GET ALL IMAGES FROM IMG/GALLERYIMAGES */
  const galleryImages = Object.values(
    import.meta.glob("../../img/galleryImages/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url"
    })
  );

  const cakeGalleryContent = useMemo(() => {
    if (weddingGalleryContent && customGalleryContent) {
      return location.pathname.includes("/custom-cakes")
        ? customGalleryContent
        : weddingGalleryContent;
    }
  }, [weddingGalleryContent, customGalleryContent]);

  const [galleryOpt, setGalleryOpt] = useState<string>("");

  const allCustomCategoriesArr: Record<string, any>[] = [];

  (props.customGalleryOpt === "all" || props.customGalleryOpt === "wedding") &&
  cakeGalleryContent
    ? allCustomCategoriesArr.push(...cakeGalleryContent)
    : allCustomCategoriesArr.push(
        ...cakeGalleryContent!.filter((item) => item.category === galleryOpt)
      );

  const uniqueCategoryArr = allCustomCategoriesArr.filter(
    (
      value: Record<string, string>,
      index: number,
      self: Record<string, string>[]
    ) =>
      index ===
      self.findIndex(
        (t: Record<string, string>) =>
          t.p === value.p && t.subhead === value.subhead
      )
  );

  const allCakesOnPage = uniqueCategoryArr;

  const [mainImgLoaded, setMainImgLoaded] = useState<boolean>(false);

  const handleThumbnailClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLImageElement;
    if (target.className.includes("gallery-thumbnails-container")) {
      return;
    }
    props.setActiveThumbnail(+target.id.replace(/^[^_]*_/, "")); // remove "_" and get everything after
  };

  const handleImageLoading = (e: SyntheticEvent) => {
    const target = e.target as HTMLImageElement;

    setAllGalleryImagesArr((prevState: string[]) => {
      const match = /[^/]*$/.exec(target.src);
      return match ? [...prevState, match[0]] : prevState;
    });
  };

  useEffect(() => {
    location.pathname.includes("gourmet-cakes")
      ? setIsGourmetPage(true)
      : setIsGourmetPage(false);
  }, [location]);

  /* Importing Thumbnail Images */
  useEffect(() => {
    allCakesData.map((cakeObj, i) => {
      galleryImages.forEach((image) => {
        if (cakeObj.thumbnailTitle === image.split("/")[4]) {
          allCakesData[i] = { ...cakeObj, thumbnail: image };
        }
      });
    });
  }, []);

  /* Importing Main Images */
  useEffect(() => {
    allCakesData.map((cakeObj, i) => {
      galleryImages.forEach((image) => {
        if (cakeObj.imgTitle === image.split("/")[4]) {
          allCakesData[i] = { ...cakeObj, img: image };
        }

        if (cakeObj.mobileImgTitle === image.split("/")[4]) {
          allCakesData[i] = { ...allCakesData[i], mobileImg: image };
        }
      });
    });
  }, []);

  /* Importing Lazy Images */
  useEffect(() => {
    allCakesData.map((cakeObj, i) => {
      galleryImages.forEach((image) => {
        if (cakeObj.lazyImgTitle === image.split("/")[4]) {
          allCakesData[i] = { ...cakeObj, lazyImg: image };
        }
      });
    });
  }, []);

  /* Creating Gallery Content Arrays */
  useEffect(() => {
    allCakesData.map((cakeObj) =>
      Object.keys(cakeObj).filter((key) => {
        if (key === "category") {
          if (cakeObj[key] === "wedding") {
            setWeddingGalleryContent(
              (prevState: Record<string, string | number>[]) => [
                ...prevState,
                cakeObj
              ]
            );
          }
          if (
            cakeObj[key] === "birthday" ||
            cakeObj[key] === "characters" ||
            cakeObj[key] === "fashion" ||
            cakeObj[key] === "food"
          ) {
            setCustomGalleryContent(
              (prevState: Record<string, string | number>[]) => [
                ...prevState,
                cakeObj
              ]
            );
          }
        }
      })
    );
  }, []); // these values cannot be hardcoded, dervive from allcakesdata????

  const [thumbImgsLoaded, setThumbImgsLoaded] = useState<Array<string>>([]);

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
  }, [allCustomCategoriesArr]);

  useEffect(() => {
    console.log(thumbImgsLoaded, "thumbImgsLoaded");
    const allThumbsLoaded = allCakesOnPage.every((cake) =>
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

  useEffect(() => {
    if (width <= 2562) {
      if (height <= 860) {
        setHorizontalMainImgGallery(true);
      } else {
        setHorizontalMainImgGallery(false);
      }
    }

    if (width <= 2181 && width > 973) {
      setTwoColLayout(true);
      setThreeColLayout(false);

      setOneColLayout(false);
      setMobileLrg(false);
    } else if (width <= 973 && width > 848) {
      setTwoColLayout(false);
      setThreeColLayout(true);

      setOneColLayout(true);
      setMobileLrg(false);
    } else if (width <= 848) {
      setTwoColLayout(false);
      setThreeColLayout(false);

      setOneColLayout(false);
      setMobileLrg(true);
    } else {
      setTwoColLayout(false);
      setThreeColLayout(false);

      setOneColLayout(false);
      setMobileLrg(false);
    }
  }, [width, height]);

  useEffect(() => {
    setGalleryOpt(props.customGalleryOpt);
    // setMainImgLoaded(false);
  }, [props.customGalleryOpt]);

  useEffect(() => {
    console.log(uniqueCategoryArr, "uniqkueCatearr");
  }, [uniqueCategoryArr]);

  return (
    <>
      {uniqueCategoryArr.length && width > 1511 && !oneColLayout && (
        <TextPanel
          h2={uniqueCategoryArr[props.activeThumbnail!].subhead}
          h1={uniqueCategoryArr[props.activeThumbnail!].heading}
          p={uniqueCategoryArr[props.activeThumbnail!].p}
          widthClass={"gallery"}
          layout={twoColLayout}
        />
      )}
      {/* TWO COL LAYOUT PARAGRAPH */}
      {uniqueCategoryArr.length &&
        twoColLayout &&
        width <= 1511 &&
        !oneColLayout && (
          <TextPanel
            h2={""}
            h1={""}
            p={uniqueCategoryArr[props.activeThumbnail!].p}
            widthClass={"gallery"}
            layout={twoColLayout}
          />
        )}

      {!oneColLayout && !mobileLrg && (
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
          {uniqueCategoryArr.length &&
            uniqueCategoryArr.map((item, i) => {
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
                    src={item.thumbnail}
                    key={i}
                    id={`${item.thumbnailTitle}_${i}`}
                    alt=""
                    className={props.activeThumbnail === i ? "active" : ""}
                    ref={(el) => {
                      imgRefs.current[i] = el;
                    }}
                  />
                </>
              );
            })}
        </div>
      )}

      {/* CREATE MAIN IMAGE COMPONENT */}
      {!isGourmetPage &&
        !mobileLrg &&
        !horizontalMainImgGallery &&
        uniqueCategoryArr.length && (
          <div className="gallery-mainImg-container">
            <div
              className={mainImgLoaded ? "" : "lazy-img"}
              style={{
                backgroundImage:
                  "url(" +
                  uniqueCategoryArr[props.activeThumbnail].lazyImgTitle +
                  ")"
              }}
            ></div>
            {
              <img
                onLoad={() => {
                  setMainImgLoaded(true);
                }}
                src={
                  oneColLayout
                    ? uniqueCategoryArr[props.activeThumbnail!].mobileImg
                    : uniqueCategoryArr[props.activeThumbnail!].img
                }
                alt=""
              />
            }

            {/* TWO COL LAYOUT HEADING */}

            {uniqueCategoryArr.length && twoColLayout && width <= 1511 && (
              <TextPanel
                h2={uniqueCategoryArr[props.activeThumbnail!].subhead}
                h1={uniqueCategoryArr[props.activeThumbnail!].heading}
                p={""}
                widthClass={"gallery"}
                layout={twoColLayout}
              />
            )}
          </div>
        )}

      {oneColLayout && !mobileLrg && (
        <div
          className={
            !isGourmetPage
              ? "gallery-thumbnails-container two"
              : "gallery-thumbnails-container flex-grow"
          }
          onClick={(e) => {
            handleThumbnailClick(e);
          }}
        >
          {uniqueCategoryArr.length &&
            uniqueCategoryArr.map((item, i) => {
              return (
                <>
                  <img
                    onLoad={(e) => {
                      handleImageLoading(e);
                    }}
                    src={item.thumbnail}
                    key={i}
                    id={`${item.thumbnailTitle}_${i}`}
                    alt=""
                    className={props.activeThumbnail === i ? "active" : ""}
                  />
                </>
              );
            })}
        </div>
      )}

      {/* CREATE MAIN IMAGE COMPONENT FOR mobile */}
      {horizontalMainImgGallery && (
        <div className="gallery-mainImg-container mobile-one">
          {uniqueCategoryArr.map((cakeObj: any) => {
            return (
              <>
                <div
                  className={mainImgLoaded ? "" : "lazy-img"}
                  style={{
                    backgroundImage: `url(${cakeObj.lazyImg})`
                  }}
                ></div>

                <img
                  onLoad={() => {
                    setMainImgLoaded(true);
                  }}
                  src={cakeObj.img}
                  alt=""
                />
              </>
            );
          })}
        </div>
      )}

      {/* CREATE MAIN IMAGE COMPONENT FOR mobile */}
      {mobileLrg && (!threeColLayout || !oneColLayout || !twoColLayout) && (
        <div className="gallery-mainImg-container mobile-two">
          {uniqueCategoryArr.map((cakeObj: any) => {
            return (
              <>
                <div
                  className={mainImgLoaded ? "" : "lazy-img"}
                  style={{
                    backgroundImage: `url(${cakeObj.lazyImg})`
                  }}
                ></div>

                <img
                  onLoad={(e) => {
                    handleImageLoading(e);
                    setMainImgLoaded(true);
                  }}
                  src={cakeObj.img}
                  alt=""
                />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GalleryContent;
