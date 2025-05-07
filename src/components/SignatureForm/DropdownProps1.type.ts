export interface DropdownProps1 {
  formCoords: Record<string, number | undefined>;
  index: number;
  selectRefs: React.MutableRefObject<Array<HTMLDivElement | null>>;
  ddRefs: React.MutableRefObject<Array<HTMLElement | null>>;
  menuToggle: number;
  setMenuToggle: React.SetStateAction<any>;
  menuOptions: Array<string>;
  activeIndex: Record<string, number>;
  setActiveIndex: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  optionRefs: React.MutableRefObject<Array<HTMLElement | null>>;
  ddClass: string;
  setCakeDetails: React.Dispatch<
    React.SetStateAction<
      Array<{
        inscription?: string;
        index: number;
        flavor?: string;
        size?: string;
      }>
    >
  >;
  cakeDetails: Array<{
    inscription?: string;
    index: number;
    flavor?: string;
    size?: string;
  }>;
  formPanelRef: React.MutableRefObject<HTMLDivElement | null>;
}
