import * as React from "react";
const SvgIconSparklesTwo = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.25 15C17.215 15 15 17.215 15 22.25 15 17.215 12.785 15 7.75 15 12.785 15 15 12.785 15 7.75c0 5.035 2.215 7.25 7.25 7.25Zm-11-8.5c-3.299 0-4.75 1.451-4.75 4.75 0-3.299-1.451-4.75-4.75-4.75 3.299 0 4.75-1.451 4.75-4.75 0 3.299 1.451 4.75 4.75 4.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSparklesTwo;
