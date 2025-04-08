import * as React from "react";
const SvgIconArrowWallLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.75 7.75-3.72 3.72a.75.75 0 0 0 0 1.06l3.72 3.72M21.25 12h-14m-4.5-7.25v14.5"
    />
  </svg>
);
export default SvgIconArrowWallLeft;
