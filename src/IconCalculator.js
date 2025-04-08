import * as React from "react";
const SvgIconCalculator = (props) => (
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
      d="M4.75 7.75v12.5a1 1 0 0 0 1 1h12.5a1 1 0 0 0 1-1V7.75m-14.5 0h14.5m-14.5 0v-4a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1v4"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.5}
      d="M9.5 13a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
    />
  </svg>
);
export default SvgIconCalculator;
