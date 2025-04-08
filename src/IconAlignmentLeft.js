import * as React from "react";
const SvgIconAlignmentLeft = (props) => (
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
      d="M3.75 4.75h16.5M3.75 12h8.5m-8.5 7.25h16.5"
    />
  </svg>
);
export default SvgIconAlignmentLeft;
