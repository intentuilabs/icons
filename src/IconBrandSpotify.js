import * as React from "react";
const SvgIconBrandSpotify = (props) => (
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
      d="M12 2C6.475 2 1.998 6.477 1.998 12s4.477 10 10 10c5.524 0 10-4.477 10-10s-4.476-10-10-10Zm4.585 14.423a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.624.624 0 0 1-.277-1.216c3.81-.87 7.077-.495 9.713 1.116.293.18.386.563.206.857M17.81 13.7a.78.78 0 0 1-1.072.257c-2.688-1.653-6.786-2.131-9.965-1.166a.78.78 0 0 1-.453-1.492c3.632-1.102 8.147-.568 11.233 1.329a.78.78 0 0 1 .257 1.072m.105-2.836c-3.223-1.914-8.54-2.09-11.617-1.156a.935.935 0 1 1-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.934.934 0 1 1-.954 1.608Z"
    />
  </svg>
);
export default SvgIconBrandSpotify;
