import * as React from "react";
const SvgIconCalendarPlus = (props) => (
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
      d="M7.75 4.75v-2m8.5 2v-2m-4.25 7v5.5m2.75-2.75h-5.5m-4.5 7.75h14.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1H4.75a1 1 0 0 0-1 1v13.5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconCalendarPlus;
