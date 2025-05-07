import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { useState } from "react";
import Gallery from "./components/Gallery/Gallery";
import Servings from "./components/Servings/Servings";
import Flavors from "./components/Flavors/Flavors";
import Contact from "./components/Contact/Contact";
import { GalleryImgLoadProvider } from "./context/GalleryImgLoadContext";
import Signature from "./components/SignatureCakes/Signature";
import SignatureForm from "./components/SignatureForm/SignatureForm";
import Cupcakes from "./components/Cupcakes/Cupcakes";

function App() {
  const [menuFade, setMenuFade] = useState({
    BGClass: "",
    rightClass: "",
    leftClass: ""
  });

  return (
    <Routes>
      <Route
        path="/"
        element={<Home setMenuFade={setMenuFade} menuFade={menuFade} />}
      />
      <Route
        path="/wedding-cakes/:selectedMenuItem/:activeThumbnail"
        element={
          <GalleryImgLoadProvider>
            <Gallery setMenuFade={setMenuFade} menuFade={menuFade} />
          </GalleryImgLoadProvider>
        }
      />
      <Route
        path="/custom-cakes/:selectedMenuItem/:activeThumbnail"
        element={
          <GalleryImgLoadProvider>
            <Gallery setMenuFade={setMenuFade} menuFade={menuFade} />
          </GalleryImgLoadProvider>
        }
      />
      <Route
        path="/signature-cakes"
        element={
          <GalleryImgLoadProvider>
            <Signature setMenuFade={setMenuFade} menuFade={menuFade} />
          </GalleryImgLoadProvider>
        }
      />

      <Route
        path="/cupcakes"
        element={
          <GalleryImgLoadProvider>
            <Cupcakes setMenuFade={setMenuFade} menuFade={menuFade} />
          </GalleryImgLoadProvider>
        }
      />

      <Route
        path="/serving-sizes"
        element={
          <GalleryImgLoadProvider>
            <Servings setMenuFade={setMenuFade} menuFade={menuFade} />
          </GalleryImgLoadProvider>
        }
      />
      <Route
        path="/flavors"
        element={
          <GalleryImgLoadProvider>
            <Flavors setMenuFade={setMenuFade} menuFade={menuFade} />
          </GalleryImgLoadProvider>
        }
      />
      <Route
        path="/contact-us"
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
  );
}

export default App;
