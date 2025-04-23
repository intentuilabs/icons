import * as React from "react";
const SvgIconPill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M12.5 4.5 5 12a5.303 5.303 0 1 0 7.5 7.5L20 12a5.303 5.303 0 0 0-7.5-7.5ZM9 8.5l7 7"
    />
  </svg>
);
export default SvgIconPill;
