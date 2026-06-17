import "./Stats.css";

const stats = [
  {
    icon: "/Stats/icon1.svg",
    value: "2,245,341",
    label: "Members",
  },
  {
    icon: "/Stats/icon2.svg",
    value: "46,328",
    label: "Clubs",
  },
  {
    icon: "/Stats/icon3.svg",
    value: "828,867",
    label: "Event Bookings",
  },
  {
    icon: "/Stats/icon4.svg",
    value: "1,926,436",
    label: "Payments",
  },
];


export default function Stats() {

  return (

    <section id="product" className="stats-section">


      <div className="stats-container">



        {/* Left Content */}

        <div className="stats-text">


          <h2 className="stats-heading">

            Helping a local{" "}

            <span>
              business reinvent itself
            </span>

          </h2>


          <p className="stats-description">

            We reached here with our hard work and dedication

          </p>


        </div>





        {/* Stats Cards */}

        <div className="stats-grid">


          {stats.map((stat)=>(


            <div 
              key={stat.label}
              className="stat-item"
            >


              <img
                src={stat.icon}
                alt=""
              />



              <div>


                <p className="stat-value">

                  {stat.value}

                </p>


                <p className="stat-label">

                  {stat.label}

                </p>


              </div>


            </div>


          ))}


        </div>



      </div>


    </section>

  );
}