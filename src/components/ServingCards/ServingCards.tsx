import { RefObject, useContext, useEffect, useState } from "react";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import { useParams } from "react-router-dom";

const ServingCards = (props: {
  tiersRefs: RefObject<(HTMLDivElement | null)[]>;
}) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { selectedMenuItem } = useParams();

  const { setShowLoadingGif } = context;
  const [loadedServImgs, setLoadedServImgs] = useState<any[]>([]);
  const [categoryDivClass, setCategoryDivClass] = useState<string>("");

  const servingImages = Object.values(
    import.meta.glob("../../img/servingssizes/*.{png,jpg,jpeg}", {
      eager: true,
      as: "url"
    })
  );

  const servingSizeContent = [
    {
      diameter: '6" diameter',
      servings: "Serves 12",
      img: servingImages.find((img) => img.includes("6inch")),
      category: "one-tier"
    },
    {
      diameter: '7" diameter',
      servings: "Serves 15",
      img: servingImages.find((img) => img.includes("7inch")),
      category: "one-tier"
    },
    {
      diameter: '8" diameter',
      servings: "Serves 24",
      img: servingImages.find((img) => img.includes("8inch")),
      category: "one-tier"
    },
    {
      diameter: '9" diameter',
      servings: "Serves 30",
      img: servingImages.find((img) => img.includes("9inch")),
      category: "one-tier"
    },
    {
      diameter: '10" diameter',
      servings: "Serves 38",
      img: servingImages.find((img) => img.includes("10inch")),
      category: "one-tier"
    },
    {
      diameter: '6" & 8" diameters',
      servings: "Serves 36",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("6-8-2-tier")
      ),
      category: "two-tier"
    },
    {
      diameter: '6" & 9" diameters',
      servings: "Serves 42",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("6-9-2-tier")
      ),
      category: "two-tier"
    },
    {
      diameter: '6" & 10" diameters',
      servings: "Serves 50",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("6-10-2-tier")
      ),
      category: "two-tier"
    },
    {
      diameter: '8" & 10" diameters',
      servings: "Serves 62",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("8-10-2-tier")
      ),
      category: "two-tier"
    },
    {
      diameter: '8" & 12" diameters',
      servings: "Serves 80",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("8-12-2-tier")
      ),
      category: "two-tier"
    },
    {
      diameter: '4" 6" & 8" diameters',
      servings: "Serves 44",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("4-6-8-3-tier")
      ),
      category: "three-tier"
    },
    {
      diameter: '6" 8" & 10" diameters',
      servings: "Serves 74",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("6-8-10-3-tier")
      ),
      category: "three-tier"
    },
    {
      diameter: '6" 9" & 12" diameters',
      servings: "Serves 100",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("6-9-12-3-tier")
      ),
      category: "three-tier"
    },
    {
      diameter: '6" 10" & 14" diameters',
      servings: "Serves 128",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("6-10-14-3-tier")
      ),
      category: "three-tier"
    },
    {
      diameter: '4" 6" 8" & 10" diameters',
      servings: "Serves 82",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("4-6-8-10-4-tier")
      ),
      category: "four-tier"
    },
    {
      diameter: '6" 8" 10" & 12" diameters',
      servings: "Serves 130",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("6-8-10-12-4-tier")
      ),
      category: "four-tier"
    },
    {
      diameter: '6" 9" 12" & 14" diameters',
      servings: "Serves 178",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("6-9-12-14-4-tier")
      ),
      category: "four-tier"
    },
    {
      diameter: '4" 6" 8" 10" & 12" diameters',
      servings: "Serves 138",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("4-6-8-10-12-5-tier")
      ),
      category: "five-tier"
    },
    {
      diameter: '6" 8" 10" 12" & 14" diameters',
      servings: "Serves 208",
      img: servingImages.find((img) =>
        img.split("/").pop()?.includes("6-8-10-12-14-5-tier")
      ),
      category: "five-tier"
    }
  ];

  const servingsCategories = [
    ...new Set(servingSizeContent.map((item) => item.category))
  ];

  useEffect(() => {
    const allOptionsOnPage = servingSizeContent.filter(
      (obj) => obj.category === selectedMenuItem
    );

    const allLoaded = allOptionsOnPage.every((option) => {
      const fileName = option.img?.split("/").pop();
      return fileName && loadedServImgs.includes(fileName);
    });

    if (allLoaded) {
      setShowLoadingGif(false);
    }
  }, [loadedServImgs, selectedMenuItem]);

  useEffect(() => {
    selectedMenuItem && +selectedMenuItem[0] >= 4
      ? setCategoryDivClass("lg-min-height")
      : setCategoryDivClass("");
  }, [selectedMenuItem]);

  return (
    <div className={`serving-cards-container`}>
      {servingsCategories
        // .filter((obj) =>
        //   selectedMenuItem === "all" ? obj : obj === selectedMenuItem
        // )
        .map((item, i) => (
          <div
            className={`category-container ${item}`}
            key={i}
            ref={(el) => (props.tiersRefs.current![i] = el)}
          >
            {servingSizeContent.map(
              (servItem, i) =>
                servItem.category === item && (
                  <div className="serving-card" key={i}>
                    <div
                      className="img-container"
                      id={`img-container${selectedMenuItem}`}
                    >
                      <img
                        className="serving-img"
                        src={servItem.img}
                        alt={`Illustration of a ${servItem.category}, ${servItem.diameter} cake`}
                        id={`img${selectedMenuItem}`}
                        onLoad={(e) => {
                          const target = e.target as HTMLImageElement;
                          const fileName = target.src.split("/").pop();
                          fileName &&
                            !loadedServImgs.includes(fileName) &&
                            setLoadedServImgs((prevState: any) => [
                              ...prevState,
                              fileName
                            ]);
                        }}
                      />
                    </div>
                    <div className="txt-container">
                      <p className="diameter-txt">{servItem.diameter}</p>
                      <p className="serving-txt">{servItem.servings}</p>
                    </div>
                  </div>
                )
            )}
          </div>
        ))}
    </div>
  );
};
export default ServingCards;
