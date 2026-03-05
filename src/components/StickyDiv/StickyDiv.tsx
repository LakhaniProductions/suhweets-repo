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
  const { selectedMenuItem, size } = useParams();

  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const notSigOrdForm = !location.pathname.includes("signature-form");
  const notCcakeForm = !location.pathname.includes("cupcake-form");

  const globalContext = useContext(GlobalLoadingContext);
  if (!globalContext) {
    return;
  }

  const isProgrammaticScroll = useRef(false);
  useEffect(() => {
    isProgrammaticScroll.current = true;
    if (!props.catRefs?.current || !selectedMenuItem) {
      return;
    }

    props.catRefs.current.map(
      (item) =>
        item?.classList.value.includes(selectedMenuItem) &&
        globalContext.pageReady &&
        item!.scrollIntoView({ behavior: "smooth", block: "start" })
    );

    // reset after animation finishes
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1000);
  }, [selectedMenuItem, globalContext.pageReady]);

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      let cleanActive;

      if (location.pathname.includes("signature-cakes")) {
        cleanActive = activeSection.replace("flavors-box ", "");
        if (!location.pathname.includes(cleanActive)) {
          navigate(
            `/signature-cakes/${cleanActive}/${size?.replace(`"`, "-inch")}`
          );
        }
      } else if (location.pathname.includes("serving-sizes")) {
        cleanActive = activeSection.replace("category-container ", "");
        if (!location.pathname.includes(cleanActive)) {
          navigate(`/serving-sizes/${cleanActive}`);
        }
      } else if (
        location.pathname.includes("flavors") &&
        !location.pathname.includes("signature-cakes")
      ) {
        cleanActive = activeSection.replace("flavors-box ", "");
        cleanActive && navigate(`/flavors/${cleanActive}`);
      } else if (location.pathname.includes("cupcakes")) {
        cleanActive = activeSection.replace("flavors-box ", "");
        if (!location.pathname.includes(cleanActive)) {
          navigate(`/cupcakes/${cleanActive}`);
        }
      } else {
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  //needed to update path when scrolling

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
        treshold = 0.5;
      } else if (location.pathname.includes("custom-cakes")) {
        treshold = 0.1;
      } else if (location.pathname.includes("serving-sizes")) {
        treshold = 1;
      }

      return treshold;
    };
    const observerOptions = {
      root: null, // observe against the viewport
      rootMargin: "0px",
      // threshold: 0.5 // trigger when 50% of the section is visible
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
