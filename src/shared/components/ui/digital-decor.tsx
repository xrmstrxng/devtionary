type PixelStarVariant = "small" | "medium" | "spark";

export function PixelStar({
  variant = "small",
  className = "",
}: {
  variant?: PixelStarVariant;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pixel-star pixel-star-${variant} ${className}`}
      viewBox="0 0 24 24"
      focusable="false"
    >
      <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
      {variant === "spark" && <rect x="10" y="10" width="4" height="4" />}
    </svg>
  );
}

const symbols = ["</>", "{ }", "[ ]", "=>", "01", "API", "const", "git"];

export function ProgrammingBackground() {
  return (
    <div className="programming-background" aria-hidden="true">
      <div className="digital-orbit" />
      {symbols.map((symbol, index) => (
        <span className={`code-symbol code-symbol-${index + 1}`} key={symbol}>
          {symbol}
        </span>
      ))}
      <div className="hero-stars">
        <PixelStar variant="medium" className="star-one" />
        <PixelStar variant="small" className="star-two" />
        <PixelStar variant="spark" className="star-three" />
        <PixelStar variant="small" className="star-four" />
        <PixelStar variant="medium" className="star-five" />
        <PixelStar variant="spark" className="star-six" />
        <PixelStar variant="small" className="star-seven" />
        <PixelStar variant="medium" className="star-eight" />
      </div>
    </div>
  );
}
