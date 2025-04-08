import * as React from "react";
const SvgIconUnderline = (props) => (
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
      d="M5.75 20.75h12.5m-12.5-17V12a6.25 6.25 0 1 0 12.5 0V3.75"
    />
  </svg>
);
export default SvgIconUnderline;
