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
import GalleryNav from "../GalleryNav/GalleryNav";
import ForwardBtn from "../ForwardBtn/ForwardBtn";

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
  // const [twoColLayout, setTwoColLayout] = useState(false);
  // const [threeColLayout, setThreeColLayout] = useState(true);

  // const [oneColLayout, setOneColLayout] = useState(false);
  // const [mobileLrg, setMobileLrg] = useState(false);
  // const [horizontalMainImgGallery, setHorizontalMainImgGallery] =
  //   useState(false);

  const imgRefs = useRef<Array<HTMLImageElement | null>>([]);

  const cakeGalleryContent = useMemo(() => {
    if (weddingGalleryContent && customGalleryContent) {
      return location.pathname.includes("/custom-cakes")
        ? customGalleryContent
        : weddingGalleryContent;
    }
  }, [weddingGalleryContent, customGalleryContent]);

  // const [galleryOpt, setGalleryOpt] = useState<string>("");

  const allCustomCategoriesArr: Record<string, any>[] = [];

  (props.customGalleryOpt === "all" || props.customGalleryOpt === "wedding") &&
  cakeGalleryContent
    ? allCustomCategoriesArr.push(...cakeGalleryContent)
    : allCustomCategoriesArr.push(
        ...cakeGalleryContent!.filter(
          (item) => item.category === props.customGalleryOpt
        )
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
    if (target.className.includes("gallery-thumbnails-container")) return;

    const clickedIndex = +target.id.replace(/^[^_]*_/, "");

    const isWedding = location.pathname.includes("/wedding-cakes");
    const basePath = isWedding ? "wedding-cakes" : "custom-cakes";

    navigate(`/${basePath}/${props.customGalleryOpt}/${clickedIndex}`);
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

  return (
    <>
      <div className="navigation-container">
        <GalleryNav />
      </div>

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

      {/* CREATE MAIN IMAGE COMPONENT */}
      {!isGourmetPage && uniqueCategoryArr.length && (
        <div className="gallery-mainImg-container">
          <div className="sticky-div gallery">
            <div
              className={mainImgLoaded ? "" : "lazy-img"}
              style={{
                backgroundImage: `url(${
                  uniqueCategoryArr[props.activeThumbnail!].lazyImg
                })`
              }}
            ></div>
            {
              <img
                onLoad={() => {
                  setMainImgLoaded(true);
                }}
                src={uniqueCategoryArr[props.activeThumbnail!].img}
                alt=""
              />
            }
            {uniqueCategoryArr.length && (
              <TextPanel
                h2={uniqueCategoryArr[props.activeThumbnail!].subhead}
                h1={uniqueCategoryArr[props.activeThumbnail!].heading}
                p={uniqueCategoryArr[props.activeThumbnail!].p}
              />
            )}

            <ForwardBtn
              link={"/serving-sizes/1-tier"}
              linkTxt=" Explore Serving Sizes"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryContent;
