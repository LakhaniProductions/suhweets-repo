import { useCallback } from "react";
import { SelectBtnProps } from "./SelectBtnProps.type";
import { useLocation } from "react-router-dom";

const SelectBtn = (props: SelectBtnProps) => {
  const location = useLocation();
  const getDisplayValue = useCallback(() => {
    // Check if the default value is appropriate first
    if (props.defaultVal.toLowerCase().includes("flavor")) {
      if (location.pathname !== "/cupcake-form") {
        return props.cakeDetails[props.index]?.flavor || props.defaultVal;
      } else {
        return props.cakeDetails[props.index]?.flavor || props.defaultVal;
      }
    } else if (props.defaultVal.toLowerCase().includes("size")) {
      return props.cakeDetails[props.index]?.size || props.defaultVal;
    } else if (props.defaultVal.toLowerCase().includes("quantity")) {
      return props.cakeDetails[props.index]?.quantity || props.defaultVal;
    }

    return props.defaultVal; // Fallback to defaultVal if nothing else applies
  }, [props.cakeDetails, props.index, props.defaultVal]);

  const getBorderClass = useCallback(() => {
    const checkError = (errorKey: string, keyword: string) => {
      return (
        props.err[props.index]?.[errorKey] &&
        props.defaultVal.toLowerCase().includes(keyword)
      );
    };

    if (checkError("flavErr", "flavor") || checkError("sizeErr", "size")) {
      return true;
    } else {
      return false;
    }
  }, [props.err]);

  return (
    <div
      className={getBorderClass() ? " dd-btn err-border" : "dd-btn"}
      ref={(el) => {
        props.refs!.current[props.index] = el;
      }}
      onClick={() => {
        props.index === props.menuToggle
          ? props.setMenuToggle(null)
          : props.setMenuToggle(props.index);
      }}
      key={`flavbtn-${props.index}`}
    >
      <span>{getDisplayValue()}</span>
      <span>&#8249;</span>
    </div>
  );
};
export default SelectBtn;
