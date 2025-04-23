import * as React from "react";
const SvgIconBed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 10.75h18.5v6.5H3.25zm16.5-.25V4.75H5.25v5.75m7.25-5.75v5.75m-7.25 6.75v2m14.5-2v2"
    />
  </svg>
);
export default SvgIconBed;
