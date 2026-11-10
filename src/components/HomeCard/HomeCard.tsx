import "./homecard.css";
import { HomeCardProps } from "./HomeCard.types";
import HomeCardText from "../HomeCardText/HomeCardText";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useEffect, useState } from "react";

const HomeCard = (props: HomeCardProps) => {
  const { width } = useWindowDimensions();
  const [imgSRC, setImgSRC] = useState(props.cardContent.image);
  useEffect(() => {
    if (width <= 1280 && width > 660) {
      setImgSRC(props.cardContent.secondaryImg);
    } else if (width <= 660) {
      setImgSRC(props.cardContent.tertiaryImg);
    } else {
      setImgSRC(props.cardContent.image);
    }
  }, [width]);

  return (
    <div className="half-container">
      <div className="grad"></div>
      <img src={imgSRC} alt="" />
      {width <= 1280 && <HomeCardText cardContent={props.cardContent} />}
    </div>
  );
};

export default HomeCard;
