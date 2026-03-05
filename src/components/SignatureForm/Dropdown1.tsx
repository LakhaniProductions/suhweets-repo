import { useEffect } from "react";
import { DropdownProps1 } from "./DropdownProps1.type";
// import useWindowDimensions from "../../hooks/useWindowDimensions";

const Dropdown1 = (props: DropdownProps1) => {
  useEffect(() => {
    const handleScroll = () => {
      !props.menuToggle && props.setMenuToggle(!props.menuToggle);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [
    props.menuToggle,
    props.activeIndex,
    props.ddRefs.current[props.menuToggle]
  ]);

  const getAllCakeDetails = (option: string) => {
    if (!props.cakeDetails.length) {
      // If no cake details exist, add the first item
      props.setCakeDetails(
        (
          prevState: Array<{
            inscription?: string | undefined | any;
            index: number;
            flavor?: string | Array<string> | undefined | any;
            size?: string | undefined | any;
            quantity?: string | undefined | any;
          }>
        ) => [
          ...prevState,
          props.ddClass === "sig-flavor" || props.ddClass === "cc-flavor"
            ? { index: props.index, flavor: option }
            : { index: props.index, size: option }
        ]
      );
    } else {
      if (props.ddClass === "sig-flavor" || props.ddClass === "cc-flavor") {
        // For "sig-flavor", update or add a new flavor
        props.setCakeDetails((prevState) => {
          const updatedDetails = prevState.map((item, i) => {
            if (i === props.index) {
              // Update the existing item
              return { ...item, flavor: option };
            } else {
              // Return item as is
              return item;
            }
          });

          // Add a new item if it doesn't exist
          if (!updatedDetails.find((item) => item.index === props.index)) {
            updatedDetails.push({ index: props.index, flavor: option });
          }

          return updatedDetails;
        });
      } else if (props.ddClass === "sig-size") {
        // For size, update or add new size
        props.setCakeDetails((prevState) => {
          const updatedDetails = prevState.map((item, i) => {
            if (i === props.index) {
              // Update the existing item
              return { ...item, size: option };
            } else {
              // Return item as is
              return item;
            }
          });

          // Add a new item if it doesn't exist
          if (!updatedDetails.find((item) => item.index === props.index)) {
            updatedDetails.push({ index: props.index, size: option });
          }

          return updatedDetails;
        });
      } else if (props.ddClass === "cc-quantity") {
        // For size, update or add new size
        props.setCakeDetails((prevState) => {
          const updatedDetails = prevState.map((item, i) => {
            if (i === props.index) {
              // Update the existing item
              return { ...item, quantity: option };
            } else {
              // Return item as is
              return item;
            }
          });

          // Add a new item if it doesn't exist
          if (!updatedDetails.find((item) => item.index === props.index)) {
            updatedDetails.push({ index: props.index, quantity: option });
          }

          return updatedDetails;
        });
      }
    }
  };

  const getActiveOption = (option: string | undefined) => {
    if (props.ddClass.includes("flavor")) {
      return props.cakeDetails[props.index]?.flavor === option
        ? `size-opt act-${props.ddClass}`
        : "size-opt";
    } else if (props.ddClass.includes("size")) {
      return props.cakeDetails[props.index]?.size === option
        ? `size-opt act-${props.ddClass}`
        : "size-opt";
    }
    return "size-opt";
  };

  useEffect(() => {
    const dropdownRef = props.ddRefs.current[props.menuToggle];
    const activeOptionIndex = props.activeIndex[`cake${props.menuToggle}`];

    // Ensure both the dropdown and the active option index are valid
    if (dropdownRef && activeOptionIndex !== undefined) {
      const activeOptionRef = props.optionRefs.current[activeOptionIndex];

      if (activeOptionRef) {
        // Get the bounding rect of both the dropdown and the active option
        const itemRect = activeOptionRef.getBoundingClientRect();
        const dropdownRect = dropdownRef.getBoundingClientRect();

        // Check if the active item is already within view (top of dropdown)
        const itemTop = itemRect.top - dropdownRect.top;
        const itemBottom = itemTop + itemRect.height;

        // If the item is not in view (outside the visible range of the dropdown), scroll it into view
        if (itemTop < 0 || itemBottom > dropdownRect.height) {
          // Calculate the position to scroll to, making the item centered in the dropdown
          const scrollTop = itemTop - dropdownRect.height / 2;

          dropdownRef.scrollTo({
            top: scrollTop,
            behavior: "smooth"
          });
        }
      }
    }
    // }, [props.menuToggle, props.activeIndex, ddHeight]);
  }, [props.menuToggle, props.activeIndex]);

  useEffect(() => {
    if (props.ddRefs.current.length) {
      function handleClickOutside(event: MouseEvent) {
        if (
          props.ddRefs.current[props.menuToggle] &&
          !props.ddRefs.current[props.menuToggle]?.contains(
            event.target as Element
          ) &&
          !props.selectRefs!.current[props.menuToggle]?.contains(
            event.target as Element
          )
        ) {
          props.setMenuToggle(null);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [props.menuToggle, props.ddRefs]);

  // useEffect(() => {
  //   const dDown = props.ddRefs.current[props.index]!.getBoundingClientRect();
  //   const form = props.formPanelRef.current!.getBoundingClientRect();
  //   const ddBottom = dDown.bottom;
  //   const formBottom = form.bottom;
  //   const isDropCutoff = ddBottom > formBottom;
  //   const difference = ddBottom - formBottom;
  //   if (isDropCutoff && dDown.height > difference) {
  //     setDdHeight(dDown.height - difference);
  //   }
  // }, [props.menuToggle, props.formPanelRef.current, props.formCoords]);

  return (
    <ul
      className={`dropdown ${props.ddClass}`}
      style={{
        // top: getDropdownTopValue(props.index),
        width: `${
          props.selectRefs!.current[props.index]?.getBoundingClientRect().width
        }px`
        // ...(ddHeight !== 0 && { height: `${ddHeight}px` })
      }}
      ref={(el) => {
        props.ddRefs.current[props.index] = el;
      }}
    >
      {props.menuOptions.map((option: string, index: number) => (
        <li
          className={getActiveOption(option)}
          ref={(el) => (props.optionRefs.current[index] = el)}
          onClick={() => {
            props.setActiveIndex((prevState: Record<string, number>) => {
              return { ...prevState, [`cake${props.index}`]: index };
            });
            props.setMenuToggle(null);

            getAllCakeDetails(option);
          }}
          key={`${option}-${index}`}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown1;
