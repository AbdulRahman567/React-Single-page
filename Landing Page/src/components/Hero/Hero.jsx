import Button from "./Button";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">


      <div className="hero-container">


        {/* Text Area */}

        <div className="hero-content">

          <h1 className="hero-title">

            Lessons and insights{" "}

            <span>
              from 8 years
            </span>

          </h1>


          <p className="hero-description">

            Where to grow your business as a photographer: site or social
            media?

          </p>


          <Button className="hero-button">
            Register
          </Button>


        </div>





        {/* Image Area */}

        <div className="hero-image">

          <img
            src="/HeroImg.svg"
            alt="Analytics dashboard illustration"
          />

        </div>


      </div>





      {/* Slider Dots */}

      <div className="hero-dots">

        {[0,1,2].map((dot)=>(

          <span
            key={dot}
            className={
              dot === 0
              ? "dot active"
              : "dot"
            }
          />

        ))}

      </div>



    </section>
  );
}