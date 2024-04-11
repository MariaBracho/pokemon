import type { SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={16}
      height={16}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h16v16H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#FAFAFA"
        d="m13.067 14-4.2-4.2a4.062 4.062 0 0 1-2.533.867c-1.212 0-2.237-.42-3.076-1.259S2 7.544 2 6.333c0-1.21.42-2.236 1.258-3.075C4.098 2.42 5.122 2 6.333 2s2.236.42 3.075 1.258c.84.84 1.259 1.864 1.259 3.075A4.062 4.062 0 0 1 9.8 8.867l4.2 4.2-.933.933ZM6.333 9.333c.834 0 1.542-.291 2.125-.875a2.893 2.893 0 0 0 .875-2.125c0-.833-.291-1.541-.875-2.125a2.893 2.893 0 0 0-2.125-.875c-.833 0-1.541.292-2.125.875a2.893 2.893 0 0 0-.875 2.125c0 .834.292 1.542.875 2.125a2.893 2.893 0 0 0 2.125.875Z"
      />
    </g>
  </svg>
);
export default SearchIcon;
