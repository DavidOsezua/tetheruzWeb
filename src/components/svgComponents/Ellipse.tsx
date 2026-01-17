const Ellipse = ({ maxWidth = "w-full", className = "" }) => {
  return (
    <div className={`w-full ${maxWidth} ${className}`}>
      <svg
        className="w-full h-auto"
        style={{ display: "block" }}
        viewBox="0 0 453 453"
        fill="none"
      >
        <circle
          cx="138.5"
          cy="314.5"
          r="314.5"
          fill="url(#paint0_linear_358_46557)"
          fill-opacity="0.1"
        />
        <defs>
          <linearGradient
            id="paint0_linear_358_46557"
            x1="-203.092"
            y1="-34.7175"
            x2="570.863"
            y2="225.274"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B9D2E2" />
            <stop offset="1" stop-color="#B29CFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Ellipse;
