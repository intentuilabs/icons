import * as React from "react";
const SvgIconBrandStripe = (props) => (
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
      fillRule="evenodd"
      d="M19.692 13.092c0-1.094-.53-1.957-1.543-1.957-1.017 0-1.632.863-1.632 1.948 0 1.287.727 1.936 1.77 1.936.508 0 .892-.115 1.183-.278v-.854a2.3 2.3 0 0 1-1.047.235c-.414 0-.782-.146-.83-.65h2.09c0-.055.01-.278.01-.38Zm-2.11-.406c0-.483.294-.684.563-.684.26 0 .539.201.539.684H17.58Zm-2.715-1.551c-.418 0-.688.196-.837.333l-.056-.265h-.94v4.983l1.068-.227.005-1.209c.154.111.38.27.756.27.765 0 1.462-.616 1.462-1.97-.005-1.24-.71-1.915-1.458-1.915m-.256 2.944c-.252 0-.402-.09-.504-.2l-.005-1.586c.112-.124.265-.21.509-.21.389 0 .658.436.658.996 0 .573-.265 1-.658 1m-3.047-3.197 1.073-.23v-.868l-1.073.227v.872Zm0 .325h1.073v3.74h-1.073zm-1.15.316-.068-.316h-.923v3.74h1.068v-2.535c.252-.329.68-.269.812-.222v-.983c-.136-.051-.636-.145-.889.316M8.279 10.28l-1.043.222-.004 3.423c0 .633.474 1.098 1.107 1.098.35 0 .606-.064.747-.14v-.868c-.136.055-.812.252-.812-.38v-1.518h.812v-.91h-.812zm-2.89 2.013c0-.167.138-.231.364-.231.325 0 .735.098 1.06.274V11.33a2.8 2.8 0 0 0-1.06-.196c-.867 0-1.444.453-1.444 1.209 0 1.18 1.624.992 1.624 1.5 0 .197-.171.26-.41.26-.355 0-.808-.145-1.167-.341v1.017c.397.17.799.244 1.166.244.89 0 1.5-.44 1.5-1.206-.004-1.273-1.632-1.047-1.632-1.525Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandStripe;
