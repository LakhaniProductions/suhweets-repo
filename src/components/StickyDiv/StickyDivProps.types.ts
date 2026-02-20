import { RefObject } from "react";

export interface StickyDivProps {
  bcrumbData: { url: string; linkText: string }[];
  txtPanelData: { h2: string; h1: string; p: string };
  pageNavMenu?: string[];
  catRefs?: RefObject<(HTMLDivElement | null)[]>;
  showSecMenu?: boolean;
  secMenu?: string[];
}
