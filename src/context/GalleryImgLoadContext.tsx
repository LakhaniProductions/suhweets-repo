import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

interface GalleryImgLoadContextType {
  showLoadingGif: boolean;
  setShowLoadingGif: Dispatch<SetStateAction<boolean>>;
  showLoadingFlavorGif: boolean;
  setShowLoadingFlavorGif: Dispatch<SetStateAction<boolean>>;
  allGalleryImagesArr: string[];
  setAllGalleryImagesArr: Dispatch<SetStateAction<string[]>>;
}

const GalleryImgLoadContext = createContext<
  GalleryImgLoadContextType | undefined
>(undefined);

const GalleryImgLoadProvider = ({ children }: { children: ReactNode }) => {
  const [showLoadingGif, setShowLoadingGif] = useState<boolean>(true); // original

  const [showLoadingFlavorGif, setShowLoadingFlavorGif] =
    useState<boolean>(true);
  const [allGalleryImagesArr, setAllGalleryImagesArr] = useState<string[]>([]);

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
