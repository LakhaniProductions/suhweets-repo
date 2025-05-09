import { Dispatch, SetStateAction } from "react";

export interface GalleryContentProps {
  customGalleryOpt: string;
  activeThumbnail: number | undefined;
  setActiveThumbnail: Dispatch<SetStateAction<number | undefined>>;
}
