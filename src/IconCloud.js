import * as React from "react";
const SvgIconCloud = (props) => (
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
      d="M17.995 11.002a6 6 0 0 0-11.668-2.21A5.251 5.251 0 0 0 7 19.25h11.125a4.125 4.125 0 1 0-.13-8.248"
    />
  </svg>
);
export default SvgIconCloud;
