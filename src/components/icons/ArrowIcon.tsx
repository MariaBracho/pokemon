import type { SVGProps } from 'react';

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#fff"
        d="m7.958 10 6.125 6.125c.209.208.31.451.302.73-.006.277-.114.52-.322.728a1 1 0 0 1-.73.313 1 1 0 0 1-.729-.313l-6.416-6.395a1.665 1.665 0 0 1-.375-.563A1.672 1.672 0 0 1 5.688 10c0-.208.041-.417.125-.625.083-.208.208-.396.375-.563l6.416-6.416a.975.975 0 0 1 .74-.302c.285.007.531.114.74.323a1 1 0 0 1 .312.729 1 1 0 0 1-.313.729L7.958 10Z"
      />
    </g>
  </svg>
);

export default ArrowIcon;
