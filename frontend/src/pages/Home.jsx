
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const reports = [
  {
    icon: '🕳️',
    title: 'Road Pothole',
    location: 'Dhanmondi, Dhaka',
    description:
      'Large pothole on the main road causing traffic problems.',
    status: 'In Progress',
    className: 'progress',
    time: '2 hours ago',
  },
  {
    icon: '🗑️',
    title: 'Garbage Overflow',
    location: 'Mirpur, Dhaka',
    description:
      'Garbage not collected for several days. Creating health issues.',
    status: 'Reported',
    className: 'reported',
    time: '5 hours ago',
  },
  {
    icon: '💡',
    title: 'Broken Street Light',
    location: 'Uttara, Dhaka',
    description:
      'Street light not working. The area is very dark.',
    status: 'Open',
    className: 'open',
    time: '8 hours ago',
  },
]

const categories = [
  {
    icon: '🛠️',
    title: 'Damaged Roads & Footpaths',
    subtitle: 'Potholes, Manhole Covers & Excavations',
    description:
      'Report damaged roads, deep potholes, broken footpaths and unsafe open manholes.',
  },
  {
    icon: '🗑️',
    title: 'Waste Management & Sanitation',
    subtitle: 'Garbage Piles & Dustbin Overflows',
    description:
      'Report uncollected rubbish, overflowing bins and unhygienic public spaces.',
  },
  {
    icon: '💡',
    title: 'Streetlights & Electrical',
    subtitle: 'Outages, Wires & Damaged Poles',
    description:
      'Report broken streetlights, damaged electric poles and hazardous wires.',
  },
  {
    icon: '💧',
    title: 'Drainage & Waterlogging',
    subtitle: 'Blocked Drains & Water Leakage',
    description:
      'Report clogged drains, standing rainwater and visible water pipe leaks.',
  },
  {
    icon: '🚸',
    title: 'Public Safety & Crossings',
    subtitle: 'Signs, Crossings & Road Hazards',
    description:
      'Report damaged road signs, faded crossings and public-area safety hazards.',
  },
  {
    icon: '🌳',
    title: 'Parks & Greenery',
    subtitle: 'Playgrounds, Trees & Public Spaces',
    description:
      'Report damaged park facilities, fallen branches and neglected green spaces.',
  },
]

export default function Home() {
  const categorySlider = useRef(null)

  const slideCategories = (direction) => {
    if (!categorySlider.current) return

    categorySlider.current.scrollBy({
      left: direction * 340,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">
            BANGLADESH'S CITIZEN REPORTING PLATFORM
          </p>

          <h1>
            Your City,
            <br />
            Our Responsibility.
          </h1>

          <p className="description">
            Report local problems. Track progress. Build a
            better community.
          </p>

          <div className="hero-actions">
            <Link className="report-button" to="/report">
              Report a Problem →
            </Link>

            <Link className="track-button" to="/track">
              Track a Report
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY SLIDER — immediately after hero */}
      <section className="home-categories" id="categories">
        <div className="home-categories-heading">
          <div>
            <span className="home-categories-eyebrow">
              CITIZEN ASSISTANCE SECTORS
            </span>

            <h2>Public Service Issue Categories</h2>
          </div>

          <div className="home-category-slider-controls">
            <p>
              Choose a category to start reporting a problem
              in your community.
            </p>

            <div className="home-category-arrows">
              <button
                type="button"
                onClick={() => slideCategories(-1)}
                aria-label="Scroll categories left"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => slideCategories(1)}
                aria-label="Scroll categories right"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div
          className="home-categories-grid"
          ref={categorySlider}
        >
          {categories.map((category, index) => (
            <Link
              to="/report"
              className="home-category-card"
              key={category.title}
              aria-label={`Report an issue: ${category.title}`}
            >
              <div
                className={`home-category-icon ${
                  index % 3 === 1
                    ? 'icon-secondary'
                    : 'icon-primary'
                }`}
                aria-hidden="true"
              >
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <span className="home-category-subtitle">
                {category.subtitle}
              </span>

              <p>{category.description}</p>

              <div className="home-category-action">
                <span>Submit Report</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>

        <p className="home-category-scroll-hint">
          ← Scroll to explore all categories →
        </p>
      </section>

      {/* HOW NAGORIKFIX WORKS + RECENT REPORTS */}
      <section className="content-section">
        <div className="section-heading">
          <h2>How NagorikFix Works</h2>
          <p>
            Three simple steps to make your community better.
          </p>
        </div>

        <div className="features">
          <article className="feature">
            <div className="feature-icon" aria-hidden="true">
              ✎
            </div>

            <div>
              <span className="step-number">01</span>
              <h3>Report an Issue</h3>
              <p>
                Share details and the location of a problem
                in your area.
              </p>
            </div>
          </article>

          <article className="feature">
            <div className="feature-icon" aria-hidden="true">
              📍
            </div>

            <div>
              <span className="step-number">02</span>
              <h3>Track Progress</h3>
              <p>
                Follow the status of your community report.
              </p>
            </div>
          </article>

          <article className="feature">
            <div className="feature-icon" aria-hidden="true">
              ✓
            </div>

            <div>
              <span className="step-number">03</span>
              <h3>Make an Impact</h3>
              <p>
                Help your community build a cleaner, safer
                Bangladesh.
              </p>
            </div>
          </article>
        </div>

        <section className="reports-section" id="reports">
          <div className="reports-heading">
            <h2>Recent Community Reports</h2>
            <Link to="/track">View All Reports →</Link>
          </div>

          <div className="reports-grid">
            {reports.map((report) => (
              <article
                className="report-card"
                key={report.title}
              >
                <div className="report-image" aria-hidden="true">
                  {report.icon}
                </div>

                <div className="report-details">
                  <h3>{report.title}</h3>

                  <p className="report-location">
                    📍 {report.location}
                  </p>

                  <p className="report-description">
                    {report.description}
                  </p>

                  <div className="report-meta">
                    <span
                      className={`status ${report.className}`}
                    >
                      {report.status}
                    </span>

                    <span className="report-time">
                      {report.time}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
