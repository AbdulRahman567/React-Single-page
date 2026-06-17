import Button from "./Button";
import "./FeatureFooterDesign.css";

export default function FeatureFooterDesign() {
  return (
    <section className="feature-section">

      <div className="feature-container">

        <div className="feature-image">
          <img
            src="/useImg.svg"
            alt="Mobile login screen illustration"
          />
        </div>


        <div className="feature-content">

          <h2 className="feature-heading">
            How to design your site footer like we did
          </h2>


          <p className="feature-text">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at
            scelerisque elit erat a magna. Donec quis erat at libero ultrices
            mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui,
            at porta nisi facilisis finibus. In euismod augue vitae nisi
            ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
            commodo faucibus efficitur quis massa. Praesent felis est, finibus
            et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
            ipsum id gravida.
          </p>


          <Button className="feature-button">
            Learn More
          </Button>


        </div>

      </div>

    </section>
  );
}