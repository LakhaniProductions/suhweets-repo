import React, { useRef, useState } from "react";
import { CakeDetailsGroupProps } from "./CakeDetailsGroup.type";
import SelectBtn from "./SelectBtn";
import Dropdown1 from "./Dropdown1";

const CakeDetailsGroup = (props: CakeDetailsGroupProps) => {
  const flavDDRefs = useRef<Array<HTMLElement | null>>([]);
  const sizeDDRefs = useRef<Array<HTMLElement | null>>([]);
  const flavOptionRefs = useRef<Array<HTMLElement | null>>([]);
  const sizeOptionRefs = useRef<Array<HTMLElement | null>>([]);
  const [flavMenuToggle, setFlavMenuToggle] = useState<null | number>(null);
  const [sizeMenuToggle, setSizeMenuToggle] = useState<null | number>(null);
  const [activeFlavIndex, setActiveFlavIndex] = useState<
    Record<string, number>
  >({});
  const [activeSizeIndex, setActiveSizeIndex] = useState({});
  const [showOrders, setShowOrders] = useState<boolean>(true);

  const cakeFlavors = [
    "German Chocolate Cake",
    "Tres Leches (Three Milks)",
    "Hazelnut",
    "Vanilla Dream",
    "Funfetti",
    "Spiced Carrot",
    "Chocolate Indulgence",
    "Red Velvet",
    "Lemon blueberry",
    "Lemon raspberry",
    "Strawberry Shortcake",
    "Strawberry Crunch",
    ""
  ];

  const sizeOptions = ["5 Inch", "6 Inch", "8 Inch", "10 Inch"];

  const removeCake = (i: number) => {
    if (
      confirm("Are you sure you'd like to remove this cake from your order?")
    ) {
      props.setCakeDetails((prevState) => {
        return prevState
          .filter((item) => item && item.index !== i)
          .map((item, index) => ({ ...item, index: index })); // Decrement the index by 1 for all remaining items
      });

      props.setCakeOrderCountArr((prevState) => {
        return prevState
          .filter((_, index) => index !== i) // Remove the number at index 'i'
          .map((count, index) => (index >= i ? count - 1 : count)); // Decrement all numbers after index 'i'
      });
    }
  };

  const getCakePrice = (i: number) => {
    if (props.cakeDetails[i]?.size === "5 Inch") {
      return 35;
    } else if (props.cakeDetails[i]?.size === "6 Inch") {
      return 50;
    } else if (props.cakeDetails[i]?.size === "8 Inch") {
      return 100;
    } else if (props.cakeDetails[i]?.size === "10 Inch") {
      return 150;
    } else {
      return false;
    }
  };
  const getErrors = () => {
    const hasErrors = props.errObj.some((item) => item.flavErr || item.sizeErr);

    return hasErrors;
  };

  return (
    <div className={showOrders ? "cake-orders mb-6" : "cake-orders mb-120"}>
      {props.cakeOrderCountArr.length > 1 && (
        <div className={getErrors() ? "heading-box errs" : "heading-box"}>
          <h3>Cake Order</h3>
          <div className="order-summary">
            <p>
              Your order has{" "}
              <span>
                <strong>{props.cakeOrderCountArr.length}</strong>
              </span>{" "}
              cakes
            </p>
            <span
              className={`ord-exp ${showOrders ? "rotate-up" : "rotate-down"}`}
              title={`${showOrders ? "Collapse" : "Expand"}`}
              onClick={() => {
                setShowOrders(!showOrders);
              }}
            >
              &#8249;
            </span>
          </div>
        </div>
      )}
      {showOrders &&
        props.cakeOrderCountArr.map((_, i) => (
          <React.Fragment key={props.cakeDetails[i]?.index || i}>
            {(props.cakeDetails?.length &&
              props.cakeDetails[i]?.flavor &&
              props.cakeDetails[i]?.size) ||
            props.cakeOrderCountArr?.length > 1 ? (
              <>
                <div
                  key={props.cakeDetails[i]?.index || i}
                  className={
                    getErrors() &&
                    i === props.cakeDetails[props.cakeDetails.length - 1].index
                      ? "cake-heading errs"
                      : "cake-heading"
                  }
                >
                  <h4>{`Cake ${i + 1}`}</h4>

                  <div
                    className="edit-box"
                    onClick={() => {
                      props.editIconIndex === i
                        ? props.setEditIconIndex(
                            +props.cakeDetails[props.cakeDetails.length - 1]
                              .index + 1
                          )
                        : props.setEditIconIndex(i);
                    }}
                  >
                    <div className="price-box">
                      {getCakePrice(i) && <span>{`$${getCakePrice(i)}`}</span>}
                      {getCakePrice(i) && <span>+ tax</span>}
                    </div>
                    <span title="Edit" className="icon-pencil edit-btn"></span>
                    <span
                      className={`cake-expand ${
                        i === props.editIconIndex ? "rotate-up" : "rotate-down"
                      }
                    `}
                    >
                      &#8249;
                    </span>
                    {props.cakeOrderCountArr.length > 1 && (
                      <span
                        title="Delete"
                        className="icon-bin dlt-btn"
                        onClick={() => {
                          removeCake(i);
                        }}
                      ></span>
                    )}
                  </div>
                </div>
                {!(i === props.editIconIndex) && (
                  <div className="cake-summary">
                    <div className="details-box">
                      {props.cakeDetails[i]?.flavor ? (
                        <p>
                          <span>
                            <strong>Flavor:</strong>{" "}
                          </span>
                          {`${props.cakeDetails[i]?.flavor}`}
                        </p>
                      ) : (
                        ""
                      )}
                      {props.cakeDetails[i]?.size ? (
                        <p>
                          <span>
                            <strong>Size: </strong>
                          </span>
                          {`${props.cakeDetails[i]?.size}`}
                        </p>
                      ) : (
                        ""
                      )}

                      <p>
                        <span>
                          <strong>Inscription: </strong>
                        </span>
                        {props.cakeDetails[i]?.inscription &&
                          `${props.cakeDetails[i]?.inscription}`}
                      </p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p></p>
            )}

            {i === props.editIconIndex && (
              <>
                <div className="cake-details" key={`details-${i}`}>
                  <div className="flav-box" key={`flavbox-${i}`}>
                    <SelectBtn
                      err={props.errObj}
                      cakeDetails={props.cakeDetails}
                      refs={props.flavSelectRefs}
                      index={i}
                      menuToggle={flavMenuToggle}
                      setMenuToggle={setFlavMenuToggle}
                      defaultVal={"Cake Flavor*"}
                    />

                    {props.errObj.length && props.errObj[i]?.flavErr ? (
                      <div className="error-group">
                        <p className="msg">
                          {"Please select your cake flavor"}
                        </p>
                      </div>
                    ) : (
                      <p
                        className={
                          props.cakeDetails[i]?.flavor
                            ? "dd-label"
                            : " dd-label dd-label-hidden"
                        }
                      >
                        {"Cake Flavor*"}
                      </p>
                    )}

                    {flavMenuToggle === i && (
                      <>
                        <Dropdown1
                          formCoords={props.formCoords}
                          index={i}
                          selectRefs={props.flavSelectRefs}
                          ddRefs={flavDDRefs}
                          menuToggle={flavMenuToggle}
                          setMenuToggle={setFlavMenuToggle}
                          menuOptions={cakeFlavors}
                          activeIndex={activeFlavIndex}
                          setActiveIndex={setActiveFlavIndex}
                          optionRefs={flavOptionRefs}
                          ddClass={"sig-flavor"}
                          setCakeDetails={props.setCakeDetails}
                          cakeDetails={props.cakeDetails}
                          formPanelRef={props.formPanelRef}
                        />
                      </>
                    )}
                  </div>
                  <div className="size-box" key={`sizebox-${i}`}>
                    <SelectBtn
                      err={props.errObj}
                      cakeDetails={props.cakeDetails}
                      refs={props.sizeSelectRefs}
                      index={i}
                      menuToggle={sizeMenuToggle}
                      setMenuToggle={setSizeMenuToggle}
                      defaultVal={"Cake Size*"}
                    />

                    {props.errObj.length && props.errObj[i]?.sizeErr ? (
                      <div className="error-group">
                        <p className="msg">{"Please select your cake size"}</p>
                      </div>
                    ) : (
                      <p
                        className={
                          props.cakeDetails[i]?.size
                            ? "dd-label"
                            : " dd-label dd-label-hidden"
                        }
                      >
                        {"Cake Size*"}
                      </p>
                    )}

                    {sizeMenuToggle === i && (
                      <>
                        <Dropdown1
                          formCoords={props.formCoords}
                          index={i}
                          selectRefs={props.sizeSelectRefs}
                          ddRefs={sizeDDRefs}
                          menuToggle={sizeMenuToggle}
                          setMenuToggle={setSizeMenuToggle}
                          menuOptions={sizeOptions}
                          activeIndex={activeSizeIndex}
                          setActiveIndex={setActiveSizeIndex}
                          optionRefs={sizeOptionRefs}
                          ddClass={"sig-size"}
                          setCakeDetails={props.setCakeDetails}
                          cakeDetails={props.cakeDetails}
                          formPanelRef={props.formPanelRef}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="input-label-box inscription-label">
                  <input
                    type="text"
                    className={"form-input form-input--inscription"}
                    placeholder={"Cake Inscription"}
                    value={props.cakeDetails[i]?.inscription}
                    id="inscription"
                    onChange={(e) => {
                      props.setCakeDetails((prevState) => {
                        const updatedDetails = prevState.map((item, index) => {
                          if (index === i) {
                            // Update the existing item
                            return { ...item, inscription: e.target.value };
                          } else {
                            // Return item as is
                            return item;
                          }
                        });

                        // Add a new item if it doesn't exist
                        if (!updatedDetails.find((item) => item.index === i)) {
                          updatedDetails.push({
                            index: i,
                            inscription: e.target.value
                          });
                        }

                        return updatedDetails;
                      });
                    }}
                    required
                  />

                  <label htmlFor="inscription" className="form-label">
                    Cake Inscription
                  </label>
                </div>
              </>
            )}
          </React.Fragment>
        ))}
    </div>
  );
};

export default CakeDetailsGroup;
