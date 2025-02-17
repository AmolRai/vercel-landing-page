const RingIcon = ({ width = 28, height = 28, color = "currentColor" }) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="30"
      stroke-width="2"
      viewBox="0 0 100 100"
      width="30"
    >
      <circle
        opacity="0"
        cx="50"
        cy="50"
        r="42.5"
        stroke-width="15"
        stroke-dashoffset="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="gauge_arcSecondary__s11_g"
        stroke="black"
      ></circle>
      <circle
        cx="50"
        cy="50"
        r="42.5"
        stroke-width="15"
        stroke-dashoffset="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="gauge_arc__UGu7u"
        data-geist-progress-circle-fg=""
        stroke="red"
        opacity="1"
      ></circle>
    </svg>
  );
};

export default RingIcon;
