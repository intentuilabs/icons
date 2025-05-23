import * as React from "react";
const SvgIconCirclePlayFill = (props) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M10.782 8.783a.5.5 0 0 0-.782.413v5.608a.5.5 0 0 0 .782.413l4.112-2.804a.5.5 0 0 0 0-.826z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCirclePlayFill;
