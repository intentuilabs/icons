import * as React from "react";
const SvgIconFloppyDisk2 = (props) => (
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
      d="M8.75 4v3.25a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1V4m5 3.164V19.25a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1h12.086a1 1 0 0 1 .707.293l2.414 2.414a1 1 0 0 1 .293.707m-5 7.086a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0"
    />
  </svg>
);
export default SvgIconFloppyDisk2;
