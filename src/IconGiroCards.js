import * as React from "react";
const SvgIconGiroCards = (props) => (
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
      d="M17.25 8.75h3a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H7.75a1 1 0 0 1-1-1v-3m0-6.5h1.5m-4.5 6.5h12.5a1 1 0 0 0 1-1v-8.5a1 1 0 0 0-1-1H3.75a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconGiroCards;
