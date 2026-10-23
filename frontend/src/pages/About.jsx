
export default function About() {
  return (
    <section className="content-section about-page">
      <div className="section-heading">
        <p className="welcome">ABOUT NAGORIKFIX</p>

        <h2>Building Better Communities Together</h2>

        <p>
          NagorikFix is a citizen reporting platform designed
          to help people report local problems and follow
          their progress toward a solution.
        </p>
      </div>

      <div className="features">
        <article className="feature">
          <div className="feature-icon" aria-hidden="true">
            🎯
          </div>

          <div>
            <h3>Our Mission</h3>
            <p>
              Make it easier for citizens to report community
              problems such as damaged roads, overflowing
              garbage, and broken street lights.
            </p>
          </div>
        </article>

        <article className="feature">
          <div className="feature-icon" aria-hidden="true">
            🤝
          </div>

          <div>
            <h3>Our Vision</h3>
            <p>
              Encourage stronger communication between
              citizens and the relevant public services
              through accessible digital tools.
            </p>
          </div>
        </article>

        <article className="feature">
          <div className="feature-icon" aria-hidden="true">
            🔎
          </div>

          <div>
            <h3>Our Commitment</h3>
            <p>
              Help citizens submit clear reports and make
              report progress easier to follow.
            </p>
          </div>
        </article>
      </div>

      <div className="section-heading">
        <h2>How We Help</h2>

        <p>
          Citizens can describe a local issue, provide its
          location, and use a report reference to look for
          updates when report tracking is connected.
        </p>
      </div>
    </section>
  )
}
	
