// import { useContext } from "react";
// import { GalleryImgLoadContext } from "../../context/GalleryImgLoadContext";

import MenuContext from "../../context/HamburgerMenuContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Header from "../Header/Header";
import TextPanel from "../TextPanel/TextPanel";
// import Loader from "../Loader/Loader";
import { AboutProps } from "./About.type";
import "./about.css";
import Couple from "../../img/about/temp-couple-img.jpg";
import Award1 from "../../img/about/award1.jpg";
import Award2 from "../../img/about/award2.jpg";
import Mission from "../../img/about/temp-mission.jpg";

const About = (props: AboutProps) => {
  // const context = useContext(GalleryImgLoadContext);
  // if (!context) {
  //   return;
  // }
  // const { showLoadingGif } = context;

  return (
    <section className="container about-container">
      <MenuContext.Provider
        value={{
          BGClass: props.menuFade.BGClass,
          rightClass: props.menuFade.rightClass,
          leftClass: props.menuFade.leftClass
        }}
      >
        {/* {showLoadingGif && <Loader />} */}
        <Header setMenuFade={props.setMenuFade} />
        <HamburgerMenu />
      </MenuContext.Provider>
      <div className="about-scroll-container">
        <div className="about-content">
          <TextPanel
            h2={"about"}
            h1={"suhweets"}
            p={
              "We’re an award-winning, couple-owned cake shop that specializes in elegant and artistic cakes for all celebrations. In addition to crafting the most beautiful designs possible, we pride ourselves on producing delicious cakes that are made completely from scratch with the freshest ingredients. Founded and located in the historic town of Manassas, we’ve grown to serve the greater Virginia, D.C., and Maryland area. We’ve even made cakes internationally—in Costa Rica and Panama!"
            }
            widthClass={"about"}
            // layout={twoColLayout}
          />

          <div className="about-img-container">
            <div className="founder-container">
              <img
                className="founders-img"
                src={Couple}
                alt="Founders Suhei and Adnan in front of their bakery"
              />
            </div>
            <div className="awards">
              <img className="award-1" src={Award1} alt="" />
              <img className="award-2" src={Award2} alt="" />
            </div>
          </div>
        </div>
        <div className="story-row">
          <div className="os-container">
            <img src={Mission} alt="" />
            <div className="text-group">
              <h3>
                Our Mission: Helping YOU Express Your Love and Elevate Your
                Celebrations
              </h3>
              <p>
                We do this by providing a hassle-free, smooth, and{" "}
                <span className="italic">Suhweet </span>
                experience — from your first cake tasting to the unforgettable
                moment your custom creation arrives at the table.
              </p>
            </div>
          </div>

          <div className="os-container">
            <div className="text-group">
              <h3>Our Story</h3>
              <p>
                Established in 2016, Suhweets began with a Tres Leches cake and
                grew into something beyond our wildest dreams. Since that first
                cake, founder and baker Suhei set off on a mission to learn as
                much as she could about creating delicious and exciting works of
                art. It wasn’t long before one birthday cake became two, and
                birthdays turned into weddings. Eventually, what began in our
                home kitchen led to the opening of our first storefront in 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
