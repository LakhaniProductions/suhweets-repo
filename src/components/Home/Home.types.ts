export interface HomeProps {
  setMenuFade: React.Dispatch<
    React.SetStateAction<{
      BGClass: string;
    }>
  >;
  menuFade: {
    BGClass: string;
  };
}
