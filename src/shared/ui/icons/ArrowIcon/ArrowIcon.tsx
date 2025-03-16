import React, { FC } from 'react';

interface ArrowIconProps {}

const ArrowIcon: FC<ArrowIconProps> = () => {
  return (
    <svg
      width="9"
      height="18"
      viewBox="0 0 9 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
      }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.53036 0.549626C8.82325 0.842519 8.82325 1.31739 8.53036 1.61029L2.01036 8.13029C1.53325 8.60739 1.53325 9.39252 2.01036 9.86963L8.53036 16.3896C8.82325 16.6825 8.82325 17.1574 8.53036 17.4503C8.23746 17.7432 7.76259 17.7432 7.4697 17.4503L0.949697 10.9303C-0.113196 9.86739 -0.113196 8.13252 0.949697 7.06963L7.4697 0.549626C7.76259 0.256733 8.23746 0.256733 8.53036 0.549626Z"
        fill="#131118"
      />
    </svg>
  );
};

export default ArrowIcon;
