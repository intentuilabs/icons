import * as React from "react";
const SvgIconCalendarCheckFill = (props) => (
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
      d="M7.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h2.25c.966 0 1.75.784 1.75 1.75v13.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25V5.75C3 4.784 3.784 4 4.75 4H7V2.75A.75.75 0 0 1 7.75 2m7.53 8.045a.75.75 0 0 1 0 1.06l-3.85 3.85a.75.75 0 0 1-1.06 0l-1.65-1.65a.75.75 0 1 1 1.06-1.06l1.12 1.12 3.32-3.32a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCalendarCheckFill;
