import { useContext, useEffect, useState } from "react";
import { SignatureContentProps } from "./SignatureContentProps.type";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import { useLocation, useParams } from "react-router-dom";

const SignatureContent = (props: SignatureContentProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const location = useLocation();
  const { selectedMenuItem, size } = useParams();

  // const { setShowLoadingFlavorGif } = context;

  const flavorImages = Object.values(
    import.meta.glob("../../img/signaturecakes/*.{png,jpg,jpeg}", {
      eager: true,
      as: "url"
    })
  );
  const signatureContent = [
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

  const allCategories = signatureContent.map((item) => item.category);
  const uniquteCatArr = [...new Set(allCategories)];

  const cupcakeContent = [
    {
      flav: "tres leches (three milks)",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "Vanilla cake soaked in sweetened condensed milk, evaporated milk, and whole milk."
    },
    {
      flav: "hazelnut",
      img: flavorImages.find((img) => img.includes("strawberry")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("strawberry-small")),
      p: "your choice of rich vanilla or chocolate cake layers with hazelnut ganache"
    },
    {
      flav: "vanilla dream",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "adf"
    },
    {
      flav: "funfetti",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "adf"
    },
    {
      flav: "spiced carrot",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "adf"
    },
    {
      flav: "german chocolate",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small"))
    },
    {
      flav: "chocolate delight",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "adf"
    },
    {
      flav: "Red Velvet",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "adf"
    },
    {
      flav: "lemon raspberry",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "lemon raspberry cake with vanilla cream cheese"
    },
    {
      flav: "strawberry shortcake",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "vanilla cake with whipped cream and fresh strawberries"
    },
    {
      flav: "strawberry crunch",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "strawberry and vanilla cake layers with strawberry cream cheese and strawberry shortbread crunchies"
    },
    {
      flav: "strawberry delight",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "strawberry and vanilla cake layers with strawberry cream cheese and strawberry shortbread crunchies"
    }
  ];

  const [txtPanelContent, setTxtPanelContent] = useState<Record<string, any>>();

  useEffect(() => {
    location.pathname === "/cupcakes" &&
      setTxtPanelContent({
        p: "An assorment of delectable flavors to choose from ",
        h1: "cupcakes",
        h2: "our"
      });
  }, [location]);

  useEffect(() => {
    if (size === "6-inch") {
      setTxtPanelContent(() => ({
        p: "Serves 4-8",
        h1: "$60",
        h1Spec: "$65",
        h2: "6 inch"
      }));
    } else if (size === "8-inch") {
      setTxtPanelContent(() => ({
        p: "Serves 10-12",
        h1: "$90",
        h1Spec: "$95",
        h2: "8 inch"
      }));
    } else if (size === "10-inch") {
      setTxtPanelContent(() => ({
        p: "Serves 12-20",
        h1: "$110",
        h1Spec: "$115",
        h2: "10 inch"
      }));
    }
  }, [size]);

  return (
    <>
      {
        <div className="signature-cakes-container">
          {location.pathname === "/cupcakes" &&
            cupcakeContent.map((item: Record<string, any>) => {
              return (
                <div className="cake-detail-card">
                  <img src={item.lsImg} alt="" />
                  <div className="cake-info-box">
                    <div className="cake-heading-box">
                      <h3>{item.flav}</h3>
                      {location.pathname !== "/cupcakes" && (
                        <h4 className="cake-price">{txtPanelContent?.h1}</h4>
                      )}
                    </div>
                    <p>{item.p}</p>
                  </div>
                </div>
              );
            })}
          {uniquteCatArr.map((category, i) => (
            <div
              className={`flavors-box ${category}-flavors`}
              key={category}
              ref={(el) => {
                props.catRefs && (props.catRefs.current![i] = el);
              }}
            >
              {signatureContent
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
                  (item: Record<string, any>) =>
                    item.category === category && (
                      <div className="cake-detail-card">
                        <img src={item.lsImg} alt="" />
                        <div className="cake-info-box">
                          <h3>{item.flav}</h3>
                          <p>{item.p}</p>
                          <div className="add-info">
                            <p>{txtPanelContent?.p}</p>

                            {location.pathname !== "/cupcakes" && (
                              <h4 className="cake-price">
                                {selectedMenuItem === "classic-flavors"
                                  ? item.category.includes(
                                      selectedMenuItem.replace("-flavors", "")
                                    )
                                    ? txtPanelContent?.h1
                                    : "$"
                                  : item.category.includes(
                                        selectedMenuItem!.replace(
                                          "-flavors",
                                          ""
                                        )
                                      )
                                    ? txtPanelContent?.h1Spec
                                    : "$"}
                              </h4>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default SignatureContent;
