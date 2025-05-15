import { useContext, useEffect, useRef } from "react";
import MenuContext from "../../context/HamburgerMenuContext";
import { Link } from "react-router-dom";
import { HamburgerMenuProps } from "./HamburgerMenuProps.types";
import "./hamburgermenu.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { PHONE_NUMBER } from "../../shared/constants/constants";

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const { width, height } = useWindowDimensions();
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const img4Ref = useRef<HTMLDivElement>(null);
  const img5Ref = useRef<HTMLDivElement>(null);
  const menuContext = useContext(MenuContext);

  const imgFadeIn = (refName: any, time: number) => {
    if (refName.current) {
      setTimeout(() => {
        menuContext.leftClass !== "" && (refName!.current!.id = "fade-in-img");
      }, time);
      menuContext &&
        menuContext.leftClass === "" &&
        (refName!.current!.id = "");
    }
  };

  useEffect(() => {
    imgFadeIn(img1Ref, 400);
    imgFadeIn(img2Ref, 800);
    imgFadeIn(img3Ref, 1200);
    imgFadeIn(img4Ref, 1600);
    imgFadeIn(img5Ref, 2000);
  }, [menuContext]);
  return (
    <div className={`hamburger-menu-container ${menuContext.BGClass}`}>
      <div className="test-bg">&nbsp;</div>
      <div className={`left-menu-container ${menuContext.leftClass}`}>
        <div className="img-gal-container">
          <div className=" col col-1">
            <div className="third" ref={img1Ref}></div>
            <div
              className={
                width <= 1800 && height <= 1100 ? "full-length" : "two-third"
              }
              ref={img4Ref}
            ></div>
          </div>
          <div className=" col col-2" ref={img2Ref}></div>
          <div className=" col col-3">
            <div className="half top-half" ref={img5Ref}></div>
            <div className="half bottom-half" ref={img3Ref}></div>
          </div>
        </div>
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear()} Suhweets Bakery
        </div>
      </div>
      <div className={`right-menu-container ${menuContext.rightClass}`}>
        <ul className="secondary-nav">
          <Link
            to="/about-us"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li>about us</li>
          </Link>
          <Link
            to="/contact-us"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li>contact us</li>
          </Link>
          <Link
            to="/serving-sizes/1-tier"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li>serving sizes</li>
          </Link>
          <Link
            to="/flavors/baker-favorites"
            onClick={() => {
              props.setMenuFade!({
                BGClass: "",
                rightClass: "",
                leftClass: ""
              });
            }}
          >
            <li>cake flavors</li>
          </Link>
        </ul>
        <div className="social-menu">
          <div className="top-soc-menu">
            <a
              href="https://www.facebook.com/suhweetsbakery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-facebook"></span>
            </a>
            <a
              href="https://www.instagram.com/suhweets07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-instagram"></span>
            </a>
            <a
              href="https://www.weddingwire.com/biz/suhweets-bakery-llc/dd34f44df4c1656d.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-weddingwire"></span>
            </a>
            <a
              href="https://www.theknot.com/marketplace/suhweets-bakery-llc-manassas-va-2057171"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-the_knot"></span>
            </a>
          </div>
          <div className="bottom-soc-menu">
            <div className="phone-container">
              <a href={`tel:${PHONE_NUMBER}`}>
                <span className="icon-phones"></span>
                {PHONE_NUMBER}
              </a>
            </div>
            <div className="mail-container">
              <a href="mailto:baker@suhweetsbakery.com">
                <span className="icon-mail"></span>
                {width <= 420 ? (
                  <div className="mail-col">
                    <span>baker</span>
                    <span>@suhweetsbakery.com</span>
                  </div>
                ) : (
                  "baker@suhweetsbakery.com"
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HamburgerMenu;
