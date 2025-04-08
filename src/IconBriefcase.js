import * as React from "react";
const SvgIconBriefcase = (props) => (
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
      d="M21 12.75h-9m0 0H3m9 0 .002 2.5m-4-7.5v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3m4.248 12.5H3.75a1 1 0 0 1-1-1V8.75a1 1 0 0 1 1-1h16.5a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1"
    />
  </svg>
);
export default SvgIconBriefcase;
