import { clientReviews } from "../constants/index.js";
import { useRevealChildrenOnScroll } from "../hooks/useRevealChildrenOnScroll";

const Clients = () => {
  const containerRef = useRevealChildrenOnScroll();

  return (
    <section
      id="clients"
      className="c-space my-24 mt-32 scroll-mt-24"
      aria-labelledby="clients-heading"
    >
      <h2
        id="clients-heading"
        className="text-3xl sm:text-4xl font-bold text-mint text-center mb-12"
      >
        What My Clients Say
      </h2>

      <div
        ref={containerRef}
        className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {clientReviews.map((item, index) => (
          <div
            key={`review-${item.id}`}
            className="card-tilt flex flex-col justify-between p-6 rounded-2xl bg-emerald-900 border border-gray200/20 shadow-md"
          >
            <p className="text-gray200 text-sm leading-relaxed mb-6 italic">
              “{item.review}”
            </p>

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width="48"
                  height="48"
                  className={`w-12 h-12 rounded-full object-cover ring-2 ${
                    ["ring-mint", "ring-coral", "ring-sky"][index % 3]
                  }`}
                />
                <div>
                  <p className="text-mint font-semibold leading-tight">
                    {item.name}
                  </p>
                  <p className="text-gray200 text-xs">{item.position}</p>
                </div>
              </div>

              <div
                className="flex gap-1 items-center pt-1"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {[...Array(5)].map((_, idx) => (
                  <img
                    key={idx}
                    src="/assets/star.png"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    width="16"
                    height="16"
                    className="w-4 h-4"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
