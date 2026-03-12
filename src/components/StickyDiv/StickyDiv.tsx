import { useContext, useEffect, useRef, useState } from "react";
import BreadcrumbMenu from "../BreadcrumbMenu/BreadcrumbMenu";
import HomeBtn from "../HomeBtn/HomeBtn";
import PageNav from "../PageNav/PageNav";
import TextPanel from "../TextPanel/TextPanel";
import { StickyDivProps } from "./StickyDivProps.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./stickydiv.css";
import ForwardBtn from "../ForwardBtn/ForwardBtn";
import { GlobalLoadingContext } from "../../context/GlobalLoadingContext";

const StickyDiv = (props: StickyDivProps) => {
  const { selectedMenuItem } = useParams();

  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const notSigOrdForm = !location.pathname.includes("signature-form");
  const notCcakeForm = !location.pathname.includes("cupcake-form");

  const isProgScrollingRef = useRef(false);
  const targetSectionRef = useRef("");

  const globalContext = useContext(GlobalLoadingContext);
  if (!globalContext) {
    return;
  }

  // on page load & click scroll to selectedmenuitem
  useEffect(() => {
    if (!props.catRefs?.current || !selectedMenuItem) {
      return;
    }
    props.catRefs.current.map((item) => {
      if (item?.classList.value.includes(selectedMenuItem.trim())) {
        isProgScrollingRef.current = true;
        targetSectionRef.current = item.classList.value;
        item!.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [selectedMenuItem]);

  useEffect(() => {
    const getTreshold = () => {
      let treshold;
      if (
        location.pathname.includes("signature-cakes") ||
        location.pathname.includes("cupcakes")
      ) {
        treshold = 0.5;
      } else if (
        !location.pathname.includes("signature-cakes") &&
        location.pathname.includes("flavors")
      ) {
        treshold = 0.65;
      } else if (location.pathname.includes("custom-cakes")) {
        treshold = 0.1;
      } else if (location.pathname.includes("serving-sizes")) {
        treshold = 0.95;
      }

      return treshold;
    };
    const observerOptions = {
      root: null, // observe against the viewport
      rootMargin: "0px",
      threshold: getTreshold() // trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.classList.value);
        }
      });
    }, observerOptions);

    props.catRefs &&
      props.catRefs.current &&
      props.catRefs.current.forEach((ref) => {
        ref && observer.observe(ref);
      });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (activeSection === targetSectionRef.current) {
      isProgScrollingRef.current = false;
    }
  }, [activeSection, targetSectionRef.current]);

  //update path as user is scrolling
  useEffect(() => {
    let pageBase;
    let activeRoute;
    const cleanActiveSec = activeSection.replace(/^[^\s]+\s+/, "").trim();
    const matches = location.pathname.match(new RegExp("/", "g"));

    //check if route has 3 "/". create a different active route
    if (matches!.length! > 2) {
      pageBase = location.pathname;
      const routeParts = pageBase.split("/");
      const sizeFromRoute = routeParts[3];
      activeRoute = `/${routeParts[1]}/${cleanActiveSec}/${sizeFromRoute}`;
    } else {
      pageBase = location.pathname.replace(/\/[^/]*$/, "");
      activeRoute = `${pageBase}/${cleanActiveSec}`;
    }

    globalContext.pageReady &&
      activeSection &&
      !isProgScrollingRef.current &&
      activeRoute &&
      navigate(activeRoute);
  }, [activeSection]);

  const getNxtActionBtnLink = () => {
    if (location.pathname.includes("serving-sizes")) {
      return (
        <ForwardBtn
          link={"/flavors/classic-flavors"}
          linkTxt={"Explore our flavors"}
        />
      );
    } else if (
      location.pathname.includes("flavors") &&
      !location.pathname.includes("signature-cakes")
    ) {
      return <ForwardBtn link={"/quote-request"} linkTxt={"Request a quote"} />;
    } else if (
      location.pathname.includes("custom-cakes") ||
      location.pathname.includes("wedding-cakes")
    ) {
      return (
        <ForwardBtn
          link={"/serving-sizes/one-tier"}
          linkTxt={"Explore serving sizes"}
        />
      );
    } else {
      return location.pathname.includes("/cupcakes") ? (
        <HomeBtn
          btnLink={"/cupcake-form"}
          btnTxt={"Order cupcakes"}
          secClass={"card-btn cupc-Btn"}
        />
      ) : (
        <HomeBtn
          btnLink={"/quote-request"}
          btnTxt={"Request information"}
          secClass={"card-btn"}
        />
      );
    }
  };

  const getFilterTitle = () => {
    if (location.pathname.includes("serving-sizes")) {
      return "Tiers needed";
    } else {
      return "Category";
    }
  };

  return (
    <div className="sticky-div">
      <BreadcrumbMenu data={props.bcrumbData} />

      <TextPanel
        h2={props.txtPanelData.h2}
        h1={props.txtPanelData.h1}
        p={props.txtPanelData.p}
      />
      {!notSigOrdForm && (
        <span className="sig-disc">
          Please note: Our cakes are available for pickup only.
        </span>
      )}
      {!notCcakeForm && (
        <span className="sig-disc">
          Please note: Our cupcakes are available for pickup only.
        </span>
      )}
      {notSigOrdForm && notCcakeForm && <h4>{getFilterTitle()}</h4>}
      {props.pageNavMenu && <PageNav menu={props.pageNavMenu} />}
      {props.showSecMenu && props.secMenu && (
        <>
          <h4>Size</h4>
          <PageNav
            menu={props.secMenu!}
            useAltHC={props.showSecMenu}
            secClass={"size-menu-filter"}
          />
        </>
      )}

      {notSigOrdForm && notCcakeForm && getNxtActionBtnLink()}
    </div>
  );
};

export default StickyDiv;
