const Button = ({
  name,
  isBeam = false,
  as = "button",
  href = "",
  onClick,
  ariaLabel,
  containerClass = "",
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center px-6 py-3 bg-mint text-emeraldDark text-sm sm:text-base font-semibold rounded-lg shadow-md transition-transform hover:scale-105 active:scale-95 focus:outline-none";

  const content = (
    <>
      {isBeam && (
        <span className="absolute left-4 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      )}
      <span className={isBeam ? "pl-6" : ""}>{name}</span>
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
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseClasses} ${containerClass}`}
    >
      {content}
    </button>
  );
};

export default Button;
