import { RefObject } from "react";

export interface DropdownProps {
  menuOpts: Array<string>;
  defaultVal: string;
  selectRef: RefObject<any>;
  dDwnRef: RefObject<any>;
  isRightSide?: boolean;
  selectedOpt: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
  errMsg: string;
  formCoords: Record<string, number | undefined>;
  ceilingRef: RefObject<HTMLDivElement>;
}
