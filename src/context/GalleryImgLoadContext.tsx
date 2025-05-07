import { createContext, useState } from "react";

const GalleryImgLoadContext = createContext();

const GalleryImgLoadProvider = ({ children }) => {
  const [showLoadingGif, setShowLoadingGif] = useState<boolean>(true); // original

  const [showLoadingFlavorGif, setShowLoadingFlavorGif] =
    useState<boolean>(true);
  const [allGalleryImagesArr, setAllGalleryImagesArr] = useState<
    Record<string, any>[]
  >([]);

  return (
    <GalleryImgLoadContext.Provider
      value={{
        showLoadingGif,
        setShowLoadingGif,
        allGalleryImagesArr,
        setAllGalleryImagesArr,
        showLoadingFlavorGif,
        setShowLoadingFlavorGif
      }}
    >
      {children}
    </GalleryImgLoadContext.Provider>
  );
};

export { GalleryImgLoadContext, GalleryImgLoadProvider };
