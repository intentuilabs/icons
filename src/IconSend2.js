import * as React from "react";
const SvgIconSend2 = (props) => (
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
      d="M6 12h3.25M6 12 3.382 4.145a.5.5 0 0 1 .698-.605l16.026 8.013a.5.5 0 0 1 0 .894L4.08 20.46a.5.5 0 0 1-.698-.605z"
    />
  </svg>
);
export default SvgIconSend2;
