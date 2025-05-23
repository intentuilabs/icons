import * as React from "react";
const SvgIconLink = (props) => (
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
      d="m3.207 15.207.53-.53zm5.586 5.586-.53.53zm12-12-.53.53zm-5.586-5.586-.53.53zm-1.414 0 .53.53zM10.22 5.72a.75.75 0 1 0 1.06 1.06zm-3.44 5.56a.75.75 0 0 0-1.06-1.06zm-3.573 2.513.53.53zM17.22 12.72a.75.75 0 0 0 1.06 1.06zm3.573-2.513.53.53zM10.207 20.793l-.53-.53zm3.573-2.513a.75.75 0 0 0-1.06-1.06zm-5.31-3.81a.75.75 0 0 0 1.06 1.06zm7.06-4.94a.75.75 0 0 0-1.06-1.06zM2.677 15.737l5.586 5.586 1.06-1.06-5.585-5.586zm18.646-7.475-5.585-5.585-1.061 1.06 5.586 5.586zm-8.06-5.585L10.22 5.72l1.06 1.06 3.043-3.043zM5.72 10.22l-3.043 3.042 1.06 1.061L6.78 11.28zm12.56 3.56 3.043-3.043-1.06-1.06-3.043 3.043zm-7.543 7.543 3.043-3.043-1.06-1.06-3.043 3.042zm9.526-12a.25.25 0 0 1 0 .354l1.06 1.06a1.75 1.75 0 0 0 0-2.475zm-12 12a1.75 1.75 0 0 0 2.475 0l-1.061-1.06a.25.25 0 0 1-.354 0zm-4.525-6.646a.25.25 0 0 1 0-.354l-1.061-1.06a1.75 1.75 0 0 0 0 2.474zm12-12a1.75 1.75 0 0 0-2.475 0l1.06 1.06a.25.25 0 0 1 .354 0zM9.53 15.53l6-6-1.06-1.06-6 6z"
    />
  </svg>
);
export default SvgIconLink;
