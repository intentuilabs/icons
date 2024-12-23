import * as React from "react";
const SvgIconBrandAkamai = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M17.664 17.396h-1.89l1.732-3.465zm.157 1.575.158 1.417h2.205l-.788-8.031H16.09l-4.094 8.03H14.2l.63-1.416z"
    />
    <path
      fill="currentColor"
      d="M12.94 22.277c-4.095-1.26-7.087-5.039-7.087-9.448 0-4.567 2.992-8.344 7.244-9.607.472-.157.315-.472-.157-.472-5.67.158-10.08 4.567-10.08 10.079s4.41 9.921 10.08 9.921c.472 0 .472-.315 0-.473m-5.197-7.243v-.788c0-4.406 3.464-7.874 7.874-7.874 4.094 0 5.354 1.89 5.512 1.732s-1.418-3.779-6.3-3.779c-4.406 0-7.874 3.465-7.874 7.874q0 1.418.473 2.834c.157.473.315.473.315 0Zm3.307-5.67c2.047-.945 4.567-.945 7.087 0 1.732.63 2.677 1.417 2.834 1.417s-.945-1.89-2.992-2.677c-2.52-.948-5.04-.469-7.087 1.102-.157.158 0 .316.158.158"
    />
  </svg>
);
export default SvgIconBrandAkamai;
