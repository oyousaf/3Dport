const Button = ({
  name,
  isBeam = false,
  as = "button",
  href = "",
  onClick,
  ariaLabel,
  containerClass = "",
  type = "button",
  disabled = false,
  children,
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-3 px-6 py-3 bg-mint text-emeraldDark text-sm sm:text-base font-semibold rounded-lg shadow-md transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emeraldDark disabled:hover:scale-100 disabled:cursor-not-allowed";

  const content = (
    <>
      {isBeam && (
        <span className="relative flex h-3 w-3 shrink-0" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      )}
      <span className="text-center">{name}</span>
      {children}
    </>
  );

  if (as === "a") {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={`${baseClasses} ${containerClass}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseClasses} ${containerClass}`}
    >
      {content}
    </button>
  );
};

export default Button;
