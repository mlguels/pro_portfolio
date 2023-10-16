import * as React from "react";
const ServiceIcon3 = (
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
        className="group-hover:fill-[#FFFF] dark:fill-primary-light"
        width={62}
        height={62}
        x={16.095}
        y={16}
        fill="#0252CD"
        rx={10}
      />
    </g>
    <g clipPath="url(#b)">
      <path
        className="group-hover:fill-primary-dark"
        fill="#fff"
        d="M57.75 37H37.44c-.49 0-.959.192-1.305.532-.346.342-.54.804-.54 1.286v16.364c0 .482.194.944.54 1.285.346.341.816.533 1.305.533H57.75c.49 0 .96-.192 1.305-.532.347-.342.541-.804.541-1.286V38.818c0-.482-.194-.944-.54-1.285A1.86 1.86 0 0 0 57.748 37ZM43.533 49a.898.898 0 0 1 .185 1.273.933.933 0 0 1-1.292.182l-3.693-2.728a.913.913 0 0 1-.37-.727.898.898 0 0 1 .37-.727l3.692-2.728a.933.933 0 0 1 1.292.182.898.898 0 0 1-.184 1.273l-2.708 2 2.708 2Zm6.795-8.114-3.693 12.728a.904.904 0 0 1-.436.557.933.933 0 0 1-1.267-.357.899.899 0 0 1-.071-.7l3.692-12.728a.912.912 0 0 1 .442-.532.936.936 0 0 1 .694-.075c.233.066.43.218.55.425.118.207.15.452.089.682Zm6.128 6.841-3.693 2.728a.933.933 0 0 1-1.292-.182.899.899 0 0 1 .185-1.273l2.708-2-2.708-2a.914.914 0 0 1-.36-.599.896.896 0 0 1 .175-.674.92.92 0 0 1 .608-.354.935.935 0 0 1 .684.172l3.693 2.728a.913.913 0 0 1 .369.727.898.898 0 0 1-.37.727Z"
      />
    </g>
    <defs>
      <clipPath id="b">
        <path fill="#fff" d="M35.595 35h24v24h-24z" />
      </clipPath>
      <filter
        id="a"
        width={114}
        height={114}
        x={0.095}
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
          result="effect1_dropShadow_3309_2100"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_3309_2100"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default ServiceIcon3;
