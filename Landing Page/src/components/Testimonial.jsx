const clients = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  src: `/Clients/client${index + 1}.svg`,
  alt: `Client ${index + 1}`,
}));

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-10 md:py-16">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:px-16">
        <div className="flex justify-center">
          <img
            src="/feedback.svg"
            alt="Customer testimonial"
            className="w-full max-w-[326px] rounded-lg"
          />
        </div>

        <div>
          <p className="text-sm leading-7 text-neutral-700 md:text-base">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
            elit at ligula molestie, nec molestie mi blandit. Suspendisse
            cursus tellus sed augue ultrices, quis tristique nulla sodales.
            Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
            potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat
            eget. Quisque vulputate odio neque, eget efficitur libero
            condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
            amet magna.
          </p>

          <div className="mt-6">
            <p className="font-semibold text-brand">Tim Smith</p>
            <p className="text-sm text-neutral-600">
              British Dragon Boat Racing Association
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              {clients.map((client) => (
                <img
                  key={client.id}
                  src={client.src}
                  alt={client.alt}
                  className="h-7 w-auto opacity-80 grayscale"
                />
              ))}
            </div>
            <a
              href="#clients"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark"
            >
              Meet all customers
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
