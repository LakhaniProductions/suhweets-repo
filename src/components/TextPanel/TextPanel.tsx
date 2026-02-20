// import { useLocation } from "react-router-dom";

import { TextPanelProps } from "./TextPanelProps.type";
import "./textpanel.css";
// import { useEffect, useRef, useState } from "react";
// import useWindowDimensions from "../../hooks/useWindowDimensions";

const TextPanel = (props: TextPanelProps) => {
  // const { width } = useWindowDimensions();
  // const [pageClass, setPageClass] = useState("");
  // const location = useLocation();
  // const instructionsRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     const target = event.target as Element;
  //     if (props.showIns && props.setShowIns) {
  //       if (
  //         instructionsRef.current &&
  //         !instructionsRef.current.contains(target)
  //       ) {
  //         props.setShowIns(false);
  //       } else if (
  //         instructionsRef.current!.contains(target) &&
  //         target.className === "up"
  //       ) {
  //         props.showIns && props.setShowIns(false);
  //       }
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [props.showIns]);

  // const handleClickExpand = (event: React.MouseEvent) => {
  //   const target = event.target as HTMLElement;
  //   if (
  //     target.className === "down" ||
  //     (target.nodeName === "P" && !props.showIns)
  //   ) {
  //     props.setShowIns?.(!props.showIns);
  //   }
  // };

  return (
    <div className={`txt-panel`}>
      {
        <>
          {/* <h2>{props.h2}</h2> */}
          <h1>{`${props.h2} ${props.h1}`}</h1>
          <p>{props.p}</p>
        </>
      }

      {/* {width <= 1180 ? (
        <div
          className={
            props.showIns ? `instructions-box modal` : `instructions-box`
          }
          ref={instructionsRef}
          onClick={
            //   () => {
            //   // !props.showIns && props.setShowIns(!props.showIns);
            // }
            handleClickExpand
          }
        >
          <span className={props.showIns ? "up" : "down"}>&#8249;</span>

          {props.showIns ? <p>{props.p}</p> : <p>Instructions</p>}
        </div>
      ) : (
        <p>{props.p}</p>
      )} */}
    </div>
  );
};

export default TextPanel;
