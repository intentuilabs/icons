import * as React from "react";
const SvgIconWindow = (props) => (
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
      strokeWidth={1.5}
      d="M3 10.75h18m-17.25 8.5h16.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1H3.75a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1Z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.25}
      d="M5.75 8.375a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25Zm2.5 0a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25Zm2.5 0a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25Z"
    />
  </svg>
);
export default SvgIconWindow;
