import {
  // SyntheticEvent,
  // useCallback,
  useContext,
  useEffect,
  useState
} from "react";

import TextPanel from "../TextPanel/TextPanel";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useNavigate, useParams } from "react-router-dom";

const FlavorsContent = () => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  // const { selectedMenuItem, clickedFlavor } = useParams();
  const { selectedMenuItem } = useParams();
  // const navigate = useNavigate();

  const { width, height } = useWindowDimensions();
  const { setShowLoadingGif, showLoadingGif } = context;
  const flavorImages = Object.values(
    import.meta.glob("../../img/cakeflavors/*.{png,jpg,jpeg}", {
      eager: true,
      as: "url"
    })
  );
  const flavorsContent = [
    {
      flav: "red velvet w/ vanilla cream cheese",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "baker-favorites"
    },
    {
      flav: "spiced carrot w/ vanilla cream cheese*",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "baker-favorites"
    },
    {
      flav: "chocolate w/ chocolate ganache",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "baker-favorites"
    },
    {
      flav: "berries & cream",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "baker-favorites"
    },
    {
      flav: "white almond w/ raspberry compote*",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "baker-favorites"
    },
    {
      flav: "lemon w/ raspberry compote*",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "baker-favorites"
    },
    {
      flav: "funfetti w/ strawberry buttercream",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "baker-favorites"
    },
    {
      flav: "chocolate w/ cookies & cream",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "baker-favorites"
    },
    {
      flav: "chocolate",
      img: flavorImages.find((img) => img.includes("carrot")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      category: "classic-flavors"
    },
    {
      flav: "funfetti",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "classic-flavors"
    },
    {
      flav: "vanilla",
      img: flavorImages.find((img) => img.includes("strawberry")),
      category: "classic-flavors"
    },
    {
      flav: "white almond",
      img: flavorImages.find((img) => img.includes("oreo")),
      category: "classic-flavors"
    },
    {
      flav: "red velvet",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "classic-flavors"
    },
    {
      flav: "lemon",
      img: flavorImages.find((img) => img.includes("oreo")),
      category: "specialty-flavors"
    },
    {
      flav: "spiced carrot*",
      img: flavorImages.find((img) => img.includes("strawberry")),
      category: "specialty-flavors"
    },
    {
      flav: "apple caramel*",
      img: flavorImages.find((img) => img.includes("carrot")),
      category: "specialty-flavors"
    },
    {
      flav: "almond",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "buttercream-fillings"
    },
    {
      flav: "chocolate",
      img: flavorImages.find((img) => img.includes("carrot")),
      category: "buttercream-fillings"
    },
    {
      flav: "coconut",
      img: flavorImages.find((img) => img.includes("strawberry")),
      category: "buttercream-fillings"
    },
    {
      flav: "coffee",
      img: flavorImages.find((img) => img.includes("oreo")),
      category: "buttercream-fillings"
    },
    {
      flav: "cookies & cream",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "buttercream-fillings"
    },
    {
      flav: "lemon",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "buttercream-fillings"
    },
    {
      flav: "peanut butter",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "buttercream-fillings"
    },
    {
      flav: "raspberry",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "buttercream-fillings"
    },
    {
      flav: "salted caramel",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "buttercream-fillings"
    },
    {
      flav: "strawberry",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "buttercream-fillings"
    },
    {
      flav: "vanilla",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "buttercream-fillings"
    },
    {
      flav: "chocolate",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "cream-cheese-fillings"
    },

    {
      flav: "coconut",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "cream-cheese-fillings"
    },
    {
      flav: "lemon",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "cream-cheese-fillings"
    },
    {
      flav: "vanilla",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "cream-cheese-fillings"
    },
    {
      flav: "white chocolate",
      img: flavorImages.find((img) => img.includes("carrot")),
      category: "ganache-fillings"
    },
    {
      flav: "semi-sweet chocolate",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "ganache-fillings"
    },
    {
      flav: "blueberry*",
      img: flavorImages.find((img) => img.includes("strawberry")),
      category: "other-fillings"
    },
    {
      flav: "dulce de leche*",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "other-fillings"
    },
    {
      flav: "fresh fruits*",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "other-fillings"
    },
    {
      flav: "mixed berries*",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "other-fillings"
    },
    {
      flav: "raspberry",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "other-fillings"
    },
    {
      flav: "strawberry*",
      img: flavorImages.find((img) => img.includes("chocolate")),
      category: "other-fillings"
    }
  ];
  type objectKey = keyof typeof txtPanelContent;
  const htmlKey = selectedMenuItem as objectKey;

  const txtPanelContent = {
    "baker-favorites": {
      h2: "the baker's",
      h1: "favorites",
      p: "A specially crafted menu of our favorite flavor combinations."
    },
    "cake-flavors": {
      h2: "cake",
      h1: "flavors",
      p: "Choose from our classic or specialty cake flavors. Either way, you can't go wrong."
    },
    fillings: {
      h2: "our",
      h1: "fillings",
      p: "Take your cake up a notch with one of our delectable fillings."
    }
  };

  const [flavorCatsArr, setFlavorCatsArr] = useState<string[]>([]);
  const [fillingCatsArr, setFillingCatsArr] = useState<string[]>([]);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [showInLftCol, setShowInLftCol] = useState(true);
  const [hideFlavImg, setHideFlavImg] = useState(false);
  const [secTxtClass, setSecTxtClass] = useState("");

  // const getImgSrc = useCallback(
  //   (item: Record<string, any>) => {
  //     if (width <= 1140 && width > 750) {
  //       if (height <= 900) {
  //         return item.img;
  //       }
  //       return item.lsImg;
  //     } else if (width <= 750) {
  //       return item.lsImg;
  //     } else {
  //       console.log(item.img);
  //       return item.img;
  //     }
  //   },
  //   [width, height]
  // );

  // const getImgSrc = useCallback(
  //   (item: Record<string, any>) => {
  //     if (width <= 848 && width > 750) {
  //       if (height <= 900) {
  //         return item.img;
  //       }
  //       return item.lsImg;
  //     } else if (width <= 750) {
  //       return item.lsImg;
  //     } else {
  //       console.log(item.img);
  //       return item.img;
  //     }
  //   },
  //   [width, height]
  // );

  // const encodeClickedFlavor = (flavor: string): string => {
  //   return encodeURIComponent(
  //     flavor
  //       .replace(/ /g, "-")
  //       .replace(/\//g, "_slash_")
  //       .replace(/\*/g, "_ast_")
  //       .replace(/&/g, "_and_")
  //   );
  // };

  // const handleFlavorClick = (e: SyntheticEvent) => {
  //   const target = e.target as HTMLDivElement;
  //   clickedFlavor !== encodeClickedFlavor(target.id) && setImgLoaded(false);
  //   navigate(`/flavors/${selectedMenuItem}/${encodeClickedFlavor(target.id)}`);
  // };

  // const decodeClickedFlavor = (flavor: string): string => {
  //   const decoded = decodeURIComponent(flavor);
  //   return decoded
  //     .replace(/_slash_/g, "/")
  //     .replace(/_ast_/g, "*")
  //     .replace(/_and_/g, "&")
  //     .replace(/-/g, " ");
  // };

  useEffect(() => {
    flavorsContent.filter((item) => {
      if (item.category.includes("flavors")) {
        setFlavorCatsArr((prevState: string[]) => [
          ...new Set([...prevState, item.category])
        ]);
      } else if (item.category.includes("fillings")) {
        setFillingCatsArr((prevState: string[]) => [
          ...new Set([...prevState, item.category])
        ]);
      }
    });
  }, []);

  useEffect(() => {
    if (imgLoaded) {
      setShowLoadingGif(false);
    } else {
      setShowLoadingGif(true);
      if (location.pathname.includes("cake-flavors") && hideFlavImg) {
        setShowLoadingGif(false);
      }
    }

    location.pathname.includes("fillings") && setShowLoadingGif(false);
  }, [imgLoaded, showLoadingGif, hideFlavImg, location.pathname]);

  useEffect(() => {
    width <= 1380 ? setShowInLftCol(false) : setShowInLftCol(true);
  }, [width]);

  useEffect(() => {}, [showInLftCol]);

  useEffect(() => {
    if (htmlKey === "cake-flavors" && width <= 1470) {
      setSecTxtClass("row");
    } else {
      setSecTxtClass("");
    }

    if (htmlKey === "cake-flavors" && width <= 1140) {
      setHideFlavImg(true);
    } else {
      setHideFlavImg(false);
    }
  }, [htmlKey, width]);

  return (
    <>
      <TextPanel
        h2={txtPanelContent[htmlKey].h2}
        h1={txtPanelContent[htmlKey].h1}
        p={txtPanelContent[htmlKey].p}
        widthClass={`flavors-txt ${secTxtClass}`}
        layout={true}
      />

      {/* BAKER'S FAV */}

      {htmlKey === "baker-favorites" && (
        <div className="flavors-container fav">
          <div className="flavors-box--favs">
            {flavorsContent
              .filter((cake) => cake.category === htmlKey)
              .sort((a, b) => {
                if (a.flav < b.flav) {
                  return -1;
                }
                if (a.flav > b.flav) {
                  return 1;
                }
                return 0;
              })
              .map((item, i) => (
                <div className="flavor-card">
                  <img
                    className={"fav-img"}
                    src={item.lsImg}
                    alt={`Image for ${item.flav}  `}
                    key={htmlKey}
                    onLoad={() => {
                      setImgLoaded(true);
                      // setShowLoadingGif(false);
                    }}
                  />
                  <p
                    className={`menu-options baker`}
                    key={i.toString()}
                    id={`${item.flav}`}
                  >
                    {item.flav}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}

      {showInLftCol && (
        <>
          {/*CAKE FLAVORS */}
          {htmlKey === "cake-flavors" && (
            <div className="flavors-container cake-flavors">
              {flavorCatsArr.map((category: string) => (
                <div className="cake-info-container">
                  <p className="title">{category.replace("-", " ")}</p>
                  <div className="flavors-box--flav">
                    {category.includes("classic") &&
                      flavorsContent.map(
                        (item, i) =>
                          item.category === category && (
                            <p
                              className="menu-options flavor"
                              key={i.toString()}
                              id={`${item.flav}`}
                            >
                              {item.flav}
                            </p>
                          )
                      )}
                    {category.includes("specialty") &&
                      flavorsContent.map(
                        (item, i) =>
                          item.category === category && (
                            <p
                              className="menu-options flavor"
                              key={i.toString()}
                              id={`${item.flav}`}
                            >
                              {item.flav}
                            </p>
                          )
                      )}
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* FILLINGS*/}
          {htmlKey === "fillings" && (
            <div className="flavors-container fillings">
              {/* BUTTER CREAM LIST */}
              {fillingCatsArr.map(
                (category: string) =>
                  category === "buttercream-fillings" && (
                    <div className="cake-info-container">
                      <p className="title">{category.replace("-", " ")}</p>
                      {flavorsContent.map(
                        (item, i) =>
                          item.category === category && (
                            <p
                              className="menu-options buttercream"
                              key={i.toString()}
                              id={`${item.flav}`}
                            >
                              {item.flav}
                            </p>
                          )
                      )}
                    </div>
                  )
              )}

              {/* CREAM CHEESE & GANACHE LIST */}

              {
                <div className="cake-info-container">
                  {fillingCatsArr.map(
                    (category: string) =>
                      (category === "cream-cheese-fillings" ||
                        category === "ganache-fillings") && (
                        <>
                          <p
                            className={
                              category === "ganache-fillings"
                                ? "title second"
                                : "title"
                            }
                          >
                            {category.replace("-", " ")}
                          </p>
                          {flavorsContent.map(
                            (item, i) =>
                              item.category === category && (
                                <p
                                  className="menu-options buttercream"
                                  key={i.toString()}
                                  id={`${item.flav}`}
                                >
                                  {item.flav}
                                </p>
                              )
                          )}
                        </>
                      )
                  )}
                </div>
              }
              {/* OTHER */}

              {fillingCatsArr.map(
                (category: string) =>
                  category === "other-fillings" && (
                    <div className="cake-info-container">
                      <p className="title">{category.replace("-", " ")}</p>
                      {flavorsContent.map(
                        (item, i) =>
                          item.category === category && (
                            <p
                              className="menu-options buttercream"
                              key={i.toString()}
                              id={`${item.flav}`}
                            >
                              {item.flav}
                            </p>
                          )
                      )}
                    </div>
                  )
              )}
            </div>
          )}
        </>
      )}

      {/* FILLINGS*/}
      {!showInLftCol && htmlKey === "fillings" && (
        <div className="flavors-container fillings">
          {/* BUTTER CREAM LIST */}
          {fillingCatsArr.map(
            (category: string) =>
              category === "buttercream-fillings" && (
                <div className="cake-info-container">
                  <p className="title">{category.replace("-", " ")}</p>
                  {flavorsContent.map(
                    (item, i) =>
                      item.category === category && (
                        <p
                          className="menu-options buttercream"
                          key={i.toString()}
                          id={`${item.flav}`}
                        >
                          {item.flav}
                        </p>
                      )
                  )}
                </div>
              )
          )}

          {/* CREAM CHEESE & GANACHE LIST */}

          {
            <div className="cake-info-container">
              {fillingCatsArr.map(
                (category: string) =>
                  (category === "cream-cheese-fillings" ||
                    category === "ganache-fillings") && (
                    <>
                      <p
                        className={
                          category === "ganache-fillings"
                            ? "title second"
                            : "title"
                        }
                      >
                        {category.replace("-", " ")}
                      </p>
                      {flavorsContent.map(
                        (item, i) =>
                          item.category === category && (
                            <p
                              className="menu-options buttercream"
                              key={i.toString()}
                              id={`${item.flav}`}
                            >
                              {item.flav}
                            </p>
                          )
                      )}
                    </>
                  )
              )}
            </div>
          }
          {/* OTHER */}

          {fillingCatsArr.map(
            (category: string) =>
              category === "other-fillings" && (
                <div className="cake-info-container">
                  <p className="title">{category.replace("-", " ")}</p>
                  {flavorsContent.map(
                    (item, i) =>
                      item.category === category && (
                        <p
                          className="menu-options buttercream"
                          key={i.toString()}
                          id={`${item.flav}`}
                        >
                          {item.flav}
                        </p>
                      )
                  )}
                </div>
              )
          )}
        </div>
      )}
      {/* IMAGES  CONTAINER*/}

      {htmlKey === "cake-flavors" && (
        <div className="flavors-two-col">
          <div className="gallery-mainImg-container flavors">
            {/* CAKE FLAVORS IMAGE */}
            {htmlKey === "cake-flavors" && !hideFlavImg && (
              <img
                src={flavorImages.find((img) => img.includes("chocolate"))}
                alt={"Image for " + htmlKey + " list"}
                key={htmlKey}
                onLoad={() => {
                  setImgLoaded(true);
                  // setShowLoadingGif(false);
                }}
              />
            )}
          </div>
          {!showInLftCol && (
            <>
              {/* BAKER'S FAV */}
              {/* {htmlKey === "baker-favorites" && (
                <div className="flavors-container">
                  <div className="flavors-box--favs">
                    {flavorsContent
                      .filter((cake) => cake.category === htmlKey)
                      .sort((a, b) => {
                        if (a.flav < b.flav) {
                          return -1;
                        }
                        if (a.flav > b.flav) {
                          return 1;
                        }
                        return 0;
                      })
                      .map((item, i) => (
                        <p
                          className={`menu-options baker ${
                            decodeClickedFlavor(clickedFlavor || "") ===
                              item.flav && "active-flavor"
                          }`}
                          key={i.toString()}
                          id={`${item.flav}`}
                          onClick={(e) => handleFlavorClick(e)}
                        >
                          {item.flav}
                        </p>
                      ))}
                  </div>
                </div>
              )} */}
              {/*CAKE FLAVORS */}
              {htmlKey === "cake-flavors" && (
                <div className="flavors-container cake-flavors">
                  {flavorCatsArr.map((category: string) => (
                    <div className="cake-info-container">
                      <p className="title">{category.replace("-", " ")}</p>
                      <div className="flavors-box--flav">
                        {category.includes("classic") &&
                          flavorsContent.map(
                            (item, i) =>
                              item.category === category && (
                                <p
                                  className="menu-options flavor"
                                  key={i.toString()}
                                  id={`${item.flav}`}
                                >
                                  {item.flav}
                                </p>
                              )
                          )}
                        {category.includes("specialty") &&
                          flavorsContent.map(
                            (item, i) =>
                              item.category === category && (
                                <p
                                  className="menu-options flavor"
                                  key={i.toString()}
                                  id={`${item.flav}`}
                                >
                                  {item.flav}
                                </p>
                              )
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default FlavorsContent;
