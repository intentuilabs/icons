import * as React from "react";
const SvgIconCocktail = (props) => (
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
      d="M12 13.015v8.235m0-8.235-8.905-7.5c-.713-.601-.288-1.765.645-1.765h16.52c.933 0 1.358 1.164.645 1.765zm0 8.235H7.75m4.25 0h4.25"
    />
  </svg>
);
export default SvgIconCocktail;
