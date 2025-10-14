import React from "react";
import { Search } from "lucide-react";

export default function Icon({ name, size, customStyles, customEventhandler }: any) {
  return (
    <span style={customStyles} onClick={customEventhandler}>
      <Search size={size} name={name} />
    </span>
  );
}
