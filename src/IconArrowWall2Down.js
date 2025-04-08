import * as React from "react";
const SvgIconArrowWall2Down = (props) => (
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
      d="m7.75 14.75 3.72 3.72a.75.75 0 0 0 1.06 0l3.72-3.72M12 3.75v14.5m-7.25 2h14.5"
    />
  </svg>
);
export default SvgIconArrowWall2Down;
