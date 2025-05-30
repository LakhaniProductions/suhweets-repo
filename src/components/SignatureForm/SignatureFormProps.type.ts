export interface SignatureFormProps {
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
}
