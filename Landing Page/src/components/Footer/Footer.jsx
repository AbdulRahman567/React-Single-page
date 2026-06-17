import "./Footer.css";

const companyLinks = [
  "About us",
  "Blog",
  "Contact us",
  "Pricing",
  "Testimonials",
];

const supportLinks = [
  "Help center",
  "Terms of service",
  "Legal",
  "Privacy policy",
  "Status",
];

const socialLinks = [
  { icon: "/SocialMedia/instagram.svg", label: "Instagram" },
  { icon: "/SocialMedia/dribble.svg", label: "Dribbble" },
  { icon: "/SocialMedia/twitter.svg", label: "Twitter" },
  { icon: "/SocialMedia/youtube.svg", label: "YouTube" },
];


export default function Footer() {

  return (

    <footer className="footer">


      <div className="footer-container">


        {/* Company Info */}

        <div className="footer-company">

          <div className="footer-logo">

            <img src="/logo.svg" alt="" />

            <span>Nexcent</span>

          </div>


          <p className="footer-text">
            Copyright © 2020 Nexcent ltd.
          </p>

          <p className="footer-text">
            All rights reserved
          </p>



          <div className="social-icons">

            {socialLinks.map((social)=>(
              <a
                key={social.label}
                href="#social"
                aria-label={social.label}
              >

                <img src={social.icon} alt="" />

              </a>
            ))}

          </div>


        </div>




        {/* Company Links */}

        <div>

          <h3 className="footer-title">
            Company
          </h3>


          <ul className="footer-links">

            {companyLinks.map((link)=>(
              <li key={link}>

                <a href="#">
                  {link}
                </a>

              </li>
            ))}

          </ul>

        </div>





        {/* Support */}

        <div>

          <h3 className="footer-title">
            Support
          </h3>


          <ul className="footer-links">

            {supportLinks.map((link)=>(
              <li key={link}>

                <a href="#">
                  {link}
                </a>

              </li>
            ))}

          </ul>

        </div>





        {/* Email */}

        <div>

          <h3 className="footer-title">
            Stay up to date
          </h3>


          <form
            className="subscribe-form"
            onSubmit={(e)=>e.preventDefault()}
          >

            <input
              type="email"
              placeholder="Your email address"
            />


            <button type="submit">

              <img src="/send.svg" alt="" />

            </button>


          </form>


        </div>



      </div>


    </footer>

  );
}