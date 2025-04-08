import * as React from "react";
const SvgIconBriefcaseBlank = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 6.75h-4a1 1 0 0 0-1 1v11.5a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1V7.75a1 1 0 0 0-1-1h-4m-8.5 0v-3a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v3m-8.5 0h8.5"
    />
  </svg>
);
export default SvgIconBriefcaseBlank;
