import * as React from "react";
const SvgIconServerFill = (props) => (
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
      d="M4.08 5.227A3 3 0 0 1 6.979 3h10.04a3 3 0 0 1 2.9 2.227l2.114 7.926A5.23 5.23 0 0 0 18.75 12H5.25a5.23 5.23 0 0 0-3.284 1.153z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.25 13.5a3.75 3.75 0 1 0 0 7.5h13.5a3.75 3.75 0 1 0 0-7.5zm10.5 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconServerFill;
