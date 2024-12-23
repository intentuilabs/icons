import * as React from "react";
const SvgIconMagic = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.513 2.927a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474L6.488 21.073a1.75 1.75 0 0 1-2.475 0l-1.086-1.086a1.75 1.75 0 0 1 0-2.474zm1.414 1.06a.25.25 0 0 0-.354 0L15.311 7.25l1.44 1.44 3.262-3.263a.25.25 0 0 0 0-.354zM15.689 9.75 14.25 8.31 3.988 18.574a.25.25 0 0 0 0 .354l1.085 1.086a.25.25 0 0 0 .354 0z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M9.85 2.075a.5.5 0 0 0 .224-.224l.478-.956a.5.5 0 0 1 .895 0l.478.956a.5.5 0 0 0 .223.224l.957.478a.5.5 0 0 1 0 .894l-.957.479a.5.5 0 0 0-.223.223l-.479.957a.5.5 0 0 1-.894 0l-.478-.957a.5.5 0 0 0-.224-.223l-.956-.479a.5.5 0 0 1 0-.894zm9 11a.5.5 0 0 0 .224-.224l.478-.956a.5.5 0 0 1 .895 0l.478.956a.5.5 0 0 0 .223.224l.957.478a.5.5 0 0 1 0 .894l-.957.479a.5.5 0 0 0-.223.223l-.479.957a.5.5 0 0 1-.894 0l-.478-.957a.5.5 0 0 0-.224-.223l-.956-.479a.5.5 0 0 1 0-.894zm-14-6a.5.5 0 0 0 .224-.224l.478-.956a.5.5 0 0 1 .894 0l.479.956a.5.5 0 0 0 .223.224l.957.478a.5.5 0 0 1 0 .894l-.957.479a.5.5 0 0 0-.223.223l-.479.957a.5.5 0 0 1-.894 0l-.478-.957a.5.5 0 0 0-.224-.223l-.956-.479a.5.5 0 0 1 0-.894z"
    />
  </svg>
);
export default SvgIconMagic;
