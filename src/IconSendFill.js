import * as React from "react";
const SvgIconSendFill = (props) => (
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
      d="M20.903 4.676c.32-.975-.604-1.9-1.578-1.579L2.044 8.785c-1.166.384-1.139 2.042.04 2.387l8.311 2.433 2.433 8.312c.345 1.178 2.004 1.205 2.387.04z"
    />
  </svg>
);
export default SvgIconSendFill;
