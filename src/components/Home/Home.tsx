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

const Home = (props: HomeProps) => {
  const homeCardContent: Record<string, string>[] = [
    {
      subhead: "our",
      heading: "creations",
      bodytxt: "Custom cakes inspired by brilliant ideas like yours!",
      galleryLink: "/custom-cakes/all/0",
      linkText: "View gallery",
      image: `${customBG}`,
      secondaryImg: `${customLSBG}`,
      tertiaryImg: `${customSQ}`
    },
    {
      subhead: "baker's",
      heading: "style",
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
      bodytxt: "",
      galleryLink: "/cupcakes",
      linkFor: "cupcakes",
      linkText: "Shop cupcakes",
      image: `${customBG}`
    }
  ];

  return (
    <section className="home-container">
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass,
          rightClass: props.menuFade.rightClass,
          leftClass: props.menuFade.leftClass
        }}
      >
        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu />
        <Jumbotron
          btnLink={"/wedding-cakes/wedding/0"}
          btnTxt={"View gallery"}
        />
      </MenuContext.Provider>

      <div className="two-col-container">
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
