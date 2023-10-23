import * as React from "react";
const ServiceIcon1 = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={114}
    height={114}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect
        className="group-hover:fill-main-bg dark:fill-primary-light"
        width={62}
        height={62}
        x={16}
        y={16}
        fill="#0252CD"
        rx={10}
      />
    </g>
    <path
      className="group-hover:fill-[#0252CD]"
      fill="#fff"
      d="M38.5 52.25V56h3.75l11.06-11.07-3.75-3.75L38.5 52.25Zm19.61 1.11-4.25 4.25-5.2-5.2 1.77-1.77 1 1 2.47-2.48 1.42 1.42L53.86 52l1.06 1 1.42-1.4 1.77 1.76Zm-16-7.53-5.22-5.19 4.25-4.25 1.76 1.77-2.47 2.48 1.07 1.06 2.46-2.48 1.42 1.42-1.42 1.41 1 1-2.85 2.78ZM56.21 42c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75L56.21 42Z"
    />
    <defs>
      <filter
        id="a"
        width={114}
        height={114}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={10} dy={10} />
        <feGaussianBlur stdDeviation={13} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.00784314 0 0 0 0 0.321569 0 0 0 0 0.803922 0 0 0 0.28 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3309_2086"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_3309_2086"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default ServiceIcon1;
