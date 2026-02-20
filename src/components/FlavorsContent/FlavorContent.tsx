import { useContext, useEffect, useState } from "react";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";

const FlavorsContent = ({
  catRefs
}: {
  catRefs: React.RefObject<(HTMLDivElement | null)[]>;
}) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }

  const { setShowLoadingGif, showLoadingGif } = context;
  const flavorImages = Object.values(
    import.meta.glob("../../img/cakeflavors/*.{png,jpg,jpeg,gif}", {
      eager: true,
      as: "url"
    })
  );
  const flavorsContent = [
    {
      flav: "Vanilla Dream",
      p: "Moist vanilla cake paired with smooth vanilla buttercream.",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "classic"
    },
    {
      flav: "Red Velvet",
      p: "Rich red velvet cake with a creamy vanilla cream cheese frosting.",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "classic"
    },
    {
      flav: `Cookies & Cream`,
      p: "Choice of chocolate or vanilla cake with cookies & cream buttercream.",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "classic"
    },
    {
      flav: "Chocolate & Vanilla",
      p: "Decadent chocolate cake frosted with vanilla buttercream.",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "classic"
    },
    {
      flav: "Funfetti",
      p: "Funfetti cake with your choice of vanilla or strawberry buttercream.",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "classic"
    },
    {
      flav: "Strawberry Delight",
      p: "Strawberry cake layered with strawberry cream cheese frosting.",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "classic"
    },
    {
      flav: "Double Chocolate",
      p: "Chocolate cake filled with rich chocolate buttercream.",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "classic"
    },
    {
      flav: "lemon raspberry",
      p: "Lemon cake with raspberry compote and vanilla buttercream.",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "specialty"
    },
    {
      flav: "Spiced Carrot",
      p: "Carrot cake with vanilla cream cheese frosting and a touch of dulce de leche.",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "specialty"
    },
    {
      flav: "Almond Raspberry",
      p: "Almond cake with raspberry compote and almond butter cream",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "specialty"
    },
    {
      flav: "Cookie Butter",
      p: "Cinnamon cake with Biscoff cream cheese frosting.",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "specialty"
    },
    {
      flav: "Hazelnut Dream",
      p: "Vanilla or chocolate cake filled with Nutella ganache and dulce de leche",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "specialty"
    },
    {
      flav: "Berries & Cream",
      p: "Vanilla cake layered with a mixed berry compote and vanilla buttercream",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "specialty"
    },
    {
      flav: "Strawberry Shortcake",
      p: "Vanilla cake with strawberry compote and vanilla buttercream",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "specialty"
    },
    {
      flav: "Chocolate Indulgence",
      p: "Chocolate cake filled with chocolate ganache and chocolate buttercream",
      img: flavorImages.find((img) => img.includes("chocolate-big")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      category: "specialty"
    }
  ];

  const [imgLoaded, setImgLoaded] = useState(false);

  const allCategories = flavorsContent.map((item) => item.category);
  const uniquteCatArr = [...new Set(allCategories)];

  useEffect(() => {
    if (imgLoaded) {
      setShowLoadingGif(false);
    } else {
      setShowLoadingGif(true);
    }
  }, [imgLoaded, showLoadingGif, location.pathname]);

  return (
    <>
      <div className="flavors-container">
        {uniquteCatArr.map((category, i) => (
          <div
            className={`flavors-box ${category}-flavors`}
            key={category}
            ref={(el) => (catRefs.current![i] = el)}
          >
            {flavorsContent
              .sort((a, b) => {
                if (a.flav < b.flav) {
                  return -1;
                }
                if (a.flav > b.flav) {
                  return 1;
                }
                return 0;
              })
              .map(
                (item, i) =>
                  item.category === category && (
                    <div className="cake-detail-card" key={i}>
                      <img
                        src={item.lsImg}
                        alt={`Image for ${item.flav}  `}
                        onLoad={() => {
                          setImgLoaded(true);
                          // setShowLoadingGif(false);
                        }}
                      />
                      <div className="cake-info-box">
                        <h3>{item.flav}</h3>
                        <p>{item.p}</p>
                      </div>
                    </div>
                  )
              )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FlavorsContent;
