import { Link } from "react-router-dom";
import "./jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h2 className="sub-heading-home">the wedding cake</h2>

      <h1 className="heading-home">of your dreams</h1>

      <p className="body-text-home">
        Let us help you capture your vision. Browse our cakes and fall in love
        again!
      </p>

      <Link className="home-pg-links" to={"/wedding-cakes/wedding/0"}>
        View Gallery
      </Link>

      <p className={`btn-home-line gallery-line`}>&nbsp;</p>
    </div>
  );
};

export default Jumbotron;
