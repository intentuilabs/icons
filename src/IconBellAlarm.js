import * as React from "react";
const SvgIconBellAlarm = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="m3.687 17.09.74.12zm16.626 0-.74.12zm-1.358-8.417.74-.119zm-13.91 0-.74-.119zM1.662 7.045a.75.75 0 0 0 1.442.411zm3.97-3.753a.75.75 0 0 0-1.034-1.088zm13.77-1.088a.75.75 0 1 0-1.033 1.088zm1.494 5.252a.75.75 0 0 0 1.442-.411zm-2.681 1.337 1.358 8.417 1.48-.239-1.357-8.417zm1.11 8.707H4.676V19h14.65v-1.5Zm-14.898-.29 1.358-8.417-1.48-.239-1.358 8.417zm.247.29a.25.25 0 0 1-.247-.29l-1.48-.239A1.75 1.75 0 0 0 4.674 19zm14.899-.29a.25.25 0 0 1-.247.29V19a1.75 1.75 0 0 0 1.727-2.029zM12 3.5a6.295 6.295 0 0 1 6.215 5.293l1.48-.239A7.795 7.795 0 0 0 12 2zM12 2a7.795 7.795 0 0 0-7.696 6.554l1.481.239A6.295 6.295 0 0 1 12 3.5zm3.3 15.983c-.585 1.533-1.88 2.517-3.3 2.517V22c2.158 0 3.939-1.484 4.7-3.483zM12 20.5c-1.42 0-2.715-.984-3.3-2.517l-1.4.534C8.06 20.516 9.841 22 12 22zM3.104 7.456a9.25 9.25 0 0 1 2.527-4.164L4.598 2.204a10.75 10.75 0 0 0-2.936 4.84zm15.265-4.164a9.25 9.25 0 0 1 2.527 4.164l1.442-.411a10.75 10.75 0 0 0-2.936-4.84z"
    />
  </svg>
);
export default SvgIconBellAlarm;
