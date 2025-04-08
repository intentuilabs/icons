import * as React from "react";
const SvgIconStorageFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.25H2zm4.25 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M2 12.75h20V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.25 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconStorageFill;
