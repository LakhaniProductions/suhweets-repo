// import { useContext, useEffect } from "react";
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
import Tres from "../../img/about/tres-temp.jpg";
import Store from "../../img/about/temp-storefront.jpg";
import Portrait from "../../img/about/portrait.jpg";
import Portrait2 from "../../img/about/portrait-2.jpg";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const About = (props: AboutProps) => {
  const { width } = useWindowDimensions();
  // const context = useContext(GalleryImgLoadContext);
  // if (!context) {
  //   return;
  // }
  // const { showLoadingGif } = context;

  const Arrow1 = (props: { className: string }) => {
    return (
      <svg
        className={props.className}
        data-name="Layer 1"
        // width="2.75in"
        // height=".62in"
        viewBox="0 0 198.17 44.89"
      >
        <path
          d="M174.6,20.31c-.36-.43-.73-.86-1.09-1.28-2.59-2.96-5.12-5.97-7.23-9.31-1.09-1.73-2.03-3.54-2.44-5.55-.26-1.27-.37-2.59.85-3.47,1.18-.85,2.42-.49,3.59.12,2.11,1.1,3.9,2.63,5.53,4.33,6.41,6.7,12.56,13.63,18.05,21.11.94,1.28,1.97,2.45,3.2,3.48,1.96,1.66,3.59,3.58,2.99,6.4-.62,2.94-2.97,4.08-5.54,4.76-4.51,1.19-9.17,1.58-13.78,2.24-3.62.52-7.25,1-10.88,1.51-2.44.35-4.85.34-7.27-.26-1.31-.33-2.67-.44-4-.7-1.98-.39-3.17-1.49-3.39-3.04-.23-1.63.66-2.99,2.48-3.96,4.93-2.62,10.18-3.89,15.75-3.88.68,0,1.35-.1,2.02-.17.12-.01.23-.1.35-.16-.03-.3-.25-.39-.46-.45-10.24-2.85-19.49-8.18-29.42-11.8-13.13-4.78-26.51-8.56-40.5-9.65-20.8-1.62-41.24.42-61.28,6.35-11.39,3.37-22.39,7.69-32.83,13.37-2.51,1.36-4.98,2.77-7.27,4.46-.46.34-.91.67-1.47.32-.64-.41-.64-1.06-.46-1.7.4-1.43,1.28-2.58,2.24-3.67,3.03-3.47,6.65-6.22,10.6-8.58,8.43-5.03,17.47-8.65,26.73-11.81C56.58,3.56,73.99.62,91.81.07c20.09-.62,39.5,3.01,58.33,9.88,5.01,1.83,9.94,3.87,14.91,5.8,3.28,1.27,6.43,2.79,9.55,4.55"
          fill="currentColor"
          fill-rule="evenodd"
        />
      </svg>
    );
  };

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
              "We’re an award-winning cake shop that specializes in elegant and artistic cakes for all celebrations. We pride ourselves in producing delicious cakes that are made completely from scratch with the freshest ingredients."
            }
          />

          <div className="about-img-container">
            <div className="founder-container">
              <img
                className="founders-img"
                src={Couple}
                alt="Founders Suhei and Adnan in front of their bakery"
              />
            </div>
            {width > 1680 && (
              <div className="awards">
                <img className="award-1" src={Award1} alt="" />
                <img className="award-2" src={Award2} alt="" />
              </div>
            )}
          </div>
        </div>
        <div className="story-row">
          <div className="os-container first-row">
            <img src={Mission} alt="" />
            <div className="text-group tg-row-1">
              <h3>
                Our Mission: Helping YOU Express Your Love and Elevate Your
                Celebrations
              </h3>
              <p>
                We want you focused on making your love felt on your big day,
                whatever celebration that may be, that's why we provide an
                hassle-free, smooth, and&nbsp;
                <span className="italic">Suhweet </span>
                experience — from your first cake tasting to the unforgettable
                moment your custom creation arrives at the table.
              </p>
            </div>
          </div>

          <div className="os-container second-row">
            <div className="text-group tg-row-2">
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
            <div className="os-img-group">
              <div>
                <p className="tres-label">The 1st Cake</p>
                <span>{<Arrow1 className={"arr-1"} />}</span>
                <img src={Tres} alt="" />
              </div>

              <div>
                <img className="store-img" src={Store} alt="" />
                <span>{<Arrow1 className={"arr-2"} />}</span>
                <p className="store-label">The Storefront</p>
              </div>
            </div>
          </div>

          <div className="os-container third-row">
            {width > 1650 && <img src={Portrait} alt="" />}
            {width <= 1650 && width > 1100 && (
              <div className="res-img-row">
                <img src={Portrait} alt="" />
                <img src={Portrait2} alt="" className="coFounder" />
              </div>
            )}

            <div className="text-group tg-row-3">
              <div>
                {width <= 1100 && <img src={Portrait} alt="" />}

                <h3>
                  <span>Suh</span>ei Lakhani
                </h3>
                <h4>Baker & Founder</h4>
                <p>
                  In 2014, with a desire for a new, immersive experience, Suhei
                  left her home country of Panama to pursue her dream of
                  learning English. Little did she know that what was meant to
                  be a temporary visit to the U.S. would become a permanent
                  stay.
                  <br />
                  <br />
                  With no intention whatsoever, Suhei made her first cake for
                  family and friends and was met with praise. Comments like “You
                  should sell these!” began to emerge, and with a little
                  encouragement from her husband, she began to pursue baking
                  full-time. Since then, Suhei has embarked on a journey of
                  self-teaching—first mastering the science of baking, then the
                  art of cake decorating and design.
                  <br />
                  <br />
                  Through sheer dedication and passion, Suhei grew what began in
                  her home kitchen into a business that took her around the
                  globe making wedding cakes, and eventually led to opening her
                  first storefront. Who knows where she’ll go next!
                </p>
              </div>
              <div>
                {width <= 1100 && (
                  <img src={Portrait2} alt="" className="coFounder" />
                )}

                <h3>Adnan Lakhani</h3>
                <h4>Cake Taster & Co-founder </h4>
                <p>
                  Beyond eating all the cake—what he likes to call "quality
                  assurance"—and providing moral support to his amazing wife,
                  Adnan is also responsible for all things digital, like graphic
                  design, web development, and SEO.
                </p>
              </div>
            </div>
            {width > 1650 && (
              <img src={Portrait2} alt="" className="coFounder" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
