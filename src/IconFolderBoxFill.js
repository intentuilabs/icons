import * as React from "react";
const SvgIconFolderBoxFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 8.001V3.75C5 2.784 5.784 2 6.75 2h3.336c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 0 0 .177.073h4.336c.966 0 1.75.784 1.75 1.75v2.251q.203.002.373.015c.213.018.446.057.676.175.33.168.598.435.765.765.118.23.157.463.175.676.016.198.016.434.016.692v8.352c0 .258 0 .494-.016.692a1.8 1.8 0 0 1-.175.677 1.75 1.75 0 0 1-.765.764 1.8 1.8 0 0 1-.676.175c-.198.016-.434.016-.692.016H5.324c-.258 0-.494 0-.692-.016a1.8 1.8 0 0 1-.676-.175 1.75 1.75 0 0 1-.765-.765 1.8 1.8 0 0 1-.175-.676A9 9 0 0 1 3 18.676v-8.352c0-.258 0-.494.016-.692a1.8 1.8 0 0 1 .175-.676 1.75 1.75 0 0 1 .765-.765 1.8 1.8 0 0 1 .676-.175Q4.8 8.003 5 8.001M6.5 3.75a.25.25 0 0 1 .25-.25h3.336a.25.25 0 0 1 .177.073l1.414 1.414a1.75 1.75 0 0 0 1.237.513h4.336a.25.25 0 0 1 .25.25V8h-11zm.5 9a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconFolderBoxFill;
