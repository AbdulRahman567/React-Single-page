import "./Community.css";

const cards = [
  {
    icon: "/Features/icon1.svg",
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    icon: "/Features/icon2.svg",
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    icon: "/Features/icon3.svg",
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
];

export default function Community() {
  return (
    <section id="service" className="community-section">
      <div className="community-container">

        <h2 className="community-heading">
          Manage your entire community in a single system
        </h2>

        <p className="community-subtitle">
          Who is Nexcent suitable for?
        </p>


        <div className="community-grid">

          {cards.map((card) => (
            <article
              key={card.title}
              className="community-card"
            >

              <div className="icon-box">
                <img
                  src={card.icon}
                  alt=""
                  className="card-icon"
                />
              </div>


              <h3 className="card-title">
                {card.title}
              </h3>


              <p className="card-description">
                {card.description}
              </p>


            </article>
          ))}

        </div>

      </div>
    </section>
  );
}