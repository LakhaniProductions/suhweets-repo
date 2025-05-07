export interface GalleryProps {
  setMenuFade: React.Dispatch<
    React.SetStateAction<{
      BGClass: string;
      rightClass: string;
      leftClass: string;
    }>
  >;
  menuFade: {
    BGClass: string;
    rightClass: string;
    leftClass: string;
  };
  // content: Record<string, string>[];
}
