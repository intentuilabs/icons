import * as React from "react";
const SvgIconOldTv = (props) => (
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
      d="m7.5 3.25 4.5 3.5 4.5-3.5m-12.75 17h16.5a1 1 0 0 0 1-1V7.75a1 1 0 0 0-1-1H3.75a1 1 0 0 0-1 1v11.5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconOldTv;
