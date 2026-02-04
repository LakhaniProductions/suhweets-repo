import { Link } from "react-router-dom";
import { HomeBtnProps } from "./HomeBtn.type";
import "./homebtn.css";

const HomeBtn = (props: HomeBtnProps) => {
  return (
    <Link className={`home-btn ${props.secClass}`} to={`${props.btnLink}`}>
      {`${props.btnTxt}`}
    </Link>
  );
};

export default HomeBtn;
