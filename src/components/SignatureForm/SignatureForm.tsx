import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState
} from "react";
import { SignatureFormProps } from "./SignatureFormProps.type";
import MenuContext from "../../context/HamburgerMenuContext";
import Header from "../Header/Header";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import TextPanel from "../TextPanel/TextPanel";
import "./signatureform.css";
import axios from "axios";
import phoneImg from "../../img/form/phone.jpg";
import Dropdown from "./Dropdown";
import { stringToDate } from "../../shared/utility";
import { PHONE_NUMBER, RUSH_CUTOFF } from "../../shared/constants/constants";
import CakeDetailsGroup from "./CakeDetailsGroup";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CupcakeDetailsGroup from "../CupcakeForm/CupcakeDetailsGroup";
import ThankYou from "../ThankYou/ThankYou";

const SignatureForm = (props: SignatureFormProps) => {
  const { width } = useWindowDimensions();

  const formPanelRef: RefObject<HTMLDivElement> = useRef(null);
  const dateRef: any = useRef(null);
  const fullNameRef: any = useRef(null);
  const phoneNumberRef: any = useRef(null);
  const emailAddressRef: any = useRef(null);
  const flavSelectRefs = useRef<Array<HTMLDivElement | null>>([]);
  const sizeSelectRefs = useRef<Array<HTMLDivElement | null>>([]);
  const ccFlavSelectRefs = useRef<Array<HTMLDivElement | null>>([]);
  const quantitySelectRefs = useRef<Array<HTMLInputElement | null>>([]);
  const timeSelectRef: RefObject<any> = useRef(null);
  const timeDrpDwnRef: RefObject<any> = useRef(null);

  const [cakeOrderCountArr, setCakeOrderCountArr] = useState<Array<number>>([
    0
  ]);
  const [allData, setAllData] = useState<boolean>(false);
  const [pickUpDateErr, setPickupDateError] = useState<boolean>(false);
  const [rushErr, setRushErr] = useState<boolean>(false);
  const [closedErr, setClosedError] = useState<boolean>(false);
  const [pastDateErr, setPastDateError] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timeErr, setTimeError] = useState<boolean>(false);
  const [errObj, setErrObj] = useState<Array<Record<string, boolean>>>([]);
  const [cakeDetails, setCakeDetails] = useState<
    Array<{
      inscription?: string;
      index: number;
      flavor?: string;
      size?: string;
      quantity?: number;
    }>
  >([]);

  const [cupcakeDetails, setCupcakeDetails] = useState<
    Array<{
      inscription?: string;
      index: number;
      flavor?: string;
      size?: string;
      quantity?: number;
    }>
  >([]);
  const [editIconIndex, setEditIconIndex] = useState<null | number>(0);

  const [allNameErrs, setAllNameErrors] = useState<boolean>(false);
  const [nameErr, setNameError] = useState<boolean>(false);
  const [nameNoSpaceErr, setNameNoSpaceError] = useState<boolean>(false);
  const [phoneNumErr, setPhoneNumError] = useState<boolean>(false);
  const [emailErr, setEmailError] = useState<boolean>(false);
  const [emptyFlav, setEmptyFlav] = useState<boolean>(true);
  const [showIns, setShowIns] = useState(true);
  const [emptySize, setEmptySize] = useState<boolean>(true);
  const [emptyCCFlav, setEmptyCCFlav] = useState<boolean>(true);
  const [emptyQuantity, setEmptyQuantity] = useState<boolean>(true);

  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [paddingClass, setPaddingClass] = useState("");
  const [pickupDate, setPickupDate] = useState<any>();
  const [dateLabelMsg, setDateLabelMsg] = useState<ReactNode>();
  const [fullName, setFullName] = useState<string>("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [formPosY, setFormPosY] = useState<number | any>(0);
  const [formCoords, setFormCoords] = useState<Record<string, number>>({
    top: 0,
    y: +`${formPosY}`
  });
  const [formPClass, setFormPClass] = useState<string>("");

  const [showTY, setShowTY] = useState<boolean>(false);

  const dateType = () => {
    if (dateRef.current.value === "" || dateRef.current.value === null) {
      dateRef.current.type = "text";
    } else {
      dateRef.current.type = "date";
    }
  };

  const instructions =
    "Instructions:\n" +
    "1.) Fill out order form\n" +
    "2.) Check email for order invoice\n" +
    "3.) Order confirmed once invoiced is paid\n\n" +
    "Please note: Orders are not complete until invoice is paid";

  const timeOpts = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM"
  ];

  const cakeDetailsCheck = () => {
    if (location.pathname === "/signature-form") {
      const lastItem = cakeDetails[cakeDetails.length - 1];
      if (lastItem && lastItem.flavor && lastItem.size) {
        return true;
      } else {
        return false;
      }
    } else {
      const lastItem = cupcakeDetails[cupcakeDetails.length - 1];

      if (lastItem && lastItem.flavor && lastItem.quantity) {
        return true;
      } else {
        return false;
      }
    }
  };

  const getClosedError = (date: string) => {
    const openDays = [4, 5, 6, 0]; // Thursday (4), Friday (5), Saturday (6), Sunday (0)
    const eventDay = new Date(date).getDay();
    if (openDays.includes(eventDay)) {
      setClosedError(false);
    } else {
      setClosedError(true);
    }
  };

  const getAllDateErrors = (selectedDate: string) => {
    const date = new Date();
    const todayString =
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear();

    const todayTime = date.getHours();

    if (selectedDate) {
      if (selectedDate < todayString) {
        setPastDateError(true);
      } else {
        setPastDateError(false);
        setRushErr(false);
        getClosedError(selectedDate);

        if (todayString === selectedDate) {
          // setClosedError(false);
          todayTime >= RUSH_CUTOFF ? setRushErr(true) : setRushErr(false);
        }
      }
    }
  };

  const getDateErrMsg = () => {
    let message;

    if (pickUpDateErr) {
      message = <p className="msg">Please select a date.</p>;
      setDateLabelMsg(<div className="error-group">{message}</div>);
    } else {
      if (pastDateErr) {
        message = <p className="msg"> Please select a future date.</p>;
        setDateLabelMsg(<div className="error-group">{message}</div>);
      } else {
        if (closedErr) {
          message = (
            <p className="msg">
              {" "}
              We are closed M-W. Please select another date.
            </p>
          );
          setDateLabelMsg(<div className="error-group">{message}</div>);
        } else {
          if (rushErr) {
            message = (
              <p className="msg">
                For same day orders please confirm availabilty by calling us at{" "}
                {PHONE_NUMBER}
              </p>
            );
            setDateLabelMsg(<div className="error-group">{message}</div>);
          } else {
            setDateLabelMsg(
              <label htmlFor="eventDate" className="form-label">
                Pickup Date*
              </label>
            );
          }
        }
      }
    }
  };

  const formValidation = (
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    e.preventDefault();
    const emailEnding = email.slice(-3);

    const isValidCommonFields = () => {
      return (
        pickupDate &&
        !pickupDate.includes("NaN") &&
        !rushErr &&
        !pastDateErr &&
        !closedErr &&
        selectedTime.length &&
        fullName.length &&
        phoneNumber.replace(/[^0-9]/g, "").length >= 10 &&
        email.length > 5
      );
    };

    const isValidSignatureFormFields = () => {
      return !emptyFlav && !emptySize;
    };

    const isValidCupcakeFormFields = () => {
      return !emptyCCFlav && !emptyQuantity;
    };

    if (isValidCommonFields()) {
      if (
        location.pathname === "/signature-form" &&
        isValidSignatureFormFields()
      ) {
        setAllData(true);
      } else if (
        location.pathname === "/cupcake-form" &&
        isValidCupcakeFormFields()
      ) {
        setAllData(true);
      }
    }

    if (!allData) {
      if (fullName.length <= 3) {
        setAllNameErrors(true);
        setNameError(true);
        setNameNoSpaceError(false);
      } else if (fullName.length < 3 && !fullName.includes(" ")) {
        setAllNameErrors(true);
        setNameError(true);
        setNameNoSpaceError(false);
      } else if (!fullName.includes(" ") && fullName.length >= 3) {
        setAllNameErrors(true);
        setNameError(false);
        setNameNoSpaceError(true);
      } else if (fullName.includes(" ") && fullName.at(-1) === " ") {
        setAllNameErrors(true);
        setNameError(false);
        setNameNoSpaceError(true);
      } else {
        setAllNameErrors(false);
      }

      phoneNumber.replace(/[^0-9]/g, "").length < 10
        ? setPhoneNumError(true)
        : setPhoneNumError(false);

      if (!email.match(validEmailRegex)) {
        setEmailError(true);
      } else if (
        !emailEnding.includes("com") &&
        !emailEnding.includes("net") &&
        !emailEnding.includes("org") &&
        !emailEnding.includes("gov") &&
        !emailEnding.includes("biz") &&
        !emailEnding.includes("edu")
      ) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }

      if (selectedTime.length) {
        setTimeError(false);
      } else {
        setTimeError(true);
      }

      if (!pickupDate) {
        setPickupDateError(true);
      } else {
        setPickupDateError(false);
      }
      const orderFieldErrs = (
        dataSRC: Array<Record<string, any>>,
        dataObjKey: string,
        errKey: string
      ) => {
        if (!dataSRC.length) {
          setErrObj(
            Array.from({ length: cakeOrderCountArr.length }, () => ({
              flavErr: true,
              [errKey]: true
            }))
          );
        } else {
          setErrObj((prevState) => {
            return dataSRC.map((item, i) => {
              const updatedItem = { ...prevState[i] };

              if ("flavor" in item) {
                updatedItem.flavErr = false;
              } else {
                updatedItem.flavErr = true;
              }

              if (dataObjKey in item) {
                updatedItem[errKey] = false;
              } else {
                updatedItem[errKey] = true;
              }

              return updatedItem;
            });
          });
        }
      };

      if (location.pathname === "/signature-form") {
        orderFieldErrs(cakeDetails, "size", "sizeErr");
      } else {
        orderFieldErrs(cupcakeDetails, "quantity", "quantityErr");
      }
    }
  };

  const sendEmail = async () => {
    let data;
    if (location.pathname === "/signature-form") {
      data = {
        pickupDate,
        fullName,
        phoneNumber,
        email,
        page: "signature",
        cakeDetails,
        selectedTime
      };
    } else {
      data = {
        pickupDate,
        fullName,
        phoneNumber,
        email,
        page: "cupcake",
        cupcakeDetails,
        selectedTime
      };
    }

    await axios.post("http://localhost:5000/api/sendemail", data);

    dateRef.current.value = "";
    fullNameRef.current.value = "";
    phoneNumberRef.current.value = "";
    emailAddressRef.current.value = "";

    setShowTY(true);
  };

  useEffect(() => {
    getDateErrMsg();
  }, [pickUpDateErr, rushErr, pastDateErr, closedErr]);

  useEffect(() => {
    if (dateRef.current.type !== "date") {
      setPaddingClass("add-padding");
    } else {
      setPaddingClass("");
    }
  }, [dateRef, paddingClass]);

  useEffect(() => {
    const areaCode = `(${inputPhoneNumber.substring(0, 3)})`;
    const firstThreeNum = ` ${inputPhoneNumber.substring(3, 6)}-`;
    const lastFourNum = `${inputPhoneNumber.substring(6, 11)}`;
    setPhoneNumber(`${areaCode}${firstThreeNum}${lastFourNum}`);
  }, [inputPhoneNumber]);

  useEffect(() => {
    allData && sendEmail();
  }, [allData]);

  useEffect(() => {
    props.setMenuFade({
      BGClass: ""
    });
  }, []);

  useEffect(() => {
    const isEmpty = (
      refSRC: React.MutableRefObject<Array<HTMLDivElement | null>>,
      conditionString: string,
      emptySetter: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      refSRC.current.map((item) =>
        item?.innerText.replace(/[^0-9a-z-A-Z ]/g, "").replace(/ +/, " ") ===
        conditionString
          ? emptySetter(true)
          : emptySetter(false)
      );
    };
    let updatedItem;

    if (location.pathname === "/signature-form") {
      isEmpty(flavSelectRefs, "Cake Flavor", setEmptyFlav);
      isEmpty(sizeSelectRefs, "Cake Size", setEmptySize);

      //Clears errors when dropdown option is selected
      updatedItem = errObj.map((item, i) => {
        if (cakeDetails[i]?.flavor && !cakeDetails[i]?.size) {
          return { ...item, flavErr: false, sizeErr: true };
        } else if (!cakeDetails[i]?.flavor && cakeDetails[i]?.size) {
          return { ...item, sizeErr: false, flavErr: true };
        } else {
          return { sizeErr: false, flavErr: false };
        }
        return item;
      });
    } else {
      isEmpty(ccFlavSelectRefs, "Cupcake Flavor", setEmptyCCFlav);

      quantitySelectRefs.current.map((item) =>
        item?.value === "" ? setEmptyQuantity(true) : setEmptyQuantity(false)
      );

      updatedItem = errObj.map((item, i) => {
        if (cupcakeDetails[i]?.flavor && !cupcakeDetails[i]?.quantity) {
          return { ...item, flavErr: false, quantityErr: true };
        } else if (!cupcakeDetails[i]?.flavor && cupcakeDetails[i]?.quantity) {
          return { ...item, quantityErr: false, flavErr: true };
        } else {
          return { quantityErr: false, flavErr: false };
        }
        return item;
      });
    }
    setErrObj(updatedItem);
  }, [cakeDetails, cupcakeDetails]);

  useEffect(() => {
    showIns ? setFormPClass("ins-expanded") : setFormPClass("");
  }, [showIns]);

  return (
    <>
      {showTY && <ThankYou />}
      <section className="home-container contact-us">
        <MenuContext.Provider
          value={{
            BGClass: props.menuFade.BGClass
          }}
        >
          <Header setMenuFade={props.setMenuFade} />
          <HamburgerMenu setMenuFade={props.setMenuFade} />
        </MenuContext.Provider>
        <div className="form-container signature-form">
          {
            <TextPanel
              h2={"order"}
              h1={"form"}
              p={instructions.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              layout={width <= 1180 && true}
              showIns={showIns}
              setShowIns={setShowIns}
            />
          }

          <div
            className={`form-panel sig-form-panel ${formPClass}`}
            ref={formPanelRef}
            onScroll={() => {
              setFormPosY(formPanelRef.current?.scrollTop);

              setFormCoords((prevState: Record<string, number>) => ({
                ...prevState,
                top: formPanelRef.current!.getBoundingClientRect().top,
                y: formPanelRef.current!.scrollTop
              }));
            }}
          >
            <img
              src={phoneImg}
              alt="Image of a rotary phone cake"
              className="phone-img"
            />
            <form
              action="#"
              className="form-box sig-form-box"
              encType="multipart/form-data"
              autoComplete="off"
            >
              <div className="signature-event-details">
                <div className="input-label-box sig-event-box">
                  <input
                    type="text"
                    className={
                      !pickUpDateErr && !rushErr && !closedErr && !pastDateErr
                        ? "form-input form-input--date"
                        : "form-input form-input--date err-border"
                    }
                    placeholder="Pickup Date* &nbsp;"
                    ref={dateRef}
                    onFocus={() => (dateRef.current.type = "date")}
                    onBlur={() => {
                      dateType();
                    }}
                    onChange={() => {
                      setPickupDateError(false);
                      setPickupDate(stringToDate(dateRef.current?.value));
                      getAllDateErrors(stringToDate(dateRef.current?.value));
                    }}
                    id="date"
                    name="eventDate"
                    required
                  />

                  {dateLabelMsg}
                </div>

                <div className="time-box">
                  <Dropdown
                    menuOpts={timeOpts}
                    defaultVal={"Pickup Time*"}
                    selectRef={timeSelectRef}
                    dDwnRef={timeDrpDwnRef}
                    selectedOpt={selectedTime}
                    setSelectedOption={setSelectedTime}
                    isError={timeErr}
                    errMsg={"Please select your pickup time"}
                    formCoords={formCoords}
                    ceilingRef={formPanelRef}
                  />
                </div>
              </div>
              {location.pathname === "/cupcake-form" ? (
                <CupcakeDetailsGroup
                  formCoords={formCoords}
                  cakeOrderCountArr={cakeOrderCountArr}
                  setCakeOrderCountArr={setCakeOrderCountArr}
                  errObj={errObj}
                  cakeDetails={cupcakeDetails}
                  setCakeDetails={setCupcakeDetails}
                  editIconIndex={editIconIndex}
                  setEditIconIndex={setEditIconIndex}
                  flavSelectRefs={ccFlavSelectRefs}
                  quantitySelectRefs={quantitySelectRefs}
                  formPanelRef={formPanelRef}
                />
              ) : (
                <CakeDetailsGroup
                  formCoords={formCoords}
                  cakeOrderCountArr={cakeOrderCountArr}
                  setCakeOrderCountArr={setCakeOrderCountArr}
                  errObj={errObj}
                  cakeDetails={cakeDetails}
                  setCakeDetails={setCakeDetails}
                  editIconIndex={editIconIndex}
                  setEditIconIndex={setEditIconIndex}
                  flavSelectRefs={flavSelectRefs}
                  sizeSelectRefs={sizeSelectRefs}
                  formPanelRef={formPanelRef}
                />
              )}
              {location.pathname === "/signature-form" ? (
                <button
                  className={
                    cakeDetailsCheck()
                      ? "add-cake-btn"
                      : "add-cake-btn-disabled"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    cakeDetailsCheck() &&
                      setCakeOrderCountArr((prevState) => [
                        ...prevState,
                        cakeOrderCountArr.length
                      ]);
                    setCakeDetails((prevState) => [
                      ...prevState,
                      { index: cakeOrderCountArr.length }
                    ]);
                    setEditIconIndex(
                      +cakeDetails[cakeDetails.length - 1].index + 1
                    );
                  }}
                >
                  <span>&#x2b;</span>
                  <span>Add a Cake</span>
                </button>
              ) : (
                <button
                  className={
                    cakeDetailsCheck()
                      ? "add-cake-btn"
                      : "add-cake-btn-disabled"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    cakeDetailsCheck() &&
                      setCakeOrderCountArr((prevState) => [
                        ...prevState,
                        cakeOrderCountArr.length
                      ]);
                    setCupcakeDetails((prevState) => [
                      ...prevState,
                      { index: cakeOrderCountArr.length }
                    ]);
                    setEditIconIndex(
                      +cupcakeDetails[cupcakeDetails.length - 1].index + 1
                    );
                  }}
                >
                  <span>&#x2b;</span>
                  <span>Add Cupcakes</span>
                </button>
              )}

              <div className="input-label-box">
                <input
                  type="text"
                  className={
                    !allNameErrs
                      ? "form-input form-input--name"
                      : "form-input form-input--name err-border"
                  }
                  placeholder="Full Name*"
                  ref={fullNameRef}
                  id="name"
                  onChange={() => {
                    setAllNameErrors(false);
                    setFullName(fullNameRef.current.value);
                  }}
                  required
                />

                {allNameErrs ? (
                  <div className="error-group">
                    {nameErr && (
                      <p className="msg">Please enter your full name.</p>
                    )}
                    {nameNoSpaceErr && (
                      <p className="msg">
                        Please seperate your first and last name with a space.
                      </p>
                    )}
                  </div>
                ) : (
                  <label htmlFor="name" className="form-label">
                    Full Name*
                  </label>
                )}
              </div>
              <div className="input-label-box">
                <input
                  type="tel"
                  className={
                    !phoneNumErr
                      ? "form-input form-input--tel"
                      : "form-input form-input--tel err-border"
                  }
                  placeholder="Phone Number*"
                  ref={phoneNumberRef}
                  id="number"
                  onChange={() => {
                    setPhoneNumError(false);
                    setInputPhoneNumber(
                      phoneNumberRef.current.value.replace(/[^0-9]/g, "")
                    );
                  }}
                  required
                />

                {phoneNumErr ? (
                  <div className="error-group">
                    <p className="msg phone-msg">
                      Please enter a valid phone number.
                    </p>
                  </div>
                ) : (
                  <label htmlFor="number" className="form-label">
                    Phone Number*
                  </label>
                )}
              </div>
              <div className="input-label-box">
                <input
                  type="email"
                  className={
                    !emailErr
                      ? "form-input form-input--email"
                      : "form-input form-input--email err-border"
                  }
                  placeholder="Email Address*"
                  ref={emailAddressRef}
                  onChange={() => {
                    setEmailError(false);
                    setEmail(emailAddressRef.current.value);
                  }}
                  id="email"
                  required
                />

                {emailErr ? (
                  <div className="error-group">
                    <p className="msg email-msg">
                      Please enter a valid email address.
                    </p>
                  </div>
                ) : (
                  <label htmlFor="email" className="form-label">
                    Email Address*
                  </label>
                )}
              </div>

              <input
                type="submit"
                className="form-btn"
                id="submit-form"
                formNoValidate
              />
            </form>
            <label
              htmlFor="submit-form"
              onClick={(e) => {
                formValidation(e);
              }}
              className="form-submit-label"
            >
              Place an order
            </label>
          </div>
        </div>
        <div className="form-box-rt sig-form"></div>
      </section>
    </>
  );
};

export default SignatureForm;
