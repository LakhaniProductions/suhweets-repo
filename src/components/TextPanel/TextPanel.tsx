import { TextPanelProps } from "./TextPanelProps.type";
import "./textpanel.css";

const TextPanel = (props: TextPanelProps) => {
  return (
    <div className={`txt-panel`}>
      {
        <>
          {/* <h2>{props.h2}</h2> */}
          <h1>{`${props.h2} ${props.h1}`}</h1>
          {Array.isArray(props.p) ? (
            props.p.map((item: string) => <p>{item}</p>)
          ) : (
            <p>{props.p}</p>
          )}
        </>
      }
    </div>
  );
};

export default TextPanel;
