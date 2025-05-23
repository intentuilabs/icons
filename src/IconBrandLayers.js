import * as React from "react";
const SvgIconBrandLayers = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`intentui-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillOpacity={0.2}
      d="m2 13.644.05-7.5c.009-1.357.958-2.52 2.269-2.78L11.56 1.93c1.74-.345 3.355 1.017 3.343 2.818l-.05 7.5c-.009 1.357-.958 2.52-2.269 2.78l-7.242 1.436c-1.74.345-3.355-1.017-3.343-2.82Z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.5}
      d="m5.548 16.636.05-7.5c.008-1.356.958-2.52 2.269-2.78l7.242-1.435c1.74-.345 3.355 1.017 3.343 2.82l-.05 7.5c-.009 1.356-.958 2.52-2.269 2.78l-7.242 1.435c-1.74.344-3.355-1.017-3.343-2.819z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.8}
      d="m9.096 19.628.05-7.5c.009-1.358.958-2.52 2.269-2.78l7.242-1.436c1.74-.345 3.355 1.017 3.343 2.819l-.05 7.5c-.009 1.357-.958 2.52-2.269 2.78l-7.242 1.435c-1.74.345-3.355-1.016-3.343-2.818"
    />
  </svg>
);
export default SvgIconBrandLayers;
