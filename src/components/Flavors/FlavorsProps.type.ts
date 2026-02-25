export interface FlavorsProps {
  setMenuFade: React.Dispatch<
    React.SetStateAction<{
      BGClass: string;
    }>
  >;
  menuFade: {
    BGClass: string;
  };
}
