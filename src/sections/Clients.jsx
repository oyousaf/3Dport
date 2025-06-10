import { clientReviews } from "../constants/index.js";

const Clients = () => {
  return (
    <section id="clients" className="c-space my-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-mint text-center mb-12">
        What My Clients Say
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {clientReviews.map((item) => (
          <div
            key={`review-${item.id}`}
            className="bg-emeraldDark/70 border border-gray200/10 rounded-xl p-6 flex flex-col justify-between shadow-lg backdrop-blur transition-transform hover:-translate-y-1 duration-300"
          >
            <p className="text-gray200 text-sm leading-relaxed mb-6">
              “{item.review}”
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-gray200 text-sm">{item.position}</p>
                </div>
              </div>

              <div className="flex gap-1">
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
