const VercelIcon = ({ width = 28, height = 28, color = "currentColor" }) => {
  return (
    <svg
      aria-label="Vercel logomark"
      height={height}
      role="img"
      width={width}
      overflow="visible"
      viewBox="0 0 74 64"
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill={color}
      ></path>
    </svg>
  );
};

export default VercelIcon;
