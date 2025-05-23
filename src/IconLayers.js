import * as React from "react";
const SvgIconLayers = (props) => (
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
      d="M12.09 4.59a.25.25 0 0 0-.18 0L3.685 7.766a.25.25 0 0 0 0 .466l8.225 3.178a.25.25 0 0 0 .18 0l8.225-3.178a.25.25 0 0 0 0-.466zm-.72-1.4a1.75 1.75 0 0 1 1.26 0l8.226 3.178c1.492.576 1.492 2.688 0 3.265l-8.225 3.178a1.75 1.75 0 0 1-1.262 0L3.144 9.633c-1.492-.577-1.492-2.689 0-3.265z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m20.856 13.633-8.225 3.178a1.75 1.75 0 0 1-1.262 0l-8.225-3.178c-.89-.344-1.249-1.233-1.078-2.017l9.802 3.787a.37.37 0 0 0 .267 0l9.8-3.786c.17.784-.19 1.672-1.079 2.016"
    />
    <path
      fill="currentColor"
      d="M20.857 17.633 12.63 20.81a1.75 1.75 0 0 1-1.261 0l-8.225-3.178c-.89-.344-1.25-1.233-1.078-2.017l9.801 3.787a.37.37 0 0 0 .267 0l9.8-3.786c.17.784-.19 1.672-1.078 2.016Z"
    />
  </svg>
);
export default SvgIconLayers;
