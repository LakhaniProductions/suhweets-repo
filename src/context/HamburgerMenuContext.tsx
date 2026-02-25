import React from "react";

const MenuContext = React.createContext<{
  BGClass: string;
}>({
  BGClass: ""
});

export default MenuContext;
