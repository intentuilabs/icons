import * as React from "react";
const SvgIconBrandSlack = (props) => (
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
      d="M6.361 14.577a2.047 2.047 0 1 1-4.095 0c0-1.133.915-2.05 2.048-2.05H6.36zm1.024 0a2.047 2.047 0 1 1 4.096 0v5.124a2.047 2.047 0 1 1-4.096 0zm2.048-8.228a2.047 2.047 0 0 1-2.048-2.05 2.047 2.047 0 1 1 4.095 0v2.05zm0 1.04c1.132 0 2.047.916 2.047 2.05a2.046 2.046 0 0 1-2.047 2.049H4.298a2.047 2.047 0 0 1-2.048-2.05c0-1.133.915-2.05 2.048-2.05h5.135Zm8.206 2.049a2.047 2.047 0 1 1 4.096 0c0 1.134-.916 2.05-2.048 2.05h-2.048zm-1.024 0a2.047 2.047 0 1 1-4.095 0V4.3a2.047 2.047 0 1 1 4.095 0v5.14Zm-2.048 8.213c1.133 0 2.048.916 2.048 2.05a2.047 2.047 0 1 1-4.095 0v-2.05zm0-1.024a2.047 2.047 0 0 1-2.047-2.05c0-1.133.915-2.05 2.047-2.05h5.135c1.133 0 2.048.917 2.048 2.05 0 1.134-.915 2.05-2.048 2.05z"
    />
  </svg>
);
export default SvgIconBrandSlack;
