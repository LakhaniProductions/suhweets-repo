import { CakeDetailsGroupProps } from "../SignatureForm/CakeDetailsGroup.type";
import SelectBtn from "../SignatureForm/SelectBtn";
import Dropdown1 from "../SignatureForm/Dropdown1";
import React, { useRef, useState } from "react";

const CupcakeDetailsGroup = (props: CakeDetailsGroupProps) => {
  const flavDDRefs = useRef<Array<HTMLElement | null>>([]);
  const flavOptionRefs = useRef<Array<HTMLElement | null>>([]);
  const [flavMenuToggle, setFlavMenuToggle] = useState<null | number>(null);

  const [activeFlavIndex, setActiveFlavIndex] = useState<
    Record<string, number>
  >({});

  const [showOrders, setShowOrders] = useState<boolean>(true);
  //delete
  const cakeFlavors = [
    "German Chocolate Cake",
    "Tres Leches (Three Milks)",
    "Hazelnut",
    "Vanilla Dream",
    "Funfetti",
    "Spiced Carrot",
    "Chocolate Indulgence",
    "Red Velvet",
    "Lemon Blueberry",
    "Lemon Raspberry",
    "Strawberry Shortcake",
    "Strawberry Crunch",
    ""
  ];

  const removeCake = (i: number) => {
    if (
      confirm(
        "Are you sure you would like to remove this cake from your order?"
      )
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
    const hasErrors = props.errObj.some(
      (item) => item.flavErr || item.quantityErr
    );

    return hasErrors;
  };

  return (
    <div className={showOrders ? "cake-orders mb-6" : "cake-orders mb-120"}>
      {props.cakeOrderCountArr.length > 1 && (
        <div className={getErrors() ? "heading-box errs" : "heading-box"}>
          <h3>Cupcake Order</h3>
          <div className="order-summary">
            <p>
              Your order has{" "}
              <span>
                <strong>{props.cakeOrderCountArr.length}</strong>
              </span>{" "}
              cupcakes
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
              props.cakeDetails[i]?.quantity) ||
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
                  <h4>{`Cupcake ${i + 1}`}</h4>

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
                      {props.cakeDetails[i]?.quantity ? (
                        <p>
                          <span>
                            <strong>Quantity: </strong>
                          </span>
                          {`${props.cakeDetails[i]?.quantity}`}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p></p>
            )}

            {i === props.editIconIndex && (
              <>
                <div className="cc-cake-details" key={`details-${i}`}>
                  <div className="cc-flav-box" key={`flavbox-${i}`}>
                    <>
                      <div className="cc-flav-slct">
                        <SelectBtn
                          err={props.errObj}
                          cakeDetails={props.cakeDetails}
                          refs={props.flavSelectRefs}
                          menuToggle={flavMenuToggle}
                          setMenuToggle={setFlavMenuToggle}
                          defaultVal={"Cupcake Flavor*"}
                          index={i}
                        />

                        {props.errObj.length && props.errObj[i]?.flavErr ? (
                          <div className="error-group">
                            <p className="msg">
                              {"Please select your cupcake flavor"}
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
                            {"Cupcake Flavor*"}
                          </p>
                        )}
                      </div>

                      {flavMenuToggle === i && (
                        <>
                          <Dropdown1
                            formCoords={props.formCoords}
                            selectRefs={props.flavSelectRefs}
                            ddRefs={flavDDRefs}
                            menuToggle={flavMenuToggle}
                            setMenuToggle={setFlavMenuToggle}
                            menuOptions={cakeFlavors}
                            activeIndex={activeFlavIndex}
                            setActiveIndex={setActiveFlavIndex}
                            optionRefs={flavOptionRefs}
                            ddClass={"cc-flavor"}
                            setCakeDetails={props.setCakeDetails}
                            cakeDetails={props.cakeDetails}
                            formPanelRef={props.formPanelRef}
                            index={i}
                          />
                        </>
                      )}
                    </>
                  </div>

                  <div className="cc-qt-box">
                    <div className="input-label-box">
                      <input
                        ref={(el) => {
                          props.quantitySelectRefs!.current[i] = el;
                        }}
                        type="text"
                        className={
                          props.errObj[i]?.quantityErr
                            ? "form-input err-border"
                            : "form-input"
                        }
                        placeholder={"Quantity Needed*"}
                        value={props.cakeDetails[i]?.quantity}
                        id="quantity"
                        onChange={(e) => {
                          props.setCakeDetails((prevState) => {
                            const updatedDetails = prevState.map(
                              (item, index) => {
                                if (index === i) {
                                  // Update the existing item
                                  return {
                                    ...item,
                                    quantity: +e.target.value
                                  };
                                } else {
                                  // Return item as is
                                  return item;
                                }
                              }
                            );

                            // Add a new item if it doesn't exist
                            if (
                              !updatedDetails.find((item) => item.index === i)
                            ) {
                              updatedDetails.push({
                                index: i,
                                quantity: +e.target.value
                              });
                            }

                            return updatedDetails;
                          });
                        }}
                        required
                      />

                      {props.errObj.length && props.errObj[i]?.quantityErr ? (
                        <div className="error-group">
                          <p className="msg">
                            {"Please enter quantity needed"}
                          </p>
                        </div>
                      ) : (
                        <p
                          className={
                            props.cakeDetails[i]?.quantity
                              ? "dd-label"
                              : " dd-label dd-label-hidden"
                          }
                        >
                          {"Quantity Needed*"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </React.Fragment>
        ))}
    </div>
  );
};

export default CupcakeDetailsGroup;
