import * as React from "react";
const SvgIconItalic = (props) => (
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
      d="M9.75 3.75h4.75m4.75 0H14.5m0 0-5 16.5m0 0H4.75m4.75 0h4.76"
    />
  </svg>
);
export default SvgIconItalic;
