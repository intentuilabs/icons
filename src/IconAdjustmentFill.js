import * as React from "react";
const SvgIconAdjustmentFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M17 3a4 4 0 0 0-3.93 3.25H3.75a.75.75 0 0 0 0 1.5h9.32A4 4 0 1 0 17 3M9 13a4 4 0 0 0-3.93 3.25H3.75a.75.75 0 0 0 0 1.5h1.32a4 4 0 0 0 7.86 0h7.32a.75.75 0 0 0 0-1.5h-7.32A4 4 0 0 0 9 13"
    />
  </svg>
);
export default SvgIconAdjustmentFill;
