import { RefObject, useEffect, useRef, useState } from "react";
import { DropdownProps } from "./DropdownProps.type";
// import useWindowDimensions from "../../hooks/useWindowDimensions";

const Dropdown = (props: DropdownProps) => {
  // const { width, height } = useWindowDimensions();

  const optionLiRefs = useRef<any>([]);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const [ddClass, setDdClass] = useState<string>("");

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
    const handleScroll = () => {
      toggleMenu && setToggleMenu(!toggleMenu);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [toggleMenu]);

  useEffect(() => {}, [props.isError]);

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
            // top: getDropdownTopValue(),
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
