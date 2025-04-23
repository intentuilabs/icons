import * as React from "react";
const SvgIconPill2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <ellipse
      cx={12}
      cy={9}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={9.75}
      ry={4.25}
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M2.25 9v6c0 2.347 4.365 4.25 9.75 4.25s9.75-1.903 9.75-4.25V9M6 5.5 19 12"
    />
  </svg>
);
export default SvgIconPill2;
