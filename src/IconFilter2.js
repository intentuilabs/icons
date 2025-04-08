import * as React from "react";
const SvgIconFilter2 = (props) => (
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
      strokeWidth={1.5}
      d="M2.75 4.75h18.5m-12.5 14.5h6.5M5.75 12h12.5"
    />
  </svg>
);
export default SvgIconFilter2;
