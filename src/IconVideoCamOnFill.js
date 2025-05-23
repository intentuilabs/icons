import * as React from "react";
const SvgIconVideoCamOnFill = (props) => (
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
      d="M2 5.75C2 4.784 2.784 4 3.75 4h11.5c.966 0 1.75.784 1.75 1.75v1.732l2.407-1.324A1.75 1.75 0 0 1 22 7.69v8.618a1.75 1.75 0 0 1-2.593 1.533L17 16.52v1.731A1.75 1.75 0 0 1 15.25 20H3.75A1.75 1.75 0 0 1 2 18.25zM9.5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconVideoCamOnFill;
