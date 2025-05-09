export interface TextPanelProps {
  h2: string;
  h1: string;
  p: string | JSX.Element[];
  widthClass: string;
  layout?: boolean;
  showIns?: boolean;
  setShowIns?: React.Dispatch<React.SetStateAction<boolean>>;
}
