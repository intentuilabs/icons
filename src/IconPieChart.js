import * as React from "react";
const SvgIconPieChart = (props) => (
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
      d="M12 3.5A9.25 9.25 0 0 0 12 22a9.25 9.25 0 0 0 8.724-6.167M12 3.5a9.25 9.25 0 0 1 9.25 9.25 9.2 9.2 0 0 1-.526 3.083M12 3.5v9.25l8.724 3.083"
    />
  </svg>
);
export default SvgIconPieChart;
