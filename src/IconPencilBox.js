import * as React from "react";
const SvgIconPencilBox = (props) => (
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
      d="m12.75 8.25-.53-.53a.75.75 0 0 0-.22.53zm0 3H12c0 .414.336.75.75.75zm3 0V12a.75.75 0 0 0 .53-.22zm2.293-8.293.53.53zm1.414 0-.53.53zm1.586 1.586-.53.53zm0 1.414.53.53zM11.25 4.5a.75.75 0 0 0 0-1.5zM21 12.75a.75.75 0 0 0-1.5 0zM4.296 20.14l.34-.667zm-.437-.436-.668.34zm15.845.437-.34-.668zm.437-.437-.668-.34zM3.859 4.296l-.668-.34zm.437-.437-.34-.668zM12 8.249v3h1.5v-3zm.75 3.75h3v-1.5h-3zm.53-3.219 5.293-5.293-1.06-1.06L12.22 7.72zm5.647-5.293 1.586 1.586 1.06-1.06-1.586-1.586zm1.586 1.94L15.22 10.72l1.06 1.06 5.293-5.293zm0-.354a.25.25 0 0 1 0 .354l1.06 1.06a1.75 1.75 0 0 0 0-2.475zm-1.94-1.586a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0zM18.65 19.5H5.35V21h13.3zM4.5 18.65V5.35H3v13.3zM5.35 4.5h5.9V3h-5.9zm14.15 8.25v5.9H21v-5.9zM5.35 19.5c-.292 0-.467 0-.596-.011-.12-.01-.134-.025-.117-.016l-.681 1.336c.23.117.463.157.676.175.205.016.45.016.718.016zM3 18.65c0 .268 0 .513.016.718.018.213.057.446.175.676l1.336-.68c.009.016-.006.002-.016-.118a8 8 0 0 1-.011-.596zm1.636.823a.25.25 0 0 1-.109-.11l-1.336.681c.168.33.435.597.765.765zM18.65 21c.268 0 .514 0 .718-.016.213-.018.446-.058.677-.175l-.682-1.336c.017-.009.003.006-.117.016-.13.01-.304.01-.596.01zm.85-2.35c0 .292 0 .466-.011.596-.01.12-.025.134-.016.117l1.336.681a1.8 1.8 0 0 0 .175-.676c.017-.205.016-.45.016-.718zm.544 2.16a1.75 1.75 0 0 0 .765-.766l-1.336-.68a.25.25 0 0 1-.11.109l.681 1.336ZM4.5 5.35c0-.293 0-.467.011-.596.01-.12.025-.134.016-.118l-1.336-.68a1.8 1.8 0 0 0-.175.676C3 4.836 3 5.082 3 5.35zM5.35 3c-.268 0-.513 0-.718.016a1.8 1.8 0 0 0-.676.175l.68 1.336c-.016.008-.002-.006.118-.016.13-.01.304-.011.596-.011zm-.823 1.636a.25.25 0 0 1 .11-.109l-.681-1.336a1.75 1.75 0 0 0-.765.764z"
    />
  </svg>
);
export default SvgIconPencilBox;
