export interface AboutProps {
  setMenuFade: React.Dispatch<
    React.SetStateAction<{
      BGClass: string;
    }>
  >;
  menuFade: {
    BGClass: string;
  };
}
