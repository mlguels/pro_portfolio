import * as React from "react";
const SvgComponent = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={115}
    height={114}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect
        width={62}
        height={62}
        x={16.642}
        y={16}
        fill="#0252CD"
        rx={10}
        className="group-hover:fill-[#FFFF] dark:fill-primary-light"
      />
    </g>
    <path
      fill="#fff"
      d="M44.817 52.25c.6.6 1.375.894 2.325.882.95-.012 1.65-.356 2.1-1.032l8.4-12.6-12.6 8.4c-.675.45-1.03 1.138-1.068 2.063-.037.925.244 1.687.843 2.287ZM47.142 35c1.475 0 2.894.206 4.257.62a13.834 13.834 0 0 1 3.843 1.855l-2.85 1.8a11.352 11.352 0 0 0-2.568-.956A11.555 11.555 0 0 0 47.142 38c-3.325 0-6.156 1.169-8.494 3.505-2.338 2.337-3.507 5.169-3.506 8.495 0 1.05.144 2.087.432 3.112A12.355 12.355 0 0 0 36.792 56h20.7c.575-.95.994-1.938 1.257-2.962.263-1.025.394-2.088.393-3.188 0-.9-.106-1.775-.32-2.625a10.96 10.96 0 0 0-.955-2.475l1.8-2.85a16.663 16.663 0 0 1 1.782 3.75c.438 1.325.67 2.7.693 4.125a14.659 14.659 0 0 1-.487 4.087c-.35 1.3-.863 2.538-1.538 3.713-.275.45-.65.8-1.125 1.05s-.975.375-1.5.375h-20.7a3.177 3.177 0 0 1-1.5-.375c-.475-.25-.85-.6-1.125-1.05A14.887 14.887 0 0 1 32.142 50c0-2.075.394-4.019 1.182-5.832a15.262 15.262 0 0 1 3.225-4.761 15.214 15.214 0 0 1 4.78-3.226c1.823-.788 3.761-1.182 5.813-1.181Z"
    />
    <defs>
      <filter
        id="a"
        width={114}
        height={114}
        x={0.642}
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
          result="effect1_dropShadow_3309_2107"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_3309_2107"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
