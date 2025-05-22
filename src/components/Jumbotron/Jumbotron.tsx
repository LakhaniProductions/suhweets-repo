import { Link } from "react-router-dom";
import "./jumbotron.css";
import { JumbotronProps } from "./Jumbotron.types";

const Jumbotron = (props: JumbotronProps) => {
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
  const getLinkText = () => {
    let linkText;
    if (contentObj) {
      if (contentObj.linkFor === "signature") {
        linkText = "view our cakes";
      } else if (contentObj.linkFor === "cupcakes") {
        linkText = "view our cupcakes";
      } else {
        linkText = "view gallery";
      }
    }
    return linkText;
  };

  return (
    <div className="jumbotron">
      <h2 className="sub-heading-home">{contentObj!.subhead}</h2>
      <h1 className="heading-home">{contentObj!.heading}</h1>
      <p className="body-text-home">{contentObj!.bodytxt}</p>

      <Link className="home-pg-links" to={contentObj!.galleryLink}>
        {getLinkText()}
      </Link>

      <p className="btn-home-line">&nbsp;</p>
    </div>
  );
};

export default Jumbotron;
