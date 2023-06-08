import React from "react";
import Filter from "./Filter";

function Filters() {
  return (
    <div className="relative">
         <div className="flex items-center gap-x-2 overflow-x-auto z-10  w-[600px]">
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
    </div>
    </div>
 
  );
}

export default Filters;
