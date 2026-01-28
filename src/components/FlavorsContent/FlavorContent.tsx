import {
  // SyntheticEvent,
  // useCallback,
  useContext,
  useEffect,
  useState
} from "react";

import TextPanel from "../TextPanel/TextPanel";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import { useParams } from "react-router-dom";

const FlavorsContent = () => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }

  const { selectedMenuItem } = useParams();
  const { setShowLoadingGif, showLoadingGif } = context;
  const flavorImages = Object.values(
    import.meta.glob("../../img/cakeflavors/*.{png,jpg,jpeg,gif}", {
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
      category: "classic-flavors"
    },
    {
      flav: "funfetti",
      category: "classic-flavors"
    },
    {
      flav: "vanilla",
      category: "classic-flavors"
    },
    {
      flav: "white almond",
      category: "classic-flavors"
    },
    {
      flav: "red velvet",
      category: "classic-flavors"
    },
    {
      flav: "lemon",
      category: "specialty-flavors"
    },
    {
      flav: "spiced carrot*",
      category: "specialty-flavors"
    },
    {
      flav: "apple caramel*",
      category: "specialty-flavors"
    },
    {
      flav: "almond",
      category: "buttercream-fillings"
    },
    {
      flav: "chocolate",
      img: flavorImages.find((img) => img.includes("carrot")),
      category: "buttercream-fillings"
    },
    {
      flav: "coconut",
      category: "buttercream-fillings"
    },
    {
      flav: "coffee",
      category: "buttercream-fillings"
    },
    {
      flav: "cookies & cream",
      category: "buttercream-fillings"
    },
    {
      flav: "lemon",
      category: "buttercream-fillings"
    },
    {
      flav: "peanut butter",
      category: "buttercream-fillings"
    },
    {
      flav: "raspberry",
      category: "buttercream-fillings"
    },
    {
      flav: "salted caramel",
      category: "buttercream-fillings"
    },
    {
      flav: "strawberry",
      category: "buttercream-fillings"
    },
    {
      flav: "vanilla",
      category: "buttercream-fillings"
    },
    {
      flav: "chocolate",
      category: "cream-cheese-fillings"
    },

    {
      flav: "coconut",
      category: "cream-cheese-fillings"
    },
    {
      flav: "lemon",
      category: "cream-cheese-fillings"
    },
    {
      flav: "vanilla",
      category: "cream-cheese-fillings"
    },
    {
      flav: "white chocolate",
      img: flavorImages.find((img) => img.includes("carrot")),
      category: "ganache-fillings"
    },
    {
      flav: "semi-sweet chocolate",
      category: "ganache-fillings"
    },
    {
      flav: "blueberry*",
      img: flavorImages.find((img) => img.includes("strawberry")),
      category: "other-fillings"
    },
    {
      flav: "dulce de leche*",
      category: "other-fillings"
    },
    {
      flav: "fresh fruits*",
      category: "other-fillings"
    },
    {
      flav: "mixed berries*",
      category: "other-fillings"
    },
    {
      flav: "raspberry",
      category: "other-fillings"
    },
    {
      flav: "strawberry*",
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
    fillings: {
      h2: "cake flavors",
      h1: "& fillings",
      p: "Take your cake up a notch with our delectable combinations."
    }
  };

  const [flavorCatsArr, setFlavorCatsArr] = useState<string[]>([]);
  const [fillingCatsArr, setFillingCatsArr] = useState<string[]>([]);
  const [imgLoaded, setImgLoaded] = useState(false);

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
    }

    location.pathname.includes("fillings") && setShowLoadingGif(false);
  }, [imgLoaded, showLoadingGif, location.pathname]);

  return (
    <>
      <TextPanel
        h2={txtPanelContent[htmlKey].h2}
        h1={txtPanelContent[htmlKey].h1}
        p={txtPanelContent[htmlKey].p}
        widthClass={`flavors-txt`}
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

      {/* FLAVORS & FILLINGS*/}
      {htmlKey === "fillings" && (
        <div className="flavors-fillings-container">
          <div className="cake-flavor-fillings">
            {flavorCatsArr.map((category: string) => (
              <div className="cake-info-container">
                <p className="title">
                  {category.includes("specialty")
                    ? category.replace("-", " cake ")
                    : category.replace("classic", "cake").replace("-", " ")}
                </p>
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
        </div>
      )}
    </>
  );
};

export default FlavorsContent;
