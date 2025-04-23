import * as React from "react";
const SvgIconBedFill = (props) => (
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
      d="M4.5 4.75A.75.75 0 0 1 5.25 4h6.5v5.5H4.5zm8.75 4.75V4h6.5a.75.75 0 0 1 .75.75V9.5zm9.25 2.25a.75.75 0 0 0-.75-.75H3.25a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75H4.5v1.25a.75.75 0 0 0 1.5 0V18h13v1.25a.75.75 0 0 0 1.5 0V18h1.25a.75.75 0 0 0 .75-.75z"
    />
  </svg>
);
export default SvgIconBedFill;
