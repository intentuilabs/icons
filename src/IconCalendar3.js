import * as React from "react";
const SvgIconCalendar3 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 4.75v-2m8.5 2v-2m-11.5 17.5h14.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1H4.75a1 1 0 0 0-1 1v13.5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconCalendar3;
