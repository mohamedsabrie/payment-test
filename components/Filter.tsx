import React, { useState } from "react";

function Filter() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative z-10 p-10 bg-gray-400 "
      onClick={() => setShow((prev) => !prev)}
    >
      <label className="">filter</label>
      <div
        className={`${
          show ? "block" : "hidden"
        } absolute z-20 top-full left-0 w-full h-[200px] bg-green-500`}
      ></div>
    </div>
  );
}

export default Filter;
