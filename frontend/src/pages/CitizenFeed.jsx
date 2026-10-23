
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const initialReports = [
  {
    id: 'NF-2026-0914',
    title: 'Waste removal at blocked canal',
    description: 'Accumulated waste is blocking water flow.',
    category: 'Waste Management',
    location: 'Kalyanpur',
    ward: '11',
    status: 'In Progress',
    officer: 'Unassigned',
    date: '2026-10-18',
    note: 'Inspection is pending.',
    icon: '🗑️',
  },
  {
    id: 'NF-2026-0899',
    title: 'Broken streetlights',
    description: 'Several streetlights are not working at night.',
    category: 'Street Lighting',
    location: 'Ring Road',
    ward: '33',
    status: 'Verified',
    officer: 'Field Team',
    date: '2026-10-17',
    note: 'Issue verified for further action.',
    icon: '💡',
  },
  {
    id: 'NF-2026-0870',
    title: 'Road pothole needs repair',
    description: 'A damaged road surface is affecting commuters.',
    category: 'Roads & Transport',
    location: 'Banani',
    ward: '19',
    status: 'Resolved',
    officer: 'Road Maintenance Team',
    date: '2026-10-15',
    note: 'Demo resolution recorded.',
    icon: '🛣️',
  },
  {
    id: 'NF-2026-0842',
    title: 'Broken drain cover',
    description: 'A damaged drain cover is creating a safety concern.',
    category: 'Drainage',
    location: 'Kazipara',
    ward: '14',
    status: 'Submitted',
    officer: 'Unassigned',
    date: '2026-10-14',
    note: 'Waiting for initial review.',
    icon: '🚧',
  },
]

const statuses = [
  'Submitted',
  'Verified',
  'In Progress',
  'Resolved',
  'Rejected',
]

const categories = [
  'Roads & Transport',
  'Waste Management',
  'Street Lighting',
  'Drainage',
]

function CitizenFeed() {
  const [reports, setReports] = useState(initialReports)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [selectedId, setSelectedId] = useState(initialReports[0].id)
  const [newStatus, setNewStatus] = useState('In Progress')
  const [newNote, setNewNote] = useState('')
  const [notice, setNotice] = useState('')

  const filteredReports = useMemo(() => {
    const query = search.trim().toLowerCase()

    return reports.filter((report) => {
      const matchesSearch = [
        report.id,
        report.title,
        report.description,
        report.location,
        report.ward,
      ].some((value) => value.toLowerCase().includes(query))

      const matchesStatus =
        statusFilter === 'All' || report.status === statusFilter

      const matchesCategory =
        categoryFilter === 'All' || report.category === categoryFilter

      return matchesSearch && matchesStatus && matchesCategory
    })
  }, [reports, search, statusFilter, categoryFilter])

  const selectedReport =
    reports.find((report) => report.id === selectedId) || null

  function selectReport(report) {
    setSelectedId(report.id)
    setNewStatus(report.status)
    setNewNote(report.note)
    setNotice('')
  }

  function saveUpdate(event) {
    event.preventDefault()

    if (!selectedReport) return

    setReports((currentReports) =>
      currentReports.map((report) =>
        report.id === selectedId
          ? { ...report, status: newStatus, note: newNote }
          : report
      )
    )

    setNotice(
      'Demo update saved in this page. It is not sent to a real database or citizen.'
    )
  }

  function resetFilters() {
    setSearch('')
    setStatusFilter('All')
    setCategoryFilter('All')
    setNotice('')
  }

  const countByStatus = (status) =>
    reports.filter((report) => report.status === status).length

  const resolvedRate = reports.length
    ? Math.round((countByStatus('Resolved') / reports.length) * 100)
    : 0

  return (
    <div className="citizen-feed-page">
      <section className="cf-page-heading">
        <div>
          <span className="cf-eyebrow">NAGORIKFIX / COMMUNITY</span>
          <h1>Citizen Feed</h1>
          <p>
            Explore reported community problems, check their status and
            review the progress of local issues.
          </p>
        </div>

        <Link to="/report" className="cf-primary-button">
          + Report a Problem
        </Link>
      </section>

      <div className="cf-demo-notice">
        <span>ⓘ</span>
        <p>
          <strong>Project demo:</strong> All reports and statistics on this
          page are sample data. No official government system is connected.
        </p>
      </div>

      <section className="cf-metrics">
        <article className="cf-metric-card">
          <span className="cf-metric-icon">▤</span>
          <p>Total Reports</p>
          <strong>{reports.length}</strong>
          <span>Reports in this demo</span>
        </article>

        <article className="cf-metric-card">
          <span className="cf-metric-icon cf-orange">◷</span>
          <p>Pending Review</p>
          <strong>{countByStatus('Submitted')}</strong>
          <span>Awaiting initial review</span>
        </article>

        <article className="cf-metric-card">
          <span className="cf-metric-icon cf-blue">⚙</span>
          <p>In Progress</p>
          <strong>{countByStatus('In Progress')}</strong>
          <span>Being worked on in the demo</span>
        </article>

        <article className="cf-metric-card">
          <span className="cf-metric-icon cf-green">✓</span>
          <p>Resolved</p>
          <strong>{countByStatus('Resolved')}</strong>
          <span>{resolvedRate}% of demo reports</span>
        </article>
      </section>

      <section className="cf-analytics">
        <div className="cf-panel">
          <div className="cf-panel-heading">
            <div>
              <h2>Resolution Overview</h2>
              <p>Current status of sample community reports</p>
            </div>
            <span className="cf-demo-label">DEMO DATA</span>
          </div>

          <div className="cf-progress-list">
            {statuses.map((status) => {
              const count = countByStatus(status)
              const percentage = reports.length
                ? (count / reports.length) * 100
                : 0

              return (
                <div className="cf-progress-item" key={status}>
                  <div className="cf-progress-label">
                    <span>{status}</span>
                    <strong>{count}</strong>
                  </div>
                  <div className="cf-progress-track">
                    <div
                      className={`cf-progress-fill cf-fill-${status
                        .toLowerCase()
                        .replaceAll(' ', '-')}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="cf-panel cf-category-panel">
          <div className="cf-panel-heading">
            <div>
              <h2>Issue Categories</h2>
              <p>Browse reports by problem type</p>
            </div>
          </div>

          {categories.map((category) => {
            const count = reports.filter(
              (report) => report.category === category
            ).length

            return (
              <button
                className={`cf-category-row ${
                  categoryFilter === category ? 'cf-category-active' : ''
                }`}
                key={category}
                onClick={() =>
                  setCategoryFilter(
                    categoryFilter === category ? 'All' : category
                  )
                }
                type="button"
              >
                <span>{category}</span>
                <strong>{count}</strong>
                <span>→</span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="cf-report-section">
        <div className="cf-section-heading">
          <div>
            <h2>Citizen Grievance Ledger</h2>
            <p>Search, filter and select a report to see its details.</p>
          </div>
          <span className="cf-result-count">
            {filteredReports.length} of {reports.length} reports
          </span>
        </div>

        <div className="cf-filters">
          <label className="cf-search-box">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search ID, issue, location or ward..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <select
            aria-label="Filter by status"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="All">All statuses</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <select
            aria-label="Filter by category"
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
          >
            <option value="All">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <button
            className="cf-reset-button"
            onClick={resetFilters}
            type="button"
          >
            Reset
          </button>
        </div>

        <div className="cf-table-wrap">
          <table className="cf-table">
            <thead>
              <tr>
                <th>Tracking ID</th>
                <th>Issue Description</th>
                <th>Location</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredReports.map((report) => (
                <tr
                  className={
                    selectedId === report.id ? 'cf-selected-row' : ''
                  }
                  key={report.id}
                >
                  <td>
                    <strong className="cf-tracking-id">#{report.id}</strong>
                    <span className="cf-table-date">{report.date}</span>
                  </td>

                  <td>
                    <div className="cf-issue-cell">
                      <span className="cf-issue-icon">{report.icon}</span>
                      <div>
                        <strong>{report.title}</strong>
                        <p>{report.description}</p>
                        <span className="cf-table-category">
                          {report.category}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <strong>{report.location}</strong>
                    <span className="cf-table-date">Ward {report.ward}</span>
                  </td>

                  <td>
                    <span
                      className={`cf-status cf-status-${report.status
                        .toLowerCase()
                        .replaceAll(' ', '-')}`}
                    >
                      {report.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="cf-view-button"
                      onClick={() => selectReport(report)}
                      type="button"
                    >
                      View details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredReports.length === 0 && (
            <div className="cf-empty-state">
              <span>⌕</span>
              <h3>No reports found</h3>
              <p>Try another keyword or reset the filters.</p>
              <button onClick={resetFilters} type="button">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="cf-management">
        <div className="cf-management-intro">
          <span className="cf-eyebrow">REPORT WORKSPACE</span>
          <h2>Report Details &amp; Status Management</h2>
          <p>
            Select a report from the table to review its information and
            update its demo status.
          </p>
        </div>

        {!selectedReport ? (
          <div className="cf-empty-state">
            <h3>Select a report first</h3>
            <p>Choose View details in the report table above.</p>
          </div>
        ) : (
          <div className="cf-management-grid">
            <div className="cf-panel cf-selected-details">
              <span className="cf-detail-label">SELECTED TRACKING ID</span>
              <strong className="cf-detail-id">#{selectedReport.id}</strong>
              <h3>{selectedReport.title}</h3>
              <p>{selectedReport.description}</p>

              <div className="cf-detail-line">
                <span>Category</span>
                <strong>{selectedReport.category}</strong>
              </div>
              <div className="cf-detail-line">
                <span>Location</span>
                <strong>
                  {selectedReport.location}, Ward {selectedReport.ward}
                </strong>
              </div>
              <div className="cf-detail-line">
                <span>Assigned team</span>
                <strong>{selectedReport.officer}</strong>
              </div>
              <div className="cf-detail-line">
                <span>Current status</span>
                <strong>{selectedReport.status}</strong>
              </div>
            </div>

            <form className="cf-panel cf-update-form" onSubmit={saveUpdate}>
              <h3>Update Demo Record</h3>

              <label htmlFor="cf-status">Report status</label>
              <select
                id="cf-status"
                value={newStatus}
                onChange={(event) => setNewStatus(event.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>

              <label htmlFor="cf-note">Action notes</label>
              <textarea
                id="cf-note"
                rows="4"
                placeholder="Write an inspection note or progress update..."
                value={newNote}
                onChange={(event) => setNewNote(event.target.value)}
              />

              <button className="cf-primary-button" type="submit">
                ✓ Save Demo Update
              </button>

              {notice && (
                <p className="cf-save-notice" role="status">
                  {notice}
                </p>
              )}

              <p className="cf-form-hint">
                Changes stay in this page's memory and reset when it reloads.
                No real SMS, email or database update is performed.
              </p>
            </form>
          </div>
        )}
      </section>

      <section className="cf-bottom-cta">
        <div>
          <h2>See a problem in your community?</h2>
          <p>Submit a report to demonstrate the NagorikFix reporting flow.</p>
        </div>
        <Link to="/report" className="cf-primary-button">
          Report an Issue →
        </Link>
      </section>
    </div>
  )
}

export default CitizenFeed
