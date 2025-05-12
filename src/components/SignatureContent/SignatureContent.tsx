import { useContext, useEffect, useState } from "react";
import { SignatureContentProps } from "./SignatureContentProps.type";
import TextPanel from "../TextPanel/TextPanel";
import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";
import { useLocation } from "react-router-dom";

const SignatureContent = (props: SignatureContentProps) => {
  const context = useContext(GalleryImgLoadContext);
  if (!context) {
    return;
  }
  const location = useLocation();
  // const { setShowLoadingFlavorGif } = context;

  const flavorImages = Object.values(
    import.meta.glob("../../img/cakeflavors/*.{png,jpg,jpeg}", {
      eager: true,
      as: "url"
    })
  );
  const signatureContent = [
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
      desc: "your choice of Rich vanilla or chocolate cake layers with hazelnut ganache"
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
      flav: "chocolate indulgence",
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
      flav: "lemon blueberry",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      desc: "lemon blueberry cake with vanilla cream cheese"
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
      flav: "chocolate indulgence",
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
      flav: "lemon blueberry",
      img: flavorImages.find((img) => img.includes("chocolate")),
      lsImg: flavorImages.find((img) => img.includes("one-col")),
      bgimg: flavorImages.find((img) => img.includes("chocolate-small")),
      desc: "lemon blueberry cake with vanilla cream cheese"
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
    }
  ];

  // const [imgLoaded, setImgLoaded] = useState(false);
  const [txtPanelContent, setTxtPanelContent] = useState<Record<string, any>>();

  useEffect(() => {
    location.pathname !== "/cupcakes"
      ? setTxtPanelContent({
          p: "Serves 8",
          h1: "$35",
          h2: "5 inch"
        })
      : setTxtPanelContent({
          p: "An assorment of delectable flavors to choose from ",
          h1: "cupcakes",
          h2: "our"
        });
  }, [location]);

  useEffect(() => {
    if (props.html === '6"') {
      setTxtPanelContent(() => ({
        p: "Serves 12",
        h1: "$50",
        h2: "6 inch"
      }));
    } else if (props.html === '8"') {
      setTxtPanelContent(() => ({
        p: "Serves 20",
        h1: "$100",
        h2: "8 inch"
      }));
    } else if (props.html === '10"') {
      setTxtPanelContent(() => ({
        p: "Serves 35",
        h1: "$150",
        h2: "10 inch"
      }));
    }
  }, [props.html]);

  // useEffect(() => {
  //   imgLoaded && setShowLoadingFlavorGif(false);
  // }, [imgLoaded]);

  console.log(flavorImages);

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
                  <img src={`${item.lsImg}`} alt="" />
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
