import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { useContext, useState } from "react";
import Gallery from "./components/Gallery/Gallery";
import Servings from "./components/Servings/Servings";
import Flavors from "./components/Flavors/Flavors";
import Contact from "./components/Contact/Contact";
import Signature from "./components/SignatureCakes/Signature";
import SignatureForm from "./components/SignatureForm/SignatureForm";
import Cupcakes from "./components/Cupcakes/Cupcakes";
import About from "./components/About/About";
import "./css/icons.css";
import { GlobalLoadingContext } from "./context/GlobalLoadingContext";
import Loader from "./components/Loader/Loader";

function App() {
  const globalContext = useContext(GlobalLoadingContext);
  if (!globalContext) {
    return;
  }

  const pageReady = globalContext.pageReady;

  const [menuFade, setMenuFade] = useState({
    BGClass: ""
  });

  return (
    <>
      {!pageReady && <Loader />}

      <Routes>
        <Route
          path="/"
          element={<Home setMenuFade={setMenuFade} menuFade={menuFade} />}
        />
        <Route
          path="/wedding-cakes/:selectedMenuItem/:activeThumbnail?"
          element={<Gallery setMenuFade={setMenuFade} menuFade={menuFade} />}
        />
        <Route
          path="/custom-cakes/:selectedMenuItem/:activeThumbnail?"
          element={<Gallery setMenuFade={setMenuFade} menuFade={menuFade} />}
        />
        <Route
          path="/signature-cakes/:selectedMenuItem/:size?"
          element={<Signature setMenuFade={setMenuFade} menuFade={menuFade} />}
        />

        <Route
          path="/cupcakes/:selectedMenuItem"
          element={<Cupcakes setMenuFade={setMenuFade} menuFade={menuFade} />}
        />

        <Route
          path="/serving-sizes/:selectedMenuItem"
          element={<Servings setMenuFade={setMenuFade} menuFade={menuFade} />}
        />
        <Route
          path="/flavors/:selectedMenuItem/:clickedFlavor?"
          element={<Flavors setMenuFade={setMenuFade} menuFade={menuFade} />}
        />
        <Route
          path="/contact-us"
          element={<Contact setMenuFade={setMenuFade} menuFade={menuFade} />}
        />

        <Route
          path="/about-us"
          element={<About setMenuFade={setMenuFade} menuFade={menuFade} />}
        />

        <Route
          path="/quote-request"
          element={<Contact setMenuFade={setMenuFade} menuFade={menuFade} />}
        />

        <Route
          path="/signature-form"
          element={
            <SignatureForm setMenuFade={setMenuFade} menuFade={menuFade} />
          }
        />

        <Route
          path="/cupcake-form"
          element={
            <SignatureForm setMenuFade={setMenuFade} menuFade={menuFade} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
