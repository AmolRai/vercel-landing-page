const RedArrowIcon = ({ width = 28, height = 28, color = "currentColor" }) => {
  return (
    <svg fill="none" height={height} viewBox="0 0 17 18" width={width}>
      <path
        d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002ZM9.43322 10.6417L9.43355 10.6416C9.43344 10.6416 9.43333 10.6416 9.43322 10.6417L9.34913 10.4062L9.43322 10.6417Z"
        fill={color}
        stroke="white"
        stroke-width="1.5"
        filter="drop-shadow(0 4px 8px rgba(0,0,0,.04)) drop-shadow(0 1px 1px rgba(0,0,0,.02)) drop-shadow(0 2px 2px rgba(0,0,0,.16))"
      ></path>
    </svg>
  );
};

export default RedArrowIcon;
