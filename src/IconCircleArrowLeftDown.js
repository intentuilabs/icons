import * as React from "react";
const SvgIconCircleArrowLeftDown = (props) => (
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
      d="m15.25 8.75-5.82 5.82m-.68-4.82v5.5h5.5M2.75 12a9.25 9.25 0 1 0 18.5 0 9.25 9.25 0 0 0-18.5 0"
    />
  </svg>
);
export default SvgIconCircleArrowLeftDown;
