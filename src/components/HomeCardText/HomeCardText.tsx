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
      {/* <div className="link-box">
        <Link
          className={
            props.cardContent.galleryLink.includes("/cupcakes")
              ? "hlf-col-btn cup"
              : "hlf-col-btn"
          }
          to={`${props.cardContent.galleryLink}`}
        >
          {`${props.cardContent.linkText}`}
        </Link>
        <p className={`sm-btn-line`}>&nbsp;</p>
      </div> */}
      <HomeBtn
        btnLink={props.cardContent.galleryLink}
        btnTxt={props.cardContent.linkText}
        secClass={"card-btn"}
      />
    </div>
  );
};

export default HomeCardText;
