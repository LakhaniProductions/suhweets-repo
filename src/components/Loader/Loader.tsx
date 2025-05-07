import loadingGif from "../../img/loadingAnimation.gif";

const Loader = () => {
  return (
    <div className="loading-container">
      <span>
        <img src={loadingGif}></img>
        <p>Loading...</p>
      </span>
    </div>
  );
};
export default Loader;
