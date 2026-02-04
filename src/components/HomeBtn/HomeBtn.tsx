import { Link } from "react-router-dom";
import { HomeBtnProps } from "./HomeBtn.type";
import "./homebtn.css";

const HomeBtn = (props: HomeBtnProps) => {
  return (
    <Link
      className={`home-btn ${props.secClass}`}
      to={"/wedding-cakes/wedding/0"}
    >
      View Gallery
    </Link>
  );
};

export default HomeBtn;
