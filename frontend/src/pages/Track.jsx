
import { useState } from 'react'

export default function Track() {
  const [reportId, setReportId] = useState('')
  const [searched, setSearched] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSearched(true)
  }

  return (
    <section className="content-section track-page">
      <div className="section-heading">
        <h2>Track Your Report</h2>
        <p>
          Enter your Report ID to check the status of your
          community report.
        </p>
      </div>

      <form className="report-form" onSubmit={handleSubmit}>
        <label htmlFor="report-id">Report ID</label>
        <input
          id="report-id"
          type="text"
          value={reportId}
          onChange={(event) => {
            setReportId(event.target.value)
            setSearched(false)
          }}
          placeholder="e.g. NF-123456"
          required
        />

        <button type="submit" className="report-button">
          Track Report →
        </button>
      </form>

      {searched && (
        <div className="report-success" role="status">
          <h3>Report Lookup</h3>
          <p>
            You searched for: <strong>{reportId}</strong>
          </p>
          <p>
            Live report status tracking will be connected
            after we build the backend and database.
          </p>
          <p>
            This demo cannot verify whether the Report ID
            exists.
          </p>
        </div>
      )}
    </section>
  )
}
