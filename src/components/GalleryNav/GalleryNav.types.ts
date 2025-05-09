import { Dispatch, SetStateAction } from "react";

export interface GalleryNavProps {
  customGalleryOpt: string;
  setCustomGalleryOpt: Dispatch<SetStateAction<string>>;
  setActiveThumbnail: Dispatch<SetStateAction<number>>;
}
