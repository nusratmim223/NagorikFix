
import './App.css'

const reports = [
  {
    icon: '🕳️',
    title: 'Road Pothole',
    location: 'Dhanmondi, Dhaka',
    description: 'Large pothole on the main road causing traffic problems.',
    status: 'In Progress',
    className: 'progress',
    time: '2 hours ago',
  },
  {
    icon: '🗑️',
    title: 'Garbage Overflow',
    location: 'Mirpur, Dhaka',
    description: 'Garbage not collected for several days. Creating health issues.',
    status: 'Reported',
    className: 'reported',
    time: '5 hours ago',
  },
  {
    icon: '💡',
    title: 'Broken Street Light',
    location: 'Uttara, Dhaka',
    description: 'Street light not working. The area is very dark.',
    status: 'Open',
    className: 'open',
    time: '8 hours ago',
  },
]

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">
          <span className="logo-icon">❧</span> FixMyCity
        </a>

        <nav className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#how-it-works">Report a Problem</a>
          <a href="#reports">Track Reports</a>
          <a href="#about">About</a>
        </nav>

        <a className="login-button" href="#login">♟ Login</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="welcome">BANGLADESH'S CITIZEN REPORTING PLATFORM</p>
            <h1>Your City,<br />Our Responsibility.</h1>
            <p className="description">
              Report local problems. Track progress. Build a better community.
            </p>

            <div className="hero-actions">
              <a className="report-button" href="#how-it-works">
                ✎ &nbsp; Report a Problem &nbsp; →
              </a>
              <a className="track-button" href="#reports">
                ⌕ &nbsp; Track a Report
              </a>
            </div>
          </div>
        </section>

        <section className="content-section" id="how-it-works">
          <div className="section-heading">
            <h2>How FixMyCity Works</h2>
            <p>It's simple. Just 3 steps to make your city better.</p>
          </div>

          <div className="features">
            <article className="feature">
              <div className="feature-icon">✎</div>
              <div>
                <span className="step-number">01</span>
                <h3>Report an Issue</h3>
                <p>Share details and location of problems in your area.</p>
              </div>
            </article>

            <article className="feature">
              <div className="feature-icon">📍</div>
              <div>
                <span className="step-number">02</span>
                <h3>Track Progress</h3>
                <p>Get real-time updates on your report status.</p>
              </div>
            </article>

            <article className="feature">
              <div className="feature-icon">♟</div>
              <div>
                <span className="step-number">03</span>
                <h3>Make an Impact</h3>
                <p>Help your community and build a better Bangladesh.</p>
              </div>
            </article>
          </div>

          <section className="reports-section" id="reports">
            <div className="reports-heading">
              <h2>◷ &nbsp; Recent Community Reports</h2>
              <a href="#reports">View All Reports →</a>
            </div>

            <div className="reports-grid">
              {reports.map((report) => (
                <article className="report-card" key={report.title}>
                  <div className="report-image">{report.icon}</div>
                  <div className="report-details">
                    <h3>{report.title}</h3>
                    <p className="report-location">📍 {report.location}</p>
                    <p className="report-description">{report.description}</p>
                    <div className="report-meta">
                      <span className={`status ${report.className}`}>
                        {report.status}
                      </span>
                      <span className="report-time">{report.time}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </main>

      <footer id="about">
        FixMyCity © 2026 | Building Better Communities
      </footer>
    </div>
  )
}

export default App
