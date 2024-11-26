import * as React from "react";
const SvgIconChartTrendingUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.75 7.5h5.5V13m-.514-4.975-7.029 7.019a1 1 0 0 1-1.414 0l-2.586-2.587a1 1 0 0 0-1.414 0L2.75 18"
    />
  </svg>
);
export default SvgIconChartTrendingUp;
