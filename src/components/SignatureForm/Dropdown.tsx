import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { DropdownProps } from "./DropdownProps.type";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Dropdown = (props: DropdownProps) => {
  const { width, height } = useWindowDimensions();

  const optionLiRefs = useRef<any>([]);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [sizeTopVal, setSizeTopVal] = useState<any>();
  const [ddClass, setDdClass] = useState<string>("");

  const getDropdownTopValue = useCallback(() => {
    const timeSelectRef = props.selectRef.current?.getBoundingClientRect();
    // if (!props.formCoords.y) return 0;
    if (!timeSelectRef) return 0;

    let marginBuffer;
    let formMargin;
    let topValue;

    if (width <= 2560 && width > 2040) {
      formMargin = 181;
      marginBuffer = 24;

      if (height <= 860 && height > 700) {
        marginBuffer = 0;
      } else if (height < 700) {
        formMargin = 120;
        marginBuffer = 0;
      }
    } else if (width <= 2040 && width > 1700) {
      formMargin = 181;
      marginBuffer = 24;
      if (height <= 950 && height > 860) {
        marginBuffer = 24 - props.formCoords.y;
      } else if (height <= 860 && height > 700) {
        marginBuffer = 0 - props.formCoords.y;
      } else if (height < 700) {
        formMargin = 120;
        marginBuffer = 0;
      }
    } else if (width <= 1700 && width > 1511) {
      formMargin = 120;
      marginBuffer = 24;
      if (height <= 950 && height > 860) {
        marginBuffer = 24 - props.formCoords.y;
      } else if (height <= 860) {
        marginBuffer = 0 - props.formCoords.y;
      }
    } else if (width <= 1511 && width > 1180) {
      formMargin = 120;
      marginBuffer = 24;
      if (height <= 1002 && height > 950) {
        marginBuffer = 0;
      } else if (height <= 950) {
        marginBuffer = 0 - props.formCoords.y;
      }
    } else if (width <= 1180 && width > 1052) {
      formMargin = 120;
      marginBuffer = 24;
      if (height <= 1002 && height > 950) {
        marginBuffer = 0;
      } else if (height <= 950 && height > 860) {
        marginBuffer = 227 - props.formCoords.y;
      } else if (height <= 860 && height > 830) {
        marginBuffer = 215 - props.formCoords.y;
      } else if (height <= 830 && height > 760) {
        marginBuffer = 191 - props.formCoords.y;
      } else if (height <= 760 && height > 730) {
        marginBuffer = 127 - props.formCoords.y;
      } else if (height <= 730) {
        marginBuffer = 88 - props.formCoords.y;
      }
    } else if (width <= 1052 && width > 900) {
      formMargin = 120;
      marginBuffer = 0;
      if (height <= 1002 && height > 950) {
        marginBuffer = 0;
      } else if (height <= 950 && height > 860) {
        marginBuffer = 227 - props.formCoords.y;
      } else if (height <= 860 && height > 830) {
        marginBuffer = 215 - props.formCoords.y;
      } else if (height <= 830 && height > 760) {
        marginBuffer = 191 - props.formCoords.y;
      } else if (height <= 760 && height > 730) {
        marginBuffer = 127 - props.formCoords.y;
      } else if (height <= 730) {
        marginBuffer = 88 - props.formCoords.y;
      }
    } else if (width <= 900 && width > 730) {
      formMargin = 120;
      marginBuffer = 0;
      if (height <= 950 && height > 860) {
        marginBuffer = 203 - props.formCoords.y;
      } else if (height <= 860 && height > 850) {
        marginBuffer = 191 - props.formCoords.y;
      } else if (height <= 850) {
        marginBuffer = 76 - props.formCoords.y;
      }
    } else if (width <= 730 && width > 500) {
      formMargin = 120;
      marginBuffer = 0;

      if (height <= 950 && height > 860) {
        marginBuffer = 197 - props.formCoords.y;
      } else if (height <= 860 && height > 850) {
        marginBuffer = 185 - props.formCoords.y;
      } else if (height <= 850) {
        marginBuffer = 70 - props.formCoords.y;
      }
    } else if (width <= 500) {
      formMargin = 120;
      marginBuffer = 0;

      if (height <= 950 && height > 850) {
        marginBuffer = 180 - props.formCoords.y;
      } else if (height <= 850) {
        marginBuffer = 82 - props.formCoords.y;
      }
    }
    topValue = timeSelectRef.bottom - formMargin! - marginBuffer;
    return topValue;
  }, [props.selectRef.current, props.formCoords.y, width, height]);

  const useOutsideClickDropDown = (ref: RefObject<Element>) => {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Element)) {
          setToggleMenu(!toggleMenu);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, toggleMenu]);
  };

  useEffect(() => {
    const handleResize = () => {
      // props.setMenuToggle(null);
      getDropdownTopValue();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    props.selectRef.current &&
      setSizeTopVal(
        props.selectRef.current.getBoundingClientRect().top -
          props.selectRef.current.getBoundingClientRect().height -
          5
      );
  }, [toggleMenu, props.selectRef]);

  useEffect(() => {}, [props.isError]);

  useEffect(() => {
    const ceilingTop = props.ceilingRef.current?.getBoundingClientRect().top;
    const ddTop = props.dDwnRef.current?.getBoundingClientRect().top;
    setSizeTopVal(
      props.selectRef.current.getBoundingClientRect().top -
        props.selectRef.current.getBoundingClientRect().height -
        5
    );

    if (ceilingTop && ddTop <= ceilingTop) {
      toggleMenu && setToggleMenu(!toggleMenu);
    }
  }, [props.formCoords.y]);

  useEffect(() => {
    //scroll to active
    props.dDwnRef.current &&
      props.dDwnRef.current.scrollTo({
        top:
          +`${
            document
              .getElementById(`act-${ddClass.trim()}`)
              ?.getBoundingClientRect().top
          }` - props.dDwnRef.current.getBoundingClientRect().height,
        behavior: "smooth"
      });
  }, [props.selectedOpt, toggleMenu]);

  useEffect(() => {
    setDdClass(
      props.defaultVal.slice(-6, props.defaultVal.length - 1).toLowerCase()
    );
  }, [props.defaultVal]);

  useOutsideClickDropDown(props.dDwnRef);

  return (
    <>
      <div
        className={
          props.isError && !props.selectedOpt.length
            ? " dd-btn err-border"
            : "dd-btn"
        }
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
        ref={props.selectRef}
      >
        <span className={props.selectedOpt ? "active-opt" : ""}>
          {props.selectedOpt ? props.selectedOpt : props.defaultVal}
        </span>
        <span>&#8249;</span>
      </div>
      {props.isError && !props.selectedOpt.length ? (
        <div className="error-group">
          <p className="msg">{props.errMsg}</p>
        </div>
      ) : (
        <p
          className={
            props.selectedOpt ? "dd-label" : " dd-label dd-label-hidden"
          }
        >
          {props.defaultVal}
        </p>
      )}

      {toggleMenu && (
        <ul
          className={`dropdown ${ddClass}`}
          style={{
            top: getDropdownTopValue(),
            width: `${props.selectRef.current.getBoundingClientRect().width}px`,
            left: props.isRightSide
              ? `${props.selectRef.current.getBoundingClientRect().left - 50}px`
              : ""
          }}
          ref={props.dDwnRef}
        >
          {props.menuOpts.map((option, i) => (
            <li
              className={
                props.selectedOpt && props.selectedOpt === option
                  ? `size-opt act-${ddClass.trim()}`
                  : "size-opt"
              }
              id={
                props.selectedOpt && props.selectedOpt === option
                  ? `act-${ddClass.trim()}`
                  : ""
              }
              onClick={() => {
                props.setSelectedOption(option);
                setToggleMenu(!toggleMenu);
              }}
              ref={(el) => {
                optionLiRefs.current[i] = el;
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
