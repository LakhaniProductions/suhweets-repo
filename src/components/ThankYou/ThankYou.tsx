import { useEffect, useState } from "react";
import thankyouimg from "../../img/form/thankyou.jpg";

import "../ThankYou/thankyou.css";

const ThankYou = () => {
  const [msg, setMsg] = useState<string>("");
  useEffect(() => {
    if (
      location.pathname === "/cupcake-form" ||
      location.pathname === "/signature-form"
    ) {
      setMsg(
        "To complete your order, please check your email for an order invoice."
      );
    } else {
      setMsg(
        " A member of our staff will get back to you within 24 to 48 hours"
      );
    }
  }, [location.pathname]);
  return (
    <section className="ty-container">
      <img className="ty-heading" src={thankyouimg} alt="" />
      <div className="ty-msg">
        <div className="ty-bg">
          <p>{`We really appreciate your ${
            location.pathname === "/contact-us" ? "inquiry." : "order inquiry."
          }`}</p>
          <p>{msg}</p>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
