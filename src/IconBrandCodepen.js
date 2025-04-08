import * as React from "react";
const SvgIconBrandCodepen = (props) => (
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
      d="M21.992 8.854c-.08-.52-.66-.8-1.06-1.061-.718-.48-1.418-.94-2.137-1.42-1.699-1.141-3.417-2.282-5.115-3.423-.4-.26-.8-.54-1.199-.8-.28-.2-.66-.2-.959 0-1.139.76-2.298 1.54-3.437 2.301L3.05 7.813c-.44.28-1.019.56-1.039 1.16-.02.66 0 1.341 0 2.002v3.201c0 .58-.12 1.26.42 1.621 1.279.88 2.577 1.721 3.876 2.581 1.599 1.061 3.197 2.142 4.795 3.202.44.3.88.62 1.419.26.46-.3.9-.6 1.359-.9 1.778-1.18 3.556-2.381 5.335-3.562l1.977-1.32c.12-.08.26-.16.38-.26.28-.201.4-.481.4-.821V9.474c.02-.22.04-.42.02-.62 0 .04 0-.02 0 0M12.86 4.47l6.733 4.503-2.997 2.02-3.736-2.5zm-1.719 0v4.002l-3.716 2.502-3.017-2.001zM3.73 10.574l2.138 1.441-2.138 1.44zm7.412 8.985L4.41 15.057l2.997-2.021 3.716 2.501v4.022h.02Zm.86-5.503-3.037-2.04 3.037-2.042 3.037 2.041zm.859 5.503v-4.002l3.716-2.501 2.997 2.02zm7.412-6.103-2.137-1.44 2.157-1.442z"
    />
  </svg>
);
export default SvgIconBrandCodepen;
