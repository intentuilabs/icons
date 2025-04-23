import * as React from "react";
const SvgIconPillFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M11.97 3.97a6.053 6.053 0 0 1 8.56 8.56l-3.22 3.22-8.56-8.56zM7.69 8.25l-3.22 3.22a6.053 6.053 0 0 0 8.56 8.56l3.22-3.22z"
    />
  </svg>
);
export default SvgIconPillFill;
