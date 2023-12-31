import * as React from "react";
const SvgComponent = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    className=""
    xmlns="http://www.w3.org/2000/svg"
    width={17.828}
    height={17.828}
    {...props}
  >
    <path
      className="dark:bg-main-bg"
      d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"
    />
  </svg>
);
export default SvgComponent;
