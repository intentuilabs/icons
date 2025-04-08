import * as React from "react";
const SvgIconBolt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.798 9.5H13.75a.5.5 0 0 1-.5-.5V3.106a.5.5 0 0 0-.912-.284L3.791 15.216a.5.5 0 0 0 .411.784h6.048a.5.5 0 0 1 .5.5v5.894a.5.5 0 0 0 .912.284l8.547-12.394a.5.5 0 0 0-.411-.784Z"
    />
  </svg>
);
export default SvgIconBolt;
