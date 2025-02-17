const CodeIcon = ({ width = 28, height = 28, color = "currentColor" }) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      width={width}
      height={height}
      viewBox="0 0 28 28"
    >
      <path
        d="M2.50012 25.5L11.2151 16.3009C11.3749 16.1322 11.3749 15.8679 11.2151 15.6991L2.50012 6.5"
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="3.5"
      />
      <path
        d="M14.75 26.25H26.25"
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="3.5"
      />
    </svg>
  );
};

export default CodeIcon;
