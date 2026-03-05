import { SyntheticEvent, useEffect, useState } from "react";
import { PageNavProps } from "./PageNavProps.type";

import { useLocation, useNavigate, useParams } from "react-router-dom";

const PageNav = (props: PageNavProps) => {
  const location = useLocation();

  const { selectedMenuItem, size } = useParams();

  // const [active, setActive] = useState("0");
  const navigate = useNavigate();
  const [isCupPg, setIsCupPg] = useState(false);

  const handleClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    const clicked = target.closest(".navigation-item");
    if (!clicked) return;

    const cleanParam = clicked.innerHTML.replace(
      /<\/?(div|span)>|&nbsp;/gi,
      ""
    );
    if (location.pathname.includes("serving-sizes")) {
      if (
        location.pathname
          .toUpperCase()
          .includes(cleanParam.replace(" ", "-").toUpperCase())
      ) {
        return;
      } else {
        navigate(
          `/serving-sizes/${cleanParam.replace(" ", "-").toLowerCase()}`
        );
      }
    } else if (
      location.pathname.includes("/flavors") &&
      !location.pathname.includes("signature-cakes")
    ) {
      navigate(`/flavors/${cleanParam.replace(" ", "-").toLowerCase()}`);
    } else if (location.pathname.includes("/custom-cakes")) {
      navigate(`/custom-cakes/${cleanParam.toLowerCase()}`);
    } else if (location.pathname.includes("cupcakes")) {
      cleanParam.toLowerCase().includes("available")
        ? navigate("/cupcakes/daily")
        : navigate("/cupcakes/pre-order");
    } else {
      navigate(
        `/signature-cakes/${target.innerHTML.replace(" ", "-").toLowerCase()}/${size?.replace(`"`, "-inch")}`
      );
    }
  };

  const handleAltClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    navigate(
      `/signature-cakes/${selectedMenuItem}/${target.innerHTML.replace(`"`, "-inch ")}`
    );
  };
  const getClassName = () => {
    if (location.pathname.includes("signature-cakes")) {
      if (props.secClass) {
        return `navigation ${props.secClass}`;
      } else {
        return `navigation sig-cake-nav`;
      }
    } else if (
      location.pathname.includes("serving-sizes") ||
      (location.pathname.includes("flavors") &&
        !location.pathname.includes("signature-cakes"))
    ) {
      return "navigation serv-nav";
    } else {
      return "navigation";
    }
  };
  const getActiveCupCat = (item: string) => {
    if (item.toLowerCase().includes(selectedMenuItem!)) {
      return <span>&nbsp;</span>;
    } else if (item.replace("-", "").toLowerCase() === selectedMenuItem) {
      return <span>&nbsp;</span>;
    }
  };

  useEffect(() => {
    location.pathname.includes("cupcakes") && setIsCupPg(true);
  }, [location.pathname]);

  return (
    <nav
      className={getClassName()}
      onClick={(e) => {
        props.useAltHC ? handleAltClick(e) : handleClick(e);
      }}
    >
      {props.menu.map((item, i) => (
        <>
          <button className={`navigation-item`} id={`${i}`} key={i}>
            <div>
              {String(item).charAt(0).toUpperCase() + String(item).slice(1)}
              {/* {item} */}
              {selectedMenuItem!.replace("-", " ") === item.toLowerCase() && (
                <span>&nbsp;</span>
              )}

              {isCupPg && getActiveCupCat(item)}

              {/* if selected menu item's div is out of view */}

              {size?.replace("-inch", `"`) === item && <span>&nbsp;</span>}
            </div>
          </button>
        </>
      ))}
    </nav>
  );
};

export default PageNav;
