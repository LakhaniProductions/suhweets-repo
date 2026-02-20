// import { Link } from "react-router-dom";
import "../HomeCard/homecard.css";
import { HomeCardTextProps } from "./HomeCardText.types";
import HomeBtn from "../HomeBtn/HomeBtn";

const HomeCardText = (props: HomeCardTextProps) => {
  return (
    <div className={`card-txt ${props.altClass}`}>
      <h4>{props.cardContent.subhead}</h4>
      <h3>{props.cardContent.heading}</h3>
      <p className="card-txt-p">{props.cardContent.bodytxt}</p>

      <HomeBtn
        btnLink={props.cardContent.galleryLink}
        btnTxt={props.cardContent.linkText}
        secClass={"card-btn"}
      />
    </div>
  );
};

export default HomeCardText;
