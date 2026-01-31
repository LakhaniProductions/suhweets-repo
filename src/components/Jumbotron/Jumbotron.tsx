import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./jumbotron.css";
import wedding from "../../img/home-backgrounds/weddingnew.jpg";
import weddingPort from "../../img/home-backgrounds/weddingport.jpg";
import { useEffect, useState } from "react";

const Jumbotron = () => {
  const { width, height } = useWindowDimensions();
  const [imgSRC, setImgSRC] = useState(wedding);
  useEffect(() => {
    if (width <= 660) {
      setImgSRC(weddingPort);
    } else {
      setImgSRC(wedding);
    }
  }, [width, height]);
  return (
    <div className="jumbotron">
      <div className="jumbo-txt-box">
        <h2 className="sub-heading-home">a day you'll </h2>

        <h1 className="heading-home">never forget</h1>

        <p className="body-text-home">
          Let us help you capture your vision. <br></br> Browse our cakes and
          fall in love again!
        </p>
        <div className="jumbo-link-box">
          <Link className="home-pg-links" to={"/wedding-cakes/wedding/0"}>
            View Gallery
          </Link>

          <p className={`btn-home-line gallery-line`}>&nbsp;</p>
        </div>
      </div>
      <div className="jumbo-grad"></div>
      <img src={imgSRC} alt="" />
    </div>
  );
};

export default Jumbotron;
