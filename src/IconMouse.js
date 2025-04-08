import * as React from "react";
const SvgIconMouse = (props) => (
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
      d="M12 6.75v2m0 12.5A6.25 6.25 0 0 1 5.75 15V9a6.25 6.25 0 1 1 12.5 0v6A6.25 6.25 0 0 1 12 21.25"
    />
  </svg>
);
export default SvgIconMouse;
