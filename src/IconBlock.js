import * as React from "react";
const SvgIconBlock = (props) => (
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
      strokeWidth={1.5}
      d="M18.54 5.46A9.25 9.25 0 0 0 5.46 18.54M18.541 5.459A9.25 9.25 0 0 1 5.46 18.54M18.54 5.46 5.46 18.54"
    />
  </svg>
);
export default SvgIconBlock;
