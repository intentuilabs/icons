import * as React from "react";
const SvgIconBold = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.74 12h7.51a4 4 0 0 0 4-4v-.25a4 4 0 0 0-4-4H6.74a1 1 0 0 0-1 1zm0 0v7.25a1 1 0 0 0 1 1h5.76m.5 0h1.25a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4H13"
    />
  </svg>
);
export default SvgIconBold;
