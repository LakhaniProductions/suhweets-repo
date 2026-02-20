import { Link } from "react-router-dom";
import "./breadcrumbMenu.css";
import { BreadcrumbMenuProps } from "./BreadcrumbMenuProps.types";

const BreadcrumbMenu = (props: BreadcrumbMenuProps) => {
  return (
    <div className="bread-crumb-container">
      {props.data.map((item: { url: string; linkText: string }, i) =>
        i < props.data.length - 1 ? (
          <>
            <Link to={item.url}>{item.linkText}</Link>
            <span>&gt;</span>
          </>
        ) : (
          <p className="active-crumb">{item.linkText}</p>
        )
      )}
    </div>
  );
};
export default BreadcrumbMenu;
