import * as React from "react";
const SvgIconBrandPinterest = (props) => (
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
      d="M12 2C6.474 2 2 6.478 2 12.008a10 10 0 0 0 6.351 9.316c-.09-.797-.165-1.999.03-2.87.18-.782 1.172-4.974 1.172-4.974s-.3-.601-.3-1.488c0-1.397.81-2.434 1.801-2.434.856 0 1.261.646 1.261 1.413 0 .856-.54 2.149-.825 3.335-.24.992.495 1.804 1.486 1.804 1.772 0 3.138-1.879 3.138-4.583 0-2.39-1.727-4.072-4.174-4.072-2.838 0-4.52 2.133-4.52 4.342 0 .857.33 1.788.751 2.284.075.105.09.18.075.286-.075.315-.24.991-.27 1.127-.045.18-.15.225-.33.135-1.247-.586-2.027-2.404-2.027-3.877 0-3.155 2.297-6.056 6.606-6.056 3.469 0 6.156 2.48 6.156 5.77 0 3.442-2.177 6.222-5.18 6.222-1.006 0-1.967-.526-2.297-1.142l-.616 2.374c-.225.871-.84 1.953-1.246 2.63.931.285 1.922.45 2.958.45 5.526 0 10-4.478 10-10.008C22 6.478 17.526 2 12 2"
    />
  </svg>
);
export default SvgIconBrandPinterest;
