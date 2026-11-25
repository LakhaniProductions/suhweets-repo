import { useEffect, useState } from "react";
import { SignatureContentProps } from "./SignatureContentProps.type";

import { Link, useLocation } from "react-router-dom";
import { DESIGN_CONT } from "../../shared/constants/constants";

const SignatureContent = (props: SignatureContentProps) => {
  const location = useLocation();

  const flavorImages = Object.values(
    import.meta.glob("../../img/signaturecakes/*.{png,jpg,jpeg}", {
      eager: true,
      as: "url"
    })
  );
  // console.log(flavorImages);
  const signatureContent = DESIGN_CONT;
  const cupcakeContent = [
    {
      category: "daily",
      flav: "tres leches (three milks)",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "Vanilla cake soaked in sweetened condensed milk, evaporated milk, and whole milk."
    },
    {
      category: "daily",
      flav: "hazelnut",
      img: flavorImages.find((img) => img.includes("strawberry")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("strawberry-small")),
      p: "your choice of rich vanilla or chocolate cake layers with hazelnut ganache"
    },
    {
      category: "daily",
      flav: "vanilla dream",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "adf"
    },
    {
      category: "daily",
      flav: "funfetti",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "adf"
    },
    {
      category: "daily",
      flav: "spiced carrot",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "adf"
    },
    {
      category: "daily",
      flav: "german chocolate",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small"))
    },
    {
      category: "pre-order",
      flav: "chocolate delight",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "adf"
    },
    {
      category: "pre-order",
      flav: "Red Velvet",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "adf"
    },
    {
      category: "pre-order",
      flav: "lemon raspberry",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "lemon raspberry cake with vanilla cream cheese"
    },
    {
      category: "pre-order",
      flav: "strawberry shortcake",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "vanilla cake with whipped cream and fresh strawberries"
    },
    {
      category: "pre-order",
      flav: "strawberry crunch",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "strawberry and vanilla cake layers with strawberry cream cheese and strawberry shortbread crunchies"
    },
    {
      category: "pre-order",
      flav: "strawberry delight",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      p: "strawberry and vanilla cake layers with strawberry cream cheese and strawberry shortbread crunchies"
    }
  ];
  const allCupCategories = cupcakeContent.map((item) => item.category);
  const uniqueCupCatArr = [...new Set(allCupCategories)];

  const [txtPanelContent, setTxtPanelContent] = useState<Record<string, any>>();

  useEffect(() => {
    location.pathname === "/cupcakes"
      ? setTxtPanelContent({
          p: "An assorment of delectable flavors to choose from ",
          h1: "cupcakes",
          h2: "our"
        })
      : setTxtPanelContent({
          p: "from ",
          h1: "$100"
        });
  }, [location]);

  return (
    <>
      {
        <div className="signature-cakes-container">
          {location.pathname.includes("/cupcakes") &&
            uniqueCupCatArr.map((category, i) => (
              <div
                className={`flavors-box ${category}`}
                key={category}
                ref={(el) => {
                  props.catRefs && (props.catRefs!.current![i] = el);
                }}
              >
                {cupcakeContent
                  .sort((a, b) => {
                    if (a.flav < b.flav) {
                      return -1;
                    }
                    if (a.flav > b.flav) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((item: Record<string, any>) => {
                    return (
                      item.category === category && (
                        <div className="cake-detail-card">
                          <img src={item.lsImg} alt="" />
                          <div className="cake-info-box">
                            <div className="cake-heading-box">
                              <h3>{item.flav}</h3>
                            </div>
                            <p>{item.p}</p>
                            {item.category.replace("-", "") === "preorder" && (
                              <p>Minimum: 1 Dozen</p>
                            )}
                          </div>
                        </div>
                      )
                    );
                  })}
              </div>
            ))}
          {location.pathname.includes("/signature-cakes") && (
            <div className="flavors-box">
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
                .map((item: Record<string, any>) => (
                  <Link
                    to={`/signature-form/${item.flav.toLowerCase().split("-")[0]}`}
                  >
                    <div className="cake-detail-card">
                      <img src={item.lsImg} alt="" />
                      <div className="cake-info-box">
                        <h3>{item.flav.replace("-", " ")}</h3>
                        {/* <p>{item.p}</p> */}
                        <div className="add-info">
                          <p>{txtPanelContent?.p}</p>

                          {
                            <h4 className="cake-price">
                              {txtPanelContent?.h1}
                            </h4>
                          }
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      }
    </>
  );
};

export default SignatureContent;
