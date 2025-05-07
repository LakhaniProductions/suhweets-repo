export interface CakeDetailsGroupProps {
  formCoords: Record<string, number | undefined>;
  cakeOrderCountArr: Array<number>;
  setCakeOrderCountArr: React.Dispatch<React.SetStateAction<Array<number>>>;
  errObj: Array<Record<string, boolean>>;
  cakeDetails: Array<{
    inscription?: string | undefined | any;
    index: number;
    flavor?: string | Array<string> | undefined | any;
    size?: string | undefined | any;
    quantity?: string | undefined | any;
  }>;
  setCakeDetails: React.Dispatch<
    React.SetStateAction<
      Array<{
        inscription?: string | undefined | any;
        index: number;
        flavor?: string | Array<string> | undefined | any;
        size?: string | undefined | any;
        quantity?: string | undefined | any;
      }>
    >
  >;
  editIconIndex: null | number;
  setEditIconIndex: React.Dispatch<React.SetStateAction<null | number>>;
  flavSelectRefs: React.MutableRefObject<Array<HTMLDivElement | null>>;
  sizeSelectRefs?: React.MutableRefObject<Array<HTMLDivElement | null>>;
  quantitySelectRefs?: React.MutableRefObject<Array<HTMLDivElement | null>>;
  formPanelRef: React.MutableRefObject<HTMLDivElement | null>;
}
