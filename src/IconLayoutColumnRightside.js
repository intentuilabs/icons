import * as React from "react";
const SvgIconLayoutColumnRightside = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 5.5h18.5V20H2.75zm13 .25v14"
    />
  </svg>
);
export default SvgIconLayoutColumnRightside;
