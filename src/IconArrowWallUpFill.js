import * as React from "react";
const SvgIconArrowWallUpFill = (props) => (
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
      d="M4 2.75A.75.75 0 0 1 4.75 2h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 2.75m6.94 3.75a1.5 1.5 0 0 1 2.12 0l3.72 3.72a.75.75 0 1 1-1.06 1.06l-2.97-2.97v12.94a.75.75 0 0 1-1.5 0V8.31l-2.97 2.97a.75.75 0 0 1-1.06-1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconArrowWallUpFill;
