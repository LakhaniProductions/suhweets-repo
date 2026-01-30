import "./homecard.css";
import { HomeCardProps } from "./HomeCard.types";
import HomeCardText from "../HomeCardText/HomeCardText";

const HomeCard = (props: HomeCardProps) => {
  return (
    <div className="half-container">
      <div className="grad"></div>
      <img src={props.cardContent.image} alt="" />
      <HomeCardText cardContent={props.cardContent} />
    </div>
  );
};

export default HomeCard;
