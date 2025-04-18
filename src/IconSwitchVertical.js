import * as React from "react";
const SvgIconSwitchVertical = (props) => (
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
      d="m3.25 7.5 3.47-3.47a.75.75 0 0 1 1.06 0l3.47 3.47m1.5 9 3.47 3.47a.75.75 0 0 0 1.06 0l3.47-3.47M7.25 5v15.25m9.5-16.5v15.5"
    />
  </svg>
);
export default SvgIconSwitchVertical;
