import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
import Button from "../components/Button.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const Contact = () => {
  const sectionRef = useRevealOnScroll();
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Omar",
          from_email: form.email,
          to_email: "o_yousaf@live.co.uk",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });
          setTimeout(() => {
            hideAlert(false);
            setForm({ name: "", email: "", message: "" });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({
            show: true,
            text: "Oops, something went wrong 😢. Please try again.",
            type: "danger",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="c-space my-24 mt-32 scroll-mt-32"
    >
      {alert.show && <Alert {...alert} />}

      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-xl bg-black/40 backdrop-blur-lg border border-gray200/10 p-10 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-mint mb-3">
            Let's converse
          </h3>
          <p className="text-gray200 text-base leading-relaxed mb-10">
            Whether you're building a new site or just want to say hello — feel
            free to reach out.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 text-left"
          >
            <label className="block space-y-1">
              <span className="text-white font-medium">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="w-full p-3 rounded-lg bg-black/30 border border-gray200/20 text-white placeholder-gray200 focus:outline-none focus:ring-2 focus:ring-mint transition"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="block space-y-1">
              <span className="text-white font-medium">Email Address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full p-3 rounded-lg bg-black/30 border border-gray200/20 text-white placeholder-gray200 focus:outline-none focus:ring-2 focus:ring-mint transition"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="block space-y-1">
              <span className="text-white font-medium">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                autoComplete="off"
                required
                className="w-full p-3 rounded-lg bg-black/30 border border-gray200/20 text-white placeholder-gray200 focus:outline-none focus:ring-2 focus:ring-mint transition resize-none"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <Button
              as="button"
              type="submit"
              disabled={loading}
              ariaLabel="Submit contact form"
              name={loading ? "Sending..." : "Send Message"}
              containerClass="w-full flex items-center justify-center gap-2 bg-mint text-black font-semibold py-3 px-6 rounded-lg hover:brightness-110 transition-all disabled:opacity-60"
            >
              {!loading && (
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="w-4 h-4 mt-0.5"
                />
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
