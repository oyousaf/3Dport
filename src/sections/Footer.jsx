const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-teal-900 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/oyousaf" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://linkedin.com/in/oyousaf" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/linkedin.svg"
              alt="linkedIn"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>

      <p className="text-gray-200">© {new Date().getFullYear()} Omar Yousaf</p>
    </footer>
  );
};

export default Footer;
