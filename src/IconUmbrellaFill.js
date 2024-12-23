import * as React from "react";
const SvgIconUmbrellaFill = (props) => (
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
      d="M10.17 13.487c-.359.298-.72.625-1.05.962a25.6 25.6 0 0 1-2.265-6.822c-.216-1.233-.288-2.308-.217-3.108.035-.4.104-.7.188-.907.085-.21.162-.264.176-.272s.098-.047.323-.016c.22.03.515.121.88.29.728.34 1.623.94 2.582 1.742a25.6 25.6 0 0 1 4.776 5.373c-.457.116-.92.267-1.358.428-.819.303-1.598.664-2.13.971-.53.307-1.234.8-1.905 1.359M5.12 4.74c-.04.912.056 1.994.258 3.146a27.1 27.1 0 0 0 2.29 7.013c-.945.294-1.867 1.002-2.626 2.152a1 1 0 0 1-1.7-.05C.98 12.91 1.835 7.85 5.12 4.74m4.035-2.329c.81.421 1.7 1.045 2.595 1.795a27.1 27.1 0 0 1 4.929 5.491c.727-.672 1.801-1.116 3.177-1.199A1 1 0 0 0 20.662 7c-2.36-4.088-7.172-5.88-11.507-4.589m4.337 10.671a10 10 0 0 0-.667.345 10 10 0 0 0-.632.405l3.784 6.554a.75.75 0 1 0 1.3-.75z"
    />
  </svg>
);
export default SvgIconUmbrellaFill;
