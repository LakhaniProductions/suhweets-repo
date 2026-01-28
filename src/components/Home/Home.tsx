import { HomeProps } from "./Home.types";
import weddingBG from "../../img/home-backgrounds/wedding-1.jpg";
import customBG from "../../img/home-backgrounds/wedding.jpg";
import signature from "../../img/home-backgrounds/signature.jpg";

import "./home.css";
import Jumbotron from "../Jumbotron/Jumbotron";
import MenuContext from "../../context/HamburgerMenuContext";
import Header from "../Header/Header";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = (props: HomeProps) => {
  const location = useLocation();
  const [homeMenu, setHomeMenu] = useState<string[]>([]);
  const [jumbotron, setJumbotron] = useState<string>("wedding");
  const jumbotronContent: Record<string, string>[] = [
    {
      subhead: "the wedding cake",
      heading: " of your dreams",
      bodytxt:
        "Let us help you capture your vision. Browse our cakes and fall in love again!",
      galleryLink: "/wedding-cakes/wedding/0",
      linkFor: "wedding"
    },
    {
      subhead: "one step closer",
      heading: "to the first slice",
      bodytxt:
        "View an assortment of custom cakes inspired by brilliant ideas like yours!",
      galleryLink: "/custom-cakes/all/0",
      linkFor: "custom"
    },
    {
      subhead: "baker's",
      heading: "Choice",
      bodytxt:
        "A collection of signature cakes that are as delicious as they are stunning",
      galleryLink: "/signature-cakes/6-inch",
      linkFor: "signature"
    },
    {
      subhead: "our best",
      heading: "cupcakes",
      bodytxt:
        "View our assortment of custom cakes inspired by brilliant ideas of dreamers just like you!",
      galleryLink: "/cupcakes",
      linkFor: "cupcakes"
    }
  ];

  /* CREATE HOME MENU OPTIONS */
  {
    jumbotronContent.length !== homeMenu.length &&
      jumbotronContent.map((card) =>
        setHomeMenu((prevState: string[]) => {
          return [...prevState, card.linkFor];
        })
      );
  }

  let imgStyle;

  if (jumbotron === "wedding") {
    imgStyle = `linear-gradient(to right, rgba(255, 255, 255, 0.93), rgba(255, 255, 255, 0.3)), url(${weddingBG})`;
  } else if (jumbotron === "custom") {
    imgStyle = `linear-gradient(to right, rgba(255, 255, 255, 0.93), rgba(255, 255, 255, 0.3)), url(${customBG})`;
  } else {
    imgStyle = `linear-gradient(to right, rgba(255, 255, 255, 0.93), rgba(255, 255, 255, 0.3)), url(${signature})`;
  }

  useEffect(() => {
    setJumbotron(homeMenu[0]);
  }, [location]);

  return (
    <section className="container">
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass,
          rightClass: props.menuFade.rightClass,
          leftClass: props.menuFade.leftClass
        }}
      >
        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu />
        <Jumbotron />
      </MenuContext.Provider>

      <div
        className="bg-img-container"
        style={{ backgroundImage: `${imgStyle}` }}
      ></div>
    </section>
  );
};

export default Home;
