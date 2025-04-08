import * as React from "react";
const SvgIconMoonFill = (props) => (
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
      d="M22.082 14.082a9.83 9.83 0 0 1-3.469 4.96A9.75 9.75 0 0 1 3 11.25a9.66 9.66 0 0 1 1.958-5.861 9.83 9.83 0 0 1 4.96-3.47.75.75 0 0 1 .937.938A8.257 8.257 0 0 0 21.15 13.151a.75.75 0 0 1 .938.938z"
    />
  </svg>
);
export default SvgIconMoonFill;
