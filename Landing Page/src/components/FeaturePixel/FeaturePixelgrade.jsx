import Button from "./Button";
import "./FeaturePixelgrade.css";

export default function FeaturePixelgrade() {
  return (
    <section id="feature" className="pixel-section">

      <div className="pixel-container">

        <div className="pixel-image">
          <img
            src="/pixelgrade.svg"
            alt="Team collaboration illustration"
          />
        </div>


        <div className="pixel-content">

          <h2 className="pixel-heading">
            The unseen of spending three years at Pixelgrade
          </h2>


          <p className="pixel-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>


          <Button className="pixel-button">
            Learn More
          </Button>


        </div>

      </div>

    </section>
  );
}