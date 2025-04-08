import * as React from "react";
const SvgIconPackageReturn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 10V4.5h16.5V21h-6.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 4.5V10h6.5V4.5m-6 16.5v-2.25a2 2 0 0 0-2-2H3m1.75-2.25L2.5 16.75 4.75 19"
    />
  </svg>
);
export default SvgIconPackageReturn;
