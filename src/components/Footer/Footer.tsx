import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="biz-details">
          <div className="address-box">
            <p>9119 Church St, Manassas, VA 20110</p>
          </div>
          <div className="phone-box">
            <p>(703) 334-6259</p>
          </div>
          <div className="email-box">
            <p>baker@suhweetsbakery.com</p>
          </div>
        </div>
      </div>
      <div className="add-details">
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear()} Suhweets Bakery
        </div>
      </div>
    </footer>
  );
};

export default Footer;
