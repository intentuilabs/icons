import * as React from "react";
const SvgIconBrandMastadon = (props) => (
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
      fillRule="evenodd"
      d="M15.97 17.994c2.505-.3 4.687-1.843 4.962-3.254.432-2.223.396-5.424.396-5.424 0-4.338-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.45-.956h-.064c-2.556.02-5.016.298-6.45.956 0 0-2.842 1.272-2.842 5.61l-.003.828c-.004.8-.008 1.687.015 2.613.103 4.243.778 8.425 4.7 9.463 1.81.48 3.363.58 4.613.51 2.268-.125 3.542-.809 3.542-.809l-.075-1.646s-1.621.512-3.441.45c-1.804-.063-3.708-.195-4-2.41a5 5 0 0 1-.04-.62s1.77.432 4.014.535c1.372.063 2.659-.08 3.966-.236m2.005-3.088V9.653q0-1.611-.822-2.558c-.567-.631-1.308-.955-2.229-.955-1.065 0-1.871.41-2.404 1.228l-.519.87-.518-.87c-.534-.819-1.34-1.228-2.405-1.228-.92 0-1.662.324-2.229.955q-.823.947-.822 2.558v5.253h2.081V9.807c0-1.075.452-1.62 1.357-1.62 1 0 1.502.647 1.502 1.927v2.79h2.069v-2.79c0-1.28.5-1.927 1.501-1.927.905 0 1.357.545 1.357 1.62v5.1h2.081Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandMastadon;
