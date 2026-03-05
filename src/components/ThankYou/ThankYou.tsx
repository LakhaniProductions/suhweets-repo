import { useEffect, useState } from "react";

import "../ThankYou/thankyou.css";

const ThankYou = () => {
  const [msg, setMsg] = useState<string>("");
  useEffect(() => {
    if (
      location.pathname === "/cupcake-form" ||
      location.pathname === "/signature-form"
    ) {
      setMsg("Please keep an eye on your email for an order invoice.");
    } else {
      setMsg(
        " A member of our staff will get back to you within 24 to 48 hours"
      );
    }
  }, [location.pathname]);
  return (
    <section className="ty-container">
      <div className="ty-bg">
        <h1>thank you.</h1>
        <span className="outlined">thank you.</span>
        <p>{`We really appreciate your ${
          location.pathname === "/contact-us" ? "inquiry." : "order."
        }`}</p>
        <p className="ty-reminder">{msg}</p>
      </div>
    </section>
  );
};

export default ThankYou;
