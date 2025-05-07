export interface HamburgerMenuProps {
  setMenuFade?: React.Dispatch<
    React.SetStateAction<{
      BGClass?: string;
      rightClass?: string;
      leftClass?: string;
    }>
  >;
}
