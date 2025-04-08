import * as React from "react";
const SvgIconLayoutColumnHalfFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M3 4.5a.75.75 0 0 1 .75-.75h7.5v18h-7.5A.75.75 0 0 1 3 21zm9.75 17.25h7.5A.75.75 0 0 0 21 21V4.5a.75.75 0 0 0-.75-.75h-7.5z"
    />
  </svg>
);
export default SvgIconLayoutColumnHalfFill;
