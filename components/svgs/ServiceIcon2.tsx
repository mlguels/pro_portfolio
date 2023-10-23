import * as React from "react";
const ServiceICon2 = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    className="pt-5"
    xmlns="http://www.w3.org/2000/svg"
    width={63}
    height={100}
    fill="none"
    {...props}
  >
    <rect
      className="group-hover:fill-main-bg dark:fill-primary-light"
      width={62}
      height={62}
      x={0.548}
      fill="#0252CD"
      rx={10}
    />
    <path
      className="group-hover:fill-[#0252CD]"
      fill="#fff"
      d="M40.526 32.21a1 1 0 0 0-.396-1.024l-14-10a1 1 0 0 0-1.575.931l2 17a1 1 0 0 0 1.767.516l3.612-4.416 3.377 5.46 1.7-1.052-3.356-5.428 6.089-1.218a.995.995 0 0 0 .782-.769Z"
    />
  </svg>
);
export default ServiceICon2;
