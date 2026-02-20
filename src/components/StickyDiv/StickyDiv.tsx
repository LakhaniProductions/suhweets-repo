import { SyntheticEvent, useEffect, useState } from "react";
import BreadcrumbMenu from "../BreadcrumbMenu/BreadcrumbMenu";
import HomeBtn from "../HomeBtn/HomeBtn";
import PageNav from "../PageNav/PageNav";
import TextPanel from "../TextPanel/TextPanel";
import { StickyDivProps } from "./StickyDivProps.types";
import { useNavigate, useParams } from "react-router-dom";
import "./stickydiv.css";
import ForwardBtn from "../ForwardBtn/ForwardBtn";

const StickyDiv = (props: StickyDivProps) => {
  const { selectedMenuItem, size } = useParams();

  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");

  const notCupPg = !location.pathname.includes("cupcakes");

  const handleContentRefs = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    const selected = target.innerHTML.toLowerCase().replace(" ", "-");
    props.catRefs &&
      props.catRefs.current!.map((item: HTMLDivElement | null) => {
        item!.classList.contains(selected) &&
          item!.scrollIntoView({ behavior: "smooth", block: "start" });
      });
  };

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
    } else {
      return (
        <HomeBtn
          btnLink={"/signature-form"}
          btnTxt={"Order a cake"}
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

  //scroll to selected menu item's div on page load
  useEffect(() => {
    const handleLoad = () => {
      props.catRefs &&
        props.catRefs.current &&
        props.catRefs.current.map((item: HTMLDivElement | null) => {
          item!.classList.contains(selectedMenuItem!) &&
            item!.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const getTreshold = () => {
      let treshold;
      if (location.pathname.includes("signature-cakes")) {
        treshold = 0.5;
      } else if (
        !location.pathname.includes("signature-cakes") &&
        location.pathname.includes("flavors")
      ) {
        treshold = 0.5;
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

  //update path when scrolling
  useEffect(() => {
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
    } else {
      return;
    }
  }, [activeSection]);

  return (
    <div className="sticky-div">
      <BreadcrumbMenu data={props.bcrumbData} />

      <TextPanel
        h2={props.txtPanelData.h2}
        h1={props.txtPanelData.h1}
        p={props.txtPanelData.p}
      />

      {notCupPg && <h4>{getFilterTitle()}</h4>}
      {props.pageNavMenu && (
        <PageNav menu={props.pageNavMenu} handleRefs={handleContentRefs} />
      )}
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

      {getNxtActionBtnLink()}
    </div>
  );
};

export default StickyDiv;
