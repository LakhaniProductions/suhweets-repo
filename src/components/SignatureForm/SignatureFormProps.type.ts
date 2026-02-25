export interface SignatureFormProps {
  setMenuFade: React.Dispatch<
    React.SetStateAction<{
      BGClass: string;
    }>
  >;
  menuFade: {
    BGClass: string;
  };
}
