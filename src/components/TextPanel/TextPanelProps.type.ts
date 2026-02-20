export interface TextPanelProps {
  h2: string;
  h1: string;
  p: string | JSX.Element[];
  layout?: boolean;
  showIns?: boolean;
  setShowIns?: React.Dispatch<React.SetStateAction<boolean>>;
}
