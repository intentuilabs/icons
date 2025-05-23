import * as React from "react";
const SvgIconBatteryMediumFill = (props) => (
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
      d="M2.75 5A1.75 1.75 0 0 0 1 6.75v10.5c0 .966.784 1.75 1.75 1.75h15.5A1.75 1.75 0 0 0 20 17.25V16h1.75c.69 0 1.25-.56 1.25-1.25v-5.5C23 8.56 22.44 8 21.75 8H20V6.75A1.75 1.75 0 0 0 18.25 5zM20 9.5v5h1.5v-5zM6 9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 6 9m5.25.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBatteryMediumFill;
