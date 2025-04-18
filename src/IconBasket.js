import * as React from "react";
const SvgIconBasket = (props) => (
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
      d="m8.25 3.75-2 5h11.5l-2-5m5.398 5.586L19.394 19.42a1 1 0 0 1-.985.829H5.59a1 1 0 0 1-.985-.829L2.852 9.336a.5.5 0 0 1 .492-.586h17.311a.5.5 0 0 1 .493.586"
    />
  </svg>
);
export default SvgIconBasket;
