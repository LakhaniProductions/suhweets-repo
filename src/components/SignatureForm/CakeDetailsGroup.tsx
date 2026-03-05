import { useEffect, useRef, useState } from "react";
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

  const signatureContent = [
    {
      flav: "Vanilla Dream",
      p: "Moist vanilla cake paired with smooth vanilla buttercream.",

      category: "classic"
    },
    {
      flav: "Red Velvet",
      p: "Rich red velvet cake with a creamy vanilla cream cheese frosting.",

      category: "classic"
    },
    {
      flav: `Cookies & Cream`,
      p: "Choice of chocolate or vanilla cake with cookies & cream buttercream.",

      category: "classic"
    },
    {
      flav: "Chocolate & Vanilla",
      p: "Decadent chocolate cake frosted with vanilla buttercream.",

      category: "classic"
    },
    {
      flav: "Funfetti",
      p: "Funfetti cake with your choice of vanilla or strawberry buttercream.",

      category: "classic"
    },
    {
      flav: "Strawberry Delight",
      p: "Strawberry cake layered with strawberry cream cheese frosting.",

      category: "classic"
    },
    {
      flav: "Double Chocolate",
      p: "Chocolate cake filled with rich chocolate buttercream.",

      category: "classic"
    },
    {
      flav: "Lemon Raspberry",
      p: "Lemon cake with raspberry compote and vanilla buttercream.",

      category: "specialty"
    },
    {
      flav: "Spiced Carrot",
      p: "Carrot cake with vanilla cream cheese frosting and a touch of dulce de leche.",

      category: "specialty"
    },
    {
      flav: "Almond Raspberry",
      p: "Almond cake with raspberry compote and almond butter cream",

      category: "specialty"
    },
    {
      flav: "Cookie Butter",
      p: "Cinnamon cake with Biscoff cream cheese frosting.",

      category: "specialty"
    },
    {
      flav: "Hazelnut Dream",
      p: "Vanilla or chocolate cake filled with Nutella ganache and dulce de leche",

      category: "specialty"
    },
    {
      flav: "Berries & Cream",
      p: "Vanilla cake layered with a mixed berry compote and vanilla buttercream",

      category: "specialty"
    },
    {
      flav: "Strawberry Shortcake",
      p: "Vanilla cake with strawberry compote and vanilla buttercream",

      category: "specialty"
    },
    {
      flav: "Chocolate Indulgence",
      p: "Chocolate cake filled with chocolate ganache and chocolate buttercream",

      category: "specialty"
    }
  ];

  const cakeFlavors = signatureContent.map((item) => item.flav);

  const sizeOptions = ["6 Inch", "8 Inch", "10 Inch"];

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

  const PRICE_LIST: Record<string, Record<string, number>> = {
    classic: { "6 Inch": 60, "8 Inch": 90, "10 Inch": 110 },
    specialty: { "6 Inch": 65, "8 Inch": 95, "10 Inch": 115 }
  };

  const getCakePrice = (i: number): number => {
    const cake = props.cakeDetails[i];
    if (!cake?.flavor || !cake?.size) return 0;

    // Find the category from signatureContent
    const flavorInfo = signatureContent.find(
      (item) => item.flav === cake.flavor
    );
    const category: string = flavorInfo!.category;

    // Look up the price based on category and size
    return PRICE_LIST[category]?.[cake.size] ?? 0;
  };
  const getErrors = () => {
    const hasErrors = props.errObj.some((item) => item.flavErr || item.sizeErr);

    return hasErrors;
  };

  useEffect(() => {
    !showOrders && setShowOrders(!showOrders);
  }, [props.cakeOrderCountArr]);

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
          <div
            className="cake-details-container"
            key={props.cakeDetails[i]?.index || i}
          >
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
                      {props.cakeDetails.length && (
                        <span>{`$${getCakePrice(i)}`}</span>
                      )}
                      {props.cakeDetails.length && <span>+ tax</span>}
                    </div>
                    <div className="edit-group">
                      <span
                        title="Edit"
                        className="icon-pencil edit-btn"
                      ></span>
                      <span
                        className={`cake-expand ${
                          i === props.editIconIndex
                            ? "rotate-up"
                            : "rotate-down"
                        }
                    `}
                      >
                        &#8249;
                      </span>
                    </div>
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
          </div>
        ))}
    </div>
  );
};

export default CakeDetailsGroup;
