import * as React from "react";
const SvgIconCircleMinus = (props) => (
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
      d="M16.243 12H7.757m13.493 0a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0Z"
    />
  </svg>
);
export default SvgIconCircleMinus;
