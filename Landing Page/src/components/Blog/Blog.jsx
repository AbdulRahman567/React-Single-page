import "./Blog.css";

const posts = [
  {
    image: "/Readmore/how.svg",
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: "/Readmore/manage.svg",
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: "/Readmore/revamp.svg",
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

export default function Blog() {
  return (
    <section id="faq" className="blog-section">
      <div className="blog-container">
        <h2 className="blog-heading">Caring is the new marketing</h2>

        <p className="blog-description">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read
          about how our community are increasing their membership income and
          lot's more.
        </p>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.title} className="blog-card">
              <img
                src={post.image}
                alt={post.title}
                className="blog-image"
              />

              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>

                <a href="#blog" className="read-more">
                  Read More
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}