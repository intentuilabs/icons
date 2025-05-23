import * as React from "react";
const SvgIconFolderLinkFill = (props) => (
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
      d="M3.75 3A1.75 1.75 0 0 0 2 4.75v7.64a5.47 5.47 0 0 1 3-.89h3a5.5 5.5 0 0 1 4.61 8.5h7.64A1.75 1.75 0 0 0 22 18.25V7.75A1.75 1.75 0 0 0 20.25 6h-7.715a.25.25 0 0 1-.208-.111l-1.406-2.11A1.75 1.75 0 0 0 9.465 3z"
    />
    <path
      fill="currentColor"
      d="M5 19.5a2.5 2.5 0 0 1 0-5A.75.75 0 0 0 5 13a4 4 0 0 0 0 8 .75.75 0 0 0 0-1.5"
    />
    <path
      fill="currentColor"
      d="M5.75 16.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"
    />
    <path
      fill="currentColor"
      d="M8 19.5A.75.75 0 0 0 8 21a4 4 0 0 0 0-8 .75.75 0 0 0 0 1.5 2.5 2.5 0 0 1 0 5"
    />
  </svg>
);
export default SvgIconFolderLinkFill;
