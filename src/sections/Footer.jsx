import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="c-space pt-7 pb-3 border-t border-teal-900 flex items-center justify-between gap-5">
      <div className="flex justify-center flex-grow space-x-4">
        <AiFillGithub
          size={36}
          className="text-gray-200 hover:text-white transition-colors duration-200 cursor-pointer"
          onClick={() => handleIconClick("https://github.com/oyousaf")}
          aria-label="GitHub"
        />
        <AiFillLinkedin
          size={36}
          className="text-gray-200 hover:text-white transition-colors duration-200 cursor-pointer"
          onClick={() => handleIconClick("https://linkedin.com/in/oyousaf")}
          aria-label="LinkedIn"
        />
      </div>

      <p className="text-gray-200 text-center">
        © {new Date().getFullYear()} Omar ♔
      </p>
    </footer>
  );
};

export default Footer;
