import { SyntheticEvent, useEffect, useState } from "react";
import { TextPanelProps } from "./TextPanelProps.type";
import "./textpanel.css";

const TextPanel = (props: TextPanelProps) => {
  const [insClass, setInsClass] = useState<string>("");
  const [rotateClass, setRotateClass] = useState<string>("rotate-down");

  const clickIns = () => {
    if (insClass === "") {
      setInsClass("show");
      setRotateClass("rotate-up");
    } else {
      setInsClass("");
      setRotateClass("rotate-down");
    }
  };

  const handleOutsideClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    const parent = document.getElementById("ins-box");

    if (parent!.contains(target)) {
      return;
    } else if (
      !target.classList.value.includes("ins-box") &&
      insClass === "show"
    ) {
      setInsClass("");
      setRotateClass("rotate-down");
    }
  };

  useEffect(() => {
    const listener = (e: any) => {
      handleOutsideClick(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [insClass]);

  return (
    <div className={`txt-panel`}>
      {
        <>
          {/* <h2>{props.h2}</h2> */}
          <h1>{`${props.h2} ${props.h1}`}</h1>

          <div className="ins-box" id="ins-box">
            {Array.isArray(props.p) ? (
              props.p.map((item: string, i: number) =>
                i === 0 ? (
                  <p onClick={() => clickIns()}>
                    {item}
                    {<span className={`ins-exp-btn ${rotateClass}`}>‹</span>}
                  </p>
                ) : (
                  <p className={insClass}>{item}</p>
                )
              )
            ) : (
              <span>{props.p}</span>
            )}
          </div>
        </>
      }
    </div>
  );
};

export default TextPanel;
