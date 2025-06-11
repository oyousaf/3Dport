import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="c-space mt-24 pt-10 pb-6 border-t border-gray200/10 text-center">
      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 mb-4">
        <button
          onClick={() => handleIconClick("https://github.com/oyousaf")}
          className="text-gray200 hover:text-mint transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label="GitHub"
        >
          <AiFillGithub size={32} />
        </button>
        <button
          onClick={() => handleIconClick("https://linkedin.com/in/oyousaf")}
          className="text-gray200 hover:text-mint transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <AiFillLinkedin size={32} />
        </button>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray200 tracking-wide">
        © {new Date().getFullYear()} Built with{" "}
        <span className="inline-block animate-spin-slow origin-center">💚</span>{" "}
        by Omar 🍉
      </p>
    </footer>
  );
};

export default Footer;
