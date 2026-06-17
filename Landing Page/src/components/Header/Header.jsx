import { useState } from "react";
import Button from "./Button";
import "./Header.css";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Service", href: "#service" },
  { label: "Feature", href: "#feature" },
  { label: "Product", href: "#product" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "FAQ", href: "#faq" },
];


export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (

    <header className="header">


      <div className="header-container">


        {/* Logo */}

        <a href="#home" className="logo">

          <img src="/logo.svg" alt="" />

          <span>Nexcent</span>

        </a>





        {/* Desktop Menu */}

        <nav className="desktop-nav">

          {navLinks.map((link)=>(

            <a
              key={link.label}
              href={link.href}
            >

              {link.label}

            </a>

          ))}

        </nav>





        {/* Buttons */}

        <div className="header-buttons">

          <Button variant="ghost">
            Login
          </Button>


          <Button>
            Sign up
          </Button>

        </div>





        {/* Mobile Menu Button */}

        <button

          className="menu-btn"

          aria-label="Toggle menu"

          onClick={()=>setMenuOpen(!menuOpen)}

        >

          <span></span>
          <span></span>
          <span></span>

        </button>


      </div>






      {/* Mobile Menu */}

      {menuOpen && (

        <div className="mobile-menu">


          <nav>

            {navLinks.map((link)=>(

              <a

                key={link.label}

                href={link.href}

                onClick={()=>setMenuOpen(false)}

              >

                {link.label}

              </a>

            ))}


          </nav>



          <div className="mobile-buttons">


            <Button variant="ghost">
              Login
            </Button>


            <Button>
              Sign up
            </Button>


          </div>



        </div>

      )}



    </header>

  );
}