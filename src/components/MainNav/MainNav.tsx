import { useEffect, useState } from "react";
import { MainNavProps } from "./MainNav.types";
import "./mainnav.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const MainNav = (props: MainNavProps) => {
  const { width } = useWindowDimensions();

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("wedding");
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number>(0);
  const setActiveClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    i: number
  ) => {
    const target = e.currentTarget as HTMLButtonElement;
    setSelectedMenuItem(target.id);
    setSelectedMenuIndex(i);
    props.setJumbotron(target.innerHTML);
  };

  const [showResponsiveNav, setShowResponsiveNav] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const getNavItemClassName = (item: string, counter: number) => {
    if (showResponsiveNav) {
      //first item
      // if selected item is first item show first item and first item plus one
      if (props.menu.length - selectedMenuIndex === props.menu.length) {
        if (selectedMenuIndex === counter) {
          return "navigation-item active-menu-item";
        } else if (selectedMenuIndex === counter - 1) {
          //show second item when index of 0 is selected
          return "navigation-item";
        }
      }

      //last item
      // if selected item is last item show last item and last item -1
      if (props.menu.length - selectedMenuIndex === 1) {
        if (selectedMenuIndex === counter) {
          return "navigation-item active-menu-item";
        } else if (selectedMenuIndex === counter + 1) {
          //show second to last item when index of length is selected
          return "navigation-item";
        }
      }

      //in betweens
      // if selected item is not the first item or the last item show selected item - 1 and selected item + 1
      if (
        props.menu.length - selectedMenuIndex !== props.menu.length ||
        props.menu.length - selectedMenuIndex !== 1
      ) {
        if (selectedMenuIndex === counter) {
          return "navigation-item active-menu-item";
        } else if (
          selectedMenuIndex === counter + 1 ||
          selectedMenuIndex === counter - 1
        ) {
          return "navigation-item";
        }
      }

      return "d-none";
    } else if (showMobileNav) {
      if (counter === selectedMenuIndex) {
        return "navigation-item active-menu-item";
      } else {
        return "d-none";
      }
    } else {
      return selectedMenuItem === item
        ? `navigation-item active-menu-item`
        : `navigation-item `;
    }
  };

  useEffect(() => {
    if (width <= 1051 && width > 464) {
      setShowResponsiveNav(true);
      setShowMobileNav(false);
    } else {
      setShowResponsiveNav(false);
    }
    if (width <= 464) {
      setShowMobileNav(true);
      setShowResponsiveNav(false);
    } else {
      setShowMobileNav(false);
    }
  }, [width, selectedMenuIndex]);

  return (
    <nav className="navigation">
      {props.menu.map((item, i) => (
        <>
          {selectedMenuIndex > 0 &&
            selectedMenuIndex === i &&
            showMobileNav && (
              <button
                onClick={() => {
                  setSelectedMenuItem(props.menu[selectedMenuIndex - 1]);
                  props.setJumbotron(props.menu[selectedMenuIndex - 1]);
                  setSelectedMenuIndex(selectedMenuIndex - 1);
                }}
                className="less-btn"
              >
                <>&lt;</>
              </button>
            )}
          <button
            onClick={(e) => {
              setActiveClick(e, i);
            }}
            className={getNavItemClassName(item, i)}
            id={`${props.menu[i]}`}
            key={i}
          >
            {item}
          </button>
          {selectedMenuIndex < props.menu.length - 1 &&
            selectedMenuIndex === i &&
            showMobileNav && (
              <button
                onClick={() => {
                  setSelectedMenuItem(props.menu[selectedMenuIndex + 1]);
                  props.setJumbotron(props.menu[selectedMenuIndex + 1]);
                  setSelectedMenuIndex(selectedMenuIndex + 1);
                }}
                className="greater-btn"
              >
                <>&gt;</>
              </button>
            )}
        </>
      ))}
    </nav>
  );
};
export default MainNav;
