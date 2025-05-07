import React from "react";

const MenuContext = React.createContext<{
  BGClass: string;
  rightClass: string;
  leftClass: string;
}>({
  BGClass: "",
  rightClass: "",
  leftClass: "",
});

export default MenuContext;
