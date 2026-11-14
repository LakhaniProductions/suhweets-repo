import { HomeProps } from "./Home.types";
// import weddingPort from "../../img/home-backgrounds/weddingport.jpg";
import signature from "../../img/home-backgrounds/signature.jpg";

import "./home.css";
import Jumbotron from "../Jumbotron/Jumbotron";
import MenuContext from "../../context/HamburgerMenuContext";
import Header from "../Header/Header";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import HomeCard from "../HomeCard/HomeCard";
import customBG from "../../img/home-backgrounds/custom-half.jpg";
import customLSBG from "../../img/home-backgrounds/custom-ls.jpg";
import customSQ from "../../img/home-backgrounds/custom-square.jpg";
import cupcakes from "../../img/home-backgrounds/cupcakes.jpg";
import HomeCardText from "../HomeCardText/HomeCardText";
import Footer from "../Footer/Footer";
import { Ref, useContext, useEffect } from "react";
import { GlobalLoadingContext } from "../../context/GlobalLoadingContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Home = (props: HomeProps) => {
  const menuContext = useContext(MenuContext);
  if (!menuContext) {
    return;
  }
  const globalContext = useContext(GlobalLoadingContext);
  if (!globalContext) {
    return;
  }

  const homeRef: Ref<HTMLElement | any> = globalContext.containerRef;

  const homeCardContent: Record<string, string>[] = [
    {
      subhead: "",
      heading: "custom cakes",
      bodytxt: "Our creations inspired by brilliant ideas like yours!",
      galleryLink: "/custom-cakes/birthday/0",
      linkText: "View gallery",
      image: `${customBG}`,
      secondaryImg: `${customLSBG}`,
      tertiaryImg: `${customSQ}`
    },
    {
      subhead: "",
      heading: "signature cakes",
      bodytxt:
        "A collection of signature cakes that are as delicious as they are stunning",
      galleryLink: "/signature-cakes/6-inch",
      linkText: "Shop cakes",
      image: `${signature}`,
      secondaryImg: `${customLSBG}`,
      tertiaryImg: `${customSQ}`
    },
    {
      subhead: "",
      heading: "cupcakes",
      bodytxt: "A collection of beautiful cupcakes",
      galleryLink: "/cupcakes/daily",
      linkFor: "cupcakes",
      linkText: "Shop cupcakes",
      image: `${customBG}`
    }
  ];

  const { width } = useWindowDimensions();

  useEffect(() => {
    props.setMenuFade({
      BGClass: ""
    });
  }, [menuContext.BGClass]);

  useEffect(() => {}, [width]);

  return (
    <section className="home-container" ref={homeRef}>
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass
        }}
      >
        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu setMenuFade={props.setMenuFade} />

        <Jumbotron
          btnLink={"/wedding-cakes/wedding/0"}
          btnTxt={"View gallery"}
        />
      </MenuContext.Provider>

      <div className="two-col-container">
        {width > 1280 && (
          <div className="wd-192">
            <HomeCardText cardContent={homeCardContent[0]} />
            <HomeCardText cardContent={homeCardContent[1]} />
          </div>
        )}
        <HomeCard cardContent={homeCardContent[0]} />
        <HomeCard cardContent={homeCardContent[1]} />
      </div>

      <div className="hor-card">
        <HomeCardText
          cardContent={homeCardContent[2]}
          altClass={"card-txt-cntr"}
        />
        <div className="hor-img-box">
          <img className="home-cupcakes" src={cupcakes} alt="" />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
