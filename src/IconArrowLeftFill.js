import * as React from "react";
const SvgIconArrowLeftFill = (props) => (
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
      d="M10.884 18.634a1.25 1.25 0 0 1-1.768 0l-5.75-5.75a1.25 1.25 0 0 1 0-1.768l5.75-5.75a1.25 1.25 0 0 1 1.768 1.768L7.268 10.75H19.75a1.25 1.25 0 0 1 0 2.5H7.268l3.616 3.616a1.25 1.25 0 0 1 0 1.768"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconArrowLeftFill;
