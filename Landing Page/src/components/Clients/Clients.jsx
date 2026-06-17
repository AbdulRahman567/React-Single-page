import "./Clients.css";

const clients = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  src: `/Clients/client${index + 1}.svg`,
  alt: `Client ${index + 1}`,
}));

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="clients-heading">Our Clients</h2>

        <p className="clients-description">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="clients-logos">
          {clients.map((client) => (
            <img
              key={client.id}
              src={client.src}
              alt={client.alt}
              className="client-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}