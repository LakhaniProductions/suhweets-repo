import React, { useEffect, useRef, useState } from "react";
import { ContactProps } from "./ContactProps.type";
import MenuContext from "../../context/HamburgerMenuContext";
import Header from "../Header/Header";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import TextPanel from "../TextPanel/TextPanel";
import "./contactform.css";
import axios from "axios";
import phoneImg from "../../img/form/phone.jpg";
import { stringToDate } from "../../shared/utility";
import { PHONE_NUMBER } from "../../shared/constants/constants";
import ThankYou from "../ThankYou/ThankYou";

const Contact = (props: ContactProps) => {
  const dateRef: any = useRef(null);
  const servingsRef: any = useRef(null);
  const fullNameRef: any = useRef(null);
  const phoneNumberRef: any = useRef(null);
  const emailAddressRef: any = useRef(null);
  const [allData, setAllData] = useState<boolean>(false);
  const [eventDateErr, setEventDateError] = useState<boolean>(false);
  const [servingErr, setServingError] = useState<boolean>(false);
  const [allNameErrs, setAllNameErrors] = useState<boolean>(false);
  const [nameErr, setNameError] = useState<boolean>(false);
  const [nameNoSpaceErr, setNameNoSpaceError] = useState<boolean>(false);
  const [phoneNumErr, setPhoneNumError] = useState<boolean>(false);
  const [emailErr, setEmailError] = useState<boolean>(false);

  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [paddingClass, setPaddingClass] = useState("");

  const dateType = () => {
    if (dateRef.current.value === "" || dateRef.current.value === null) {
      dateRef.current.type = "text";
    } else {
      dateRef.current.type = "date";
    }
  };

  const [eventDate, setEventDate] = useState<any>();
  const [servings, setServings] = useState<any>(0);
  const [fullName, setFullName] = useState<string>("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showTY, setShowTY] = useState<boolean>(false);

  const [uploadsDisplay, setUploadsDisplay] = useState<
    {
      file?: File;
      error?: string;
    }[]
  >([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const newDisplayItems: {
      file?: File;
      error?: string;
    }[] = [];

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/svg+xml",
      "image/tiff"
    ];
    const currentCount = uploadsDisplay.filter((f) => f.file).length;

    for (const file of selectedFiles) {
      if (newDisplayItems.length + currentCount >= 3) break;

      const isDuplicate = uploadsDisplay.some(
        (item) =>
          item.file &&
          item.file.name === file.name &&
          item.file.size === file.size &&
          item.file.lastModified === file.lastModified
      );

      if (isDuplicate) continue;

      if (!allowedTypes.includes(file.type)) {
        newDisplayItems.push({
          error: `File type not accepted`
        });
      } else if (file.size > 5 * 1024 * 1024) {
        newDisplayItems.push({ error: `"${file.name}" is too big (max 5MB).` });
      } else {
        newDisplayItems.push({ file });
      }
    }

    setUploadsDisplay((prev) => [...prev, ...newDisplayItems].slice(0, 3));
    e.target.value = "";
  };

  const handleDeleteUpload = (indexToDelete: number) => {
    setUploadsDisplay((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  };

  const formValidation = (
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    e.preventDefault();

    const emailEnding = email.slice(-3);
    const eventDateMilliSec = new Date(eventDate).getTime();
    const todayMilliSec = new Date().getTime();
    const threeDaysMilliSeconds = 259200000;
    const difference = eventDateMilliSec - todayMilliSec;

    if (
      eventDate &&
      !eventDate.includes("NaN") &&
      difference > threeDaysMilliSeconds &&
      servings !== 0 &&
      fullName.length &&
      phoneNumber.replace(/[^0-9]/g, "").length >= 10 &&
      email.length > 5
    ) {
      setAllData(true);
    } else {
      setAllData(false);
      servings < 12 ? setServingError(true) : setServingError(false);

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

      if (!(difference > threeDaysMilliSeconds)) {
        setEventDateError(true);
      } else {
        setEventDateError(false);
      }
    }
  };

  const toFormData = (data: Record<string, any>) => {
    const formData = new FormData();
    for (const key in data) {
      if (key === "images" && Array.isArray(data[key])) {
        data[key].forEach((file: File) => {
          formData.append("images", file); // must match backend field name
        });
      } else {
        formData.append(key, data[key]);
      }
    }
    return formData;
  }; //testing image add

  const sendEmail = async () => {
    const imageFiles = uploadsDisplay
      .filter((item) => item.file)
      .map((item) => item.file);
    const data = {
      eventDate,
      servings,
      fullName,
      phoneNumber,
      email,
      images: imageFiles
    };
    const formData = toFormData(data);

    await axios.post("http://localhost:5000/api/sendemail", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    }); //testing image add

    dateRef.current.value = "";
    servingsRef.current.value = "";
    fullNameRef.current.value = "";
    phoneNumberRef.current.value = "";
    emailAddressRef.current.value = "";
    setUploadsDisplay([]);
    setShowTY(true);
  };

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
      BGClass: "",
      rightClass: "",
      leftClass: ""
    });
  }, []);

  return (
    <>
      {showTY && <ThankYou />}
      <section className="container contact-us">
        <MenuContext.Provider
          value={{
            BGClass: props.menuFade.BGClass,
            rightClass: props.menuFade.rightClass,
            leftClass: props.menuFade.leftClass
          }}
        >
          <Header setMenuFade={props.setMenuFade} />
          <HamburgerMenu />
        </MenuContext.Provider>
        <div className="form-container">
          {
            <TextPanel
              h2={"say"}
              h1={"hello"}
              p={
                "We’d love to know more about your dream cake! Tell us about yourself and we’ll help you make it a reality."
              }
              widthClass={`servings contact-txt`}
            />
          }

          <div className="form-panel">
            <img
              src={phoneImg}
              alt="Image of a rotary phone cake"
              className="phone-img"
            />
            <form
              action="#"
              className="form-box"
              encType="multipart/form-data"
              autoComplete="off"
            >
              <div className="event-details">
                <div className="event-box">
                  <input
                    type="text"
                    className={
                      !eventDateErr
                        ? "form-input form-input--date"
                        : "form-input form-input--date err-border"
                    }
                    placeholder="Event Date* &nbsp;"
                    ref={dateRef}
                    onFocus={() => (dateRef.current.type = "date")}
                    onBlur={() => {
                      dateType();
                    }}
                    onChange={() => {
                      setEventDateError(false);
                      setEventDate(stringToDate(dateRef.current?.value));
                    }}
                    id="date"
                    name="eventDate"
                    required
                  />
                  {eventDateErr ? (
                    <div className="error-group">
                      <p className="msg">
                        We require at least a 3 day notice for custom cakes.
                      </p>
                    </div>
                  ) : (
                    <label htmlFor="date" className="form-label">
                      Event Date*
                    </label>
                  )}
                </div>
                <div className="servings-details">
                  <input
                    type="text"
                    className={
                      !servingErr
                        ? "form-input form-input--servings " + paddingClass
                        : "form-input form-input--servings err-border " +
                          paddingClass
                    }
                    placeholder="Servings Needed*"
                    ref={servingsRef}
                    id="serv"
                    onChange={() => {
                      setServingError(false);
                      setServings(
                        +servingsRef.current.value.replace(/[^0-9]/g, "")
                      );
                    }}
                    required
                  />

                  {servingErr ? (
                    <div className="error-group">
                      <p className="msg">Minimum Serving Size: 12</p>
                    </div>
                  ) : (
                    <label htmlFor="serv" className="form-label">
                      Servings Needed*
                    </label>
                  )}
                </div>
              </div>
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

              <input
                type="submit"
                className="form-btn"
                id="submit-form"
                formNoValidate
              />
              <div className="form-button-box">
                <div className="upload-group">
                  <div className="file-field form-input">
                    {" "}
                    <p className="field-label">
                      {uploadsDisplay.length < 3
                        ? uploadsDisplay.filter((item) => item.file).length ===
                          0
                          ? "Add Images"
                          : `${
                              uploadsDisplay.filter((item) => item.file).length
                            } ${
                              uploadsDisplay.filter((item) => item.file)
                                .length > 1
                                ? "Images Added"
                                : "Image Added"
                            }`
                        : "Upload limit reached (3 max)"}
                    </p>
                  </div>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    className="form-button"
                    multiple
                    accept="image/*"
                    // ref={fileRef}
                    disabled={
                      uploadsDisplay.filter((item) => item.file).length >= 3
                    }
                    onChange={handleFileChange}
                  />
                  <label
                    tabIndex={0}
                    htmlFor="img"
                    className={
                      uploadsDisplay.length < 3
                        ? "form-label form-button-upload"
                        : "form-label form-button-upload max-btn"
                    }
                  >
                    Choose File(s)
                  </label>
                </div>

                <div className="file-uploads-box">
                  {uploadsDisplay.length > 0 ? (
                    uploadsDisplay.map((item: any, i) => (
                      <>
                        <p
                          key={i}
                          className={
                            item.error ? "file-name file-error" : "file-name "
                          }
                          title={item.file ? item.file.name : item.error}
                        >
                          {item.file ? (
                            <>
                              {item.file.name.length >= 20
                                ? item.file.name.slice(0, 20) + "..."
                                : item.file.name}
                              <span
                                title={`Delete File`}
                                onClick={() => handleDeleteUpload(i)}
                                className="icon-bin dlt-btn"
                              ></span>
                            </>
                          ) : (
                            <>
                              {item.error}

                              <span
                                title={`Delete File`}
                                onClick={() => handleDeleteUpload(i)}
                                className="icon-bin dlt-btn"
                              ></span>
                            </>
                          )}
                        </p>
                      </>
                    ))
                  ) : (
                    <p className="file-name">Upload up to 3 images.</p>
                  )}
                </div>
              </div>
              {eventDateErr && (
                <div className="error-group">
                  <p className="msg">To Inquire about rush orders</p>
                  <p className="msg">Please call us at {PHONE_NUMBER}</p>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="form-box-rt">
          <div className="form-img-box"></div>
          <label
            htmlFor="submit-form"
            onClick={(e) => {
              formValidation(e);
            }}
            className="form-submit-label"
          >
            Let's Talk Cake
          </label>
        </div>
      </section>
    </>
  );
};

export default Contact;
