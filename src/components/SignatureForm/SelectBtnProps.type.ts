export interface SelectBtnProps {
  err: Array<Record<string, boolean>>;
  cakeDetails: Array<Record<string, string | number> | null>;
  refs: React.MutableRefObject<Array<HTMLDivElement | null>>;
  index: number;
  menuToggle: number | null;
  setMenuToggle: React.SetStateAction<any>;
  defaultVal: string;
}
