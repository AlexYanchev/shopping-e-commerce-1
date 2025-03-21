import React, { FC } from 'react';

interface CheckboxIconProps {}

const CheckboxIcon: FC<CheckboxIconProps> = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0ZM14.592 7.46049C14.8463 7.13353 14.7874 6.66232 14.4605 6.40802C14.1335 6.15372 13.6623 6.21262 13.408 6.53958L9.40099 11.6914C9.31189 11.806 9.14429 11.8209 9.03641 11.7238L6.50173 9.44256C6.19385 9.16547 5.71963 9.19043 5.44254 9.49831C5.16544 9.80619 5.1904 10.2804 5.49828 10.5575L8.03296 12.8387C8.78809 13.5183 9.9613 13.4143 10.585 12.6123L14.592 7.46049Z"
        fill="#131118"
      />
    </svg>
  );
};

export default CheckboxIcon;
