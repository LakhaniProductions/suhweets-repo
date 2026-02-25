export interface GalleryProps {
  setMenuFade: React.Dispatch<
    React.SetStateAction<{
      BGClass: string;
    }>
  >;
  menuFade: {
    BGClass: string;
  };
}
