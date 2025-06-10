import { clientReviews } from "../constants/index.js";
import { useRevealChildrenOnScroll } from "../hooks/useRevealChildrenOnScroll";

const Clients = () => {
  const containerRef = useRevealChildrenOnScroll();

  return (
    <section id="clients" className="c-space my-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-mint text-center mb-12">
        What My Clients Say
      </h2>

      <div
        ref={containerRef}
        className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {clientReviews.map((item) => (
          <div
            key={`review-${item.id}`}
            className="flex flex-col justify-between p-6 rounded-xl bg-emerald-900 border border-gray200/20 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray200 text-sm leading-relaxed mb-6 italic">
              “{item.review}”
            </p>

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold leading-tight">
                    {item.name}
                  </p>
                  <p className="text-gray200 text-xs">{item.position}</p>
                </div>
              </div>

              <div className="flex gap-1 items-center pt-1">
                {[...Array(5)].map((_, idx) => (
                  <img
                    key={idx}
                    src="/assets/star.png"
                    alt="star"
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
