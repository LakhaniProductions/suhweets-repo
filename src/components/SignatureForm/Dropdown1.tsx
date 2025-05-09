import { useCallback, useEffect, useState } from "react";
import { DropdownProps1 } from "./DropdownProps1.type";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Dropdown1 = (props: DropdownProps1) => {
  const { width, height } = useWindowDimensions();
  const [ddHeight, setDdHeight] = useState(0);

  const getDropdownTopValue = useCallback(
    (i: number) => {
      const flavSelectRef =
        props.selectRefs &&
        props.selectRefs.current[i]?.getBoundingClientRect();
      if (!flavSelectRef) return 0;
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
      topValue = flavSelectRef.bottom - formMargin! - marginBuffer!;
      return topValue;
    },
    [
      props.selectRefs!.current[props.index],
      props.formCoords.y,
      props.index,
      width,
      height
    ]
  );

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
    type RectSide =
      | "top"
      | "bottom"
      | "left"
      | "right"
      | "width"
      | "height"
      | "x"
      | "y";

    const closeDDFunc = (side: RectSide) => {
      const formPanelSide: number =
        props.formPanelRef.current!.getBoundingClientRect()[side];
      const ddTop: number =
        props.ddRefs.current[props.index]!.getBoundingClientRect().top;
      if (side === "top") {
        if (ddTop && formPanelSide && ddTop <= formPanelSide) {
          props.setMenuToggle(null);
        }
      } else {
        if (ddTop && formPanelSide && ddTop >= formPanelSide) {
          props.setMenuToggle(null);
        }
      }
    };
    // close dropdown menu when out of top view
    closeDDFunc("top");
    // close dropdown when ddtop is out of bottom view
    closeDDFunc("bottom");
  }, [props.formCoords]);

  useEffect(() => {
    const handleResize = () => {
      // props.setMenuToggle(null);
      getDropdownTopValue(props.index);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
  }, [props.menuToggle, props.activeIndex, ddHeight]);

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

  useEffect(() => {
    const dDown = props.ddRefs.current[props.index]!.getBoundingClientRect();
    const form = props.formPanelRef.current!.getBoundingClientRect();
    const ddBottom = dDown.bottom;
    const formBottom = form.bottom;
    const isDropCutoff = ddBottom > formBottom;
    const difference = ddBottom - formBottom;
    if (isDropCutoff && dDown.height > difference) {
      setDdHeight(dDown.height - difference);
    }
  }, [props.menuToggle, props.formPanelRef.current, props.formCoords]);

  return (
    <ul
      className={`dropdown ${props.ddClass}`}
      style={{
        top: getDropdownTopValue(props.index),
        width: `${
          props.selectRefs!.current[props.index]?.getBoundingClientRect().width
        }px`,
        ...(ddHeight !== 0 && { height: `${ddHeight}px` })
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
