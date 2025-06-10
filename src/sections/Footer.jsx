import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="c-space pt-10 pb-5 border-t border-gray200/10 mt-24 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <AiFillGithub
          size={28}
          className="text-gray200 hover:text-mint cursor-pointer transition"
          onClick={() => handleIconClick("https://github.com/oyousaf")}
          aria-label="GitHub"
        />
        <AiFillLinkedin
          size={28}
          className="text-gray200 hover:text-mint cursor-pointer transition"
          onClick={() => handleIconClick("https://linkedin.com/in/oyousaf")}
          aria-label="LinkedIn"
        />
      </div>
      <p className="text-sm text-gray200 tracking-wide">
        © {new Date().getFullYear()} Omar 🍉
      </p>
    </footer>
  );
};

export default Footer;
