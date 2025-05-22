import { useContext, useEffect, useState } from "react";
import TextPanel from "../TextPanel/TextPanel";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import { useLocation, useParams } from "react-router-dom";

const SignatureContent = () => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const location = useLocation();
  const { selectedMenuItem } = useParams();

  // const { setShowLoadingFlavorGif } = context;

  const flavorImages = Object.values(
    import.meta.glob("../../img/signaturecakes/*.{png,jpg,jpeg}", {
      eager: true,
      as: "url"
    })
  );
  const signatureContent = [
    {
      flav: "Biscoff",
      lsImg: flavorImages.find((img) => img.includes("biscoff")),
      desc: "Vanilla cake soaked in sweetened condensed milk, evaporated milk, and whole milk."
    },
    {
      flav: "Carrot",
      lsImg: flavorImages.find((img) => img.includes("carrot")),
      desc: "Vanilla cake soaked in sweetened condensed milk, evaporated milk, and whole milk."
    },
    {
      flav: "tres leches (three milks)",
      lsImg: flavorImages.find((img) => img.includes("biscoff")),
      desc: "Vanilla cake soaked in sweetened condensed milk, evaporated milk, and whole milk."
    },
    {
      flav: "hazelnut",
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      desc: "your choice of Rich vanilla or chocolate cake layers with hazelnut ganache"
    },
    {
      flav: "vanilla dream",
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      desc: "adf"
    },
    {
      flav: "funfetti",
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      desc: "adf"
    },
    {
      flav: "spiced carrot",
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      desc: "adf"
    },
    {
      flav: "german chocolate",
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small"))
    },
    {
      flav: "chocolate delight",
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      desc: "adf"
    },
    {
      flav: "Red Velvet",
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      desc: "adf"
    },
    {
      flav: "lemon raspberry",
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      desc: "lemon raspberry cake with vanilla cream cheese"
    },
    {
      flav: "strawberry shortcake",
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      desc: "vanilla cake with whipped cream and fresh strawberries"
    },
    {
      flav: "strawberry crunch",
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      desc: "strawberry and vanilla cake layers with strawberry cream cheese and strawberry shortbread crunchies"
    },
    {
      flav: "strawberry delight",
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      desc: "strawberry and vanilla cake layers with strawberry cream cheese and strawberry shortbread crunchies"
    }
  ];

  const cupcakeContent = [
    {
      flav: "tres leches (three milks)",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      desc: "Vanilla cake soaked in sweetened condensed milk, evaporated milk, and whole milk."
    },
    {
      flav: "hazelnut",
      img: flavorImages.find((img) => img.includes("strawberry")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("strawberry-small")),
      desc: "your choice of rich vanilla or chocolate cake layers with hazelnut ganache"
    },
    {
      flav: "vanilla dream",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      desc: "adf"
    },
    {
      flav: "funfetti",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      desc: "adf"
    },
    {
      flav: "spiced carrot",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      desc: "adf"
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
      desc: "adf"
    },
    {
      flav: "Red Velvet",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      desc: "adf"
    },
    {
      flav: "lemon raspberry",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      desc: "lemon raspberry cake with vanilla cream cheese"
    },
    {
      flav: "strawberry shortcake",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      desc: "vanilla cake with whipped cream and fresh strawberries"
    },
    {
      flav: "strawberry crunch",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      desc: "strawberry and vanilla cake layers with strawberry cream cheese and strawberry shortbread crunchies"
    },
    {
      flav: "strawberry delight",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      desc: "strawberry and vanilla cake layers with strawberry cream cheese and strawberry shortbread crunchies"
    }
  ];

  // const [imgLoaded, setImgLoaded] = useState(false);
  const [txtPanelContent, setTxtPanelContent] = useState<Record<string, any>>();

  useEffect(() => {
    location.pathname !== "/cupcakes"
      ? setTxtPanelContent({
          p: "Serves 12",
          h1: "$50",
          h2: "6 inch"
        })
      : setTxtPanelContent({
          p: "An assorment of delectable flavors to choose from ",
          h1: "cupcakes",
          h2: "our"
        });
  }, [location]);

  useEffect(() => {
    if (selectedMenuItem === "6-inch") {
      setTxtPanelContent(() => ({
        p: "Serves 12",
        h1: "$50",
        h2: "6 inch"
      }));
    } else if (selectedMenuItem === "8-inch") {
      setTxtPanelContent(() => ({
        p: "Serves 20",
        h1: "$100",
        h2: "8 inch"
      }));
    } else if (selectedMenuItem === "10-inch") {
      setTxtPanelContent(() => ({
        p: "Serves 35",
        h1: "$150",
        h2: "10 inch"
      }));
    }
  }, [selectedMenuItem]);

  // useEffect(() => {
  //   imgLoaded && setShowLoadingFlavorGif(false);
  // }, [imgLoaded]);

  return (
    <>
      <TextPanel
        h2={txtPanelContent?.h2}
        h1={txtPanelContent?.h1}
        p={txtPanelContent?.p}
        widthClass={
          location.pathname !== "/cupcakes"
            ? "signature-details"
            : "cupcake-details"
        }
      />

      <>
        {
          <div className="signature-cakes-container">
            {(location.pathname !== "/cupcakes"
              ? signatureContent
              : cupcakeContent
            ).map((item: Record<string, any>) => {
              return (
                <div className="cake-detail-card">
                  <img src={item.lsImg} alt="" />
                  <div className="cake-info-box">
                    <h3>{item.flav}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        }
      </>
    </>
  );
};

export default SignatureContent;
