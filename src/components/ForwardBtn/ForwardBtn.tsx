import { Link, To } from "react-router-dom";

const ForwardBtn = (props: { link: To; linkTxt: string }) => {
  return (
    <Link to={props.link} className="nxt-pg-btn">
      {props.linkTxt} &rarr;
    </Link>
  );
};
export default ForwardBtn;
