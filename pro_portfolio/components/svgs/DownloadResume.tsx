import * as React from "react";
const SvgComponent = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path
      className="dark:fill-main-bg"
      fill="#151E2C"
      d="M2 14.167c-.458 0-.85-.164-1.178-.49A1.602 1.602 0 0 1 .333 12.5V10H2v2.5h10V10h1.667v2.5c0 .458-.164.85-.49 1.178-.327.326-.72.49-1.177.489H2Zm5-3.334L2.833 6.667 4 5.458l2.167 2.167V.833h1.666v6.792L10 5.458l1.167 1.209L7 10.833Z"
    />
  </svg>
);
export default SvgComponent;
