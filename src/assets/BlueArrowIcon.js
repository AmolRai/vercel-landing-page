const BlueArrowIcon = ({ width = 28, height = 28, color = "currentColor" }) => {
  return (
    <svg fill="none" height={height} viewBox="0 0 17 18" width={width}>
      <path
        d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
        fill={color}
        stroke="white"
        stroke-width="1.5"
        filter="drop-shadow(0 4px 8px rgba(0,0,0,.04)) drop-shadow(0 1px 1px rgba(0,0,0,.02)) drop-shadow(0 2px 2px rgba(0,0,0,.16))"
      ></path>
    </svg>
  );
};

export default BlueArrowIcon;
