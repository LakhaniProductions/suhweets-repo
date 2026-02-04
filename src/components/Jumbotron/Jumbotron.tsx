import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./jumbotron.css";
import wedding from "../../img/home-backgrounds/weddingnew.jpg";
import weddingPort from "../../img/home-backgrounds/weddingport.jpg";
import { useEffect, useState } from "react";
import HomeBtn from "../HomeBtn/HomeBtn";
import { JumbotronProps } from "./Jumbotron.types";

const Jumbotron = (props: JumbotronProps) => {
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
        <HomeBtn
          btnLink={props.btnLink}
          btnTxt={props.btnTxt}
          secClass={"jumbo-btn"}
        />
      </div>
      <div className="jumbo-grad"></div>
      <img src={imgSRC} alt="" />
    </div>
  );
};

export default Jumbotron;
