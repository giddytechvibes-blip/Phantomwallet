import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const GhostIcon: React.FC<IconProps> = ({ size = 64, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      {/* Main Blob Shape */}
      <path
        d="M10 38
           C10 24 18 12 30 10
           C44 8 56 16 56 28
           C56 40 46 48 34 48
           C26 48 22 42 20 38
           C18 44 12 44 10 38Z"
        fill="#3F356B"
      />

      {/* Eyes */}
      <circle cx="40" cy="26" r="3.2" fill="white" />
      <circle cx="48" cy="26" r="3.2" fill="white" />
    </svg>
  );
};

export default GhostIcon;
