import Button from "./Button";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">

      <div className="cta-container">

        <h2 className="cta-heading">
          Pellentesque suscipit fringilla libero eu.
        </h2>


        <Button className="cta-button">
          Get a Demo
          <span aria-hidden="true">→</span>
        </Button>


      </div>

    </section>
  );
}