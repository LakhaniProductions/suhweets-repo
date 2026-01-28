import { Link } from "react-router-dom";
import "./jumbotron.css";
import { JumbotronProps } from "./Jumbotron.types";
import { useEffect, useState } from "react";

const Jumbotron = (props: JumbotronProps) => {
  const [lineWidthClass, setLineWidthClass] = useState<string>("gallery");
  const [linkText, setLinkText] = useState<string>("view our gallery");
  let contentObj: Record<string, any>;
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
  // const getLinkText = () => {
  //   let linkText;

  //   return linkText;
  // };

  useEffect(() => {
    if (contentObj) {
      if (props.jumbotron === "signature") {
        setLinkText("view our cakes");
        setLineWidthClass("cakes-line");
      } else if (props.jumbotron === "cupcakes") {
        setLinkText("view our cupcakes");
        setLineWidthClass("cup-cakes-line");
      } else {
        setLinkText("view gallery");
        setLineWidthClass("gallery-line");
      }
    }
  }, [props.jumbotron]);

  return (
    <div className="jumbotron">
      {/* <h2 className="sub-heading-home">{contentObj!.subhead}</h2> */}
      <h2 className="sub-heading-home">the wedding cake</h2>
      {/* <h1 className="heading-home">{contentObj!.heading}</h1>*/}
      <h1 className="heading-home">of your dreams</h1>

      {/* <p className="body-text-home">{contentObj!.bodytxt}</p> */}
      <p className="body-text-home">
        Let us help you capture your vision. Browse our cakes and fall in love
        again!
      </p>

      <Link className="home-pg-links" to={contentObj!.galleryLink}>
        {linkText}
      </Link>

      <p className={`btn-home-line ${lineWidthClass}`}>&nbsp;</p>
    </div>
  );
};

export default Jumbotron;
