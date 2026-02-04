import "./footer.css";
import wordMark from "../../img/suhweets_wordmark.png";
import { PHONE_NUMBER } from "../../shared/constants/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="biz-details">
          <img className="footer-logo" src={wordMark} alt="" />
          <div className="address-box">
            <p>9119 Church St, Manassas, VA 20110</p>
          </div>
          <div className="phone-box">
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          </div>
          <div className="email-box">
            <a href="mailto:baker@suhweetsbakery.com">
              baker@suhweetsbakery.com
            </a>
          </div>
        </div>
        <div className="comp-row">
          <p className="footer-label">COMPANY</p>
          <Link to="/about-us">
            <li>About Suhweets</li>
          </Link>
          <Link to="/contact-us">
            <li>Contact Us</li>
          </Link>
        </div>
      </div>
      <div className="add-details">
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear()} Suhweets Bakery
        </div>
        <div className="socials">
          <a
            href="https://www.facebook.com/suhweetsbakery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-facebook"></span>
          </a>
          <a
            href="https://www.instagram.com/suhweets07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-instagram"></span>
          </a>
          <a
            href="https://www.weddingwire.com/biz/suhweets-bakery-llc/dd34f44df4c1656d.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-weddingwire"></span>
          </a>
          <a
            href="https://www.theknot.com/marketplace/suhweets-bakery-llc-manassas-va-2057171"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-the_knot"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
