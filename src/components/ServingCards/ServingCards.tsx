import { useContext, useEffect, useState } from "react";
import { servingCardsProp } from "./ServingCards.type";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";

const ServingCards = (props: servingCardsProp) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const { setAllGalleryImagesArr } = context;
  const servingImages = Object.values(
    import.meta.glob("../../img/servingssizes/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url"
    })
  );
  const servingSizeContent = [
    {
      diameter: '6" diameter',
      servings: "Serves 12",
      img: `${servingImages.filter((img) => img.includes("6inch.png"))}`,
      category: "1-tier"
    },
    {
      diameter: '7" diameter',
      servings: "Serves 15",
      img: `${servingImages.filter((img) => img.includes("7inch.png"))}`,
      category: "1-tier"
    },
    {
      diameter: '8" diameter',
      servings: "Serves 24",
      img: `${servingImages.filter((img) => img.includes("8inch.png"))}`,
      category: "1-tier"
    },
    {
      diameter: '9" diameter',
      servings: "Serves 30",
      img: `${servingImages.filter((img) => img.includes("9inch.png"))}`,
      category: "1-tier"
    },
    {
      diameter: '10" diameter',
      servings: "Serves 38",
      img: `${servingImages.filter((img) => img.includes("10inch.png"))}`,
      category: "1-tier"
    },
    {
      diameter: '6" & 8" diameters',
      servings: "Serves 36",
      img: `${servingImages.filter(
        (img) => img.includes("6-8.png") && !img.includes("4")
      )}`,
      category: "2-tier"
    },
    {
      diameter: '6" & 9" diameters',
      servings: "Serves 42",
      img: `${servingImages.filter((img) => img.includes("6-9.png"))}`,
      category: "2-tier"
    },
    {
      diameter: '6" & 10" diameters',
      servings: "Serves 50",
      img: `${servingImages.filter((img) => img.includes("6-10.png"))}`,
      category: "2-tier"
    },
    {
      diameter: '8" & 10" diameters',
      servings: "Serves 62",
      img: `${servingImages.filter(
        (img) =>
          img.includes("8-10.png") && !img.includes("4") && !img.includes("6")
      )}`,
      category: "2-tier"
    },
    {
      diameter: '8" & 12" diameters',
      servings: "Serves 80",
      img: `${servingImages.filter((img) => img.includes("8-12.png"))}`,
      category: "2-tier"
    },
    {
      diameter: '4" 6" & 8" diameters',
      servings: "Serves 44",
      img: `${servingImages.filter((img) => img.includes("4-6-8.png"))}`,
      category: "3-tier"
    },
    {
      diameter: '6" 8" & 10" diameters',
      servings: "Serves 74",
      img: `${servingImages.filter(
        (img) => img.includes("6-8-10.png") && !img.includes("4")
      )}`,
      category: "3-tier"
    },
    {
      diameter: '6" 9" & 12" diameters',
      servings: "Serves 100",
      img: `${servingImages.filter((img) => img.includes("6-9-12.png"))}`,
      category: "3-tier"
    },
    {
      diameter: '6" 10" & 14" diameters',
      servings: "Serves 128",
      img: `${servingImages.filter((img) => img.includes("6-10-14.png"))}`,
      category: "3-tier"
    },
    {
      diameter: '4" 6" 8" & 10" diameters',
      servings: "Serves 82",
      img: `${servingImages.filter((img) => img.includes("4-6-8-10.png"))}`,
      category: "4-tier"
    },
    {
      diameter: '6" 8" 10" & 12" diameters',
      servings: "Serves 130",
      img: `${servingImages.filter((img) =>
        img.includes("6-8-10-12-4-tier.png")
      )}`,
      category: "4-tier"
    },
    {
      diameter: '6" 9" 12" & 14" diameters',
      servings: "Serves 178",
      img: `${servingImages.filter((img) => img.includes("6-9-12-14.png"))}`,
      category: "4-tier"
    },
    {
      diameter: '4" 6" 8" 10" & 12" diameters',
      servings: "Serves 138",
      img: `${servingImages.filter((img) => img.includes("4-6-8-10-12.png"))}`,
      category: "5-tier"
    },
    {
      diameter: '6" 8" 10" 12" & 14" diameters',
      servings: "Serves 208",
      img: `${servingImages.filter((img) => img.includes("6-8-10-12-14.png"))}`,
      category: "5-tier"
    }
  ];
  const [secondaryClassName, setSecondaryClassName] = useState("");

  // useEffect(() => {
  //   const allOptionsOnPage = servingSizeContent.filter(
  //     (obj: Record<string, string>) => obj.category === props.html
  //   );

  //   allOptionsOnPage.length === allGalleryImagesArr.length &&
  //     setShowLoadingGif(false);
  // }, [allGalleryImagesArr]);

  useEffect(() => {
    if (props.html === "1-tier") {
      setSecondaryClassName("one-tier");
    } else if (props.html === "2-tier") {
      setSecondaryClassName("two-tier");
    } else if (props.html === "3-tier") {
      setSecondaryClassName("three-tier");
    } else if (props.html === "4-tier") {
      setSecondaryClassName("four-tier");
    } else if (props.html === "5-tier") {
      setSecondaryClassName("five-tier");
    } else {
      setSecondaryClassName("");
    }
  }, [props.html]);

  return (
    <div className={`serving-cards-container ${secondaryClassName}`}>
      {servingSizeContent
        .filter((obj: Record<string, string>) => obj.category === props.html)
        .map((item: Record<string, string>, i: number) => (
          <div className="serving-card" key={i} id={`card${props.html}`}>
            <div className="img-container" id={`img-container${props.html}`}>
              <img
                className="serving-img"
                src={item.img}
                alt={
                  "Illustration of a " +
                  item.category +
                  ", " +
                  item.diameter +
                  " cake"
                }
                id={`img${props.html}`}
                onLoad={(e) => {
                  setAllGalleryImagesArr((prevState: any) => [
                    ...prevState,
                    e.target
                  ]);
                }}
              />
            </div>
            <div className="txt-container">
              <p className="diameter-txt">{item.diameter}</p>
              <p className="serving-txt">{item.servings}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ServingCards;
