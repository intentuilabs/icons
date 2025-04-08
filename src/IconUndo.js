import * as React from "react";
const SvgIconUndo = (props) => (
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
      d="m6.75 3.25-3 3 3 3m-2.25-3h9.75a6.25 6.25 0 1 1 0 12.5h-8.5"
    />
  </svg>
);
export default SvgIconUndo;
