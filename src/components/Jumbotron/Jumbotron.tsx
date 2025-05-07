import { Link } from "react-router-dom";
import "./jumbotron.css";
import { JumbotronProps } from "./Jumbotron.types";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Jumbotron = (props: JumbotronProps) => {
  const { width } = useWindowDimensions();
  const [showShrtBdyTxt, setShowShrtBdyTxt] = useState(false);
  const [shrtBdyTxt, setShrtBdyTxt] = useState<string>("");
  let contentObj;
  {
    props.content.map((content) =>
      Object.keys(content).filter((key) => {
        if (key === "linkFor") {
          if (content[key] === props.jumbotron) {
            contentObj = content;
            return contentObj;
          }
        }
      })
    );
  }
  useEffect(() => {
    width <= 926 ? setShowShrtBdyTxt(true) : setShowShrtBdyTxt(false);
  }, [width]);

  useEffect(() => {
    props.content.map((content) =>
      content.linkFor === props.jumbotron &&
      props.jumbotron === "wedding" &&
      showShrtBdyTxt
        ? setShrtBdyTxt(content.bodytxt.slice(11))
        : ""
    );
  }, [showShrtBdyTxt]);
  return (
    <div className="jumbotron">
      <h2 className="sub-heading-home">{contentObj!.subhead}</h2>
      <h1 className="heading-home">{contentObj!.heading}</h1>
      <p className="body-text-home">
        {props.jumbotron === "wedding" && showShrtBdyTxt
          ? shrtBdyTxt
          : contentObj!.bodytxt}
      </p>

      <Link className="home-pg-links" to={contentObj!.galleryLink}>
        view gallery
      </Link>

      <p className="btn-home-line">&nbsp;</p>
    </div>
  );
};

export default Jumbotron;
