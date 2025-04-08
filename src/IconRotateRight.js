import * as React from "react";
const SvgIconRotateRight = (props) => (
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
      d="M19.76 14.75a8.25 8.25 0 1 1-7.78-11c2.816 0 4.7 1.204 6.52 3.259M19.25 4v3.5a.5.5 0 0 1-.5.5h-3.5"
    />
  </svg>
);
export default SvgIconRotateRight;
