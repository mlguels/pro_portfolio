import * as React from "react";

const SvgComponent = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    className="dark:bg-main-black"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={100}
    height={100}
    {...props}
  >
    <g transform="translate(50, 50)">
      <circle
        r={35}
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          isCustomFont: "none",
          fontFileUrl: "none",
          fill: "#f3f8ff",
          fillRule: "nonzero",
          opacity: 1,
        }}
      />
      <circle
        r={34.5}
        style={{
          stroke: "#151e2c",
          strokeOpacity: 0.4,
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          isCustomFont: "none",
          fontFileUrl: "none",
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
      />
    </g>
    <circle
      r={22}
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeDashoffset: 0,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        isCustomFont: "none",
        fontFileUrl: "none",
        fill: "#151e2c",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="translate(50, 50)"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

export default SvgComponent;
