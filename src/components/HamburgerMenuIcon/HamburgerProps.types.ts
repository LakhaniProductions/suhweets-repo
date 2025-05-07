export interface HamburgerProps {
  setMenuFade: React.Dispatch<
    React.SetStateAction<{
      BGClass: string;
      rightClass: string;
      leftClass: string;
    }>
  >;
}
