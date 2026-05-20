import { Link, To, useLocation } from "react-router-dom";

const ForwardBtn = (props: { link: To; linkTxt: string }) => {
  const location = useLocation();
  return (
    <Link
      to={props.link}
      state={{ prevPath: location.pathname }}
      className="nxt-pg-btn"
    >
      {props.linkTxt} &rarr;
    </Link>
  );
};
export default ForwardBtn;
