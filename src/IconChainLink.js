import * as React from "react";
const SvgIconChainLink = (props) => (
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
      d="m10 19-.172.172a4 4 0 0 1-5.657 0l-.343-.344a4 4 0 0 1 0-5.656l3.343-3.344a4 4 0 0 1 5.657 0l.344.344a3.98 3.98 0 0 1 1.14 2.328"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.688 12.5a4 4 0 0 0 1.14 2.328l.344.344a4 4 0 0 0 5.656 0l3.344-3.344a4 4 0 0 0 0-5.657l-.344-.343a4 4 0 0 0-5.656 0L14 6"
    />
  </svg>
);
export default SvgIconChainLink;
