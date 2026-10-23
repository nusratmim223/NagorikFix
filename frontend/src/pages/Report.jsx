
import { useState } from 'react'

const categories = [
  'Roads & Footpaths',
  'Waste & Sanitation',
  'Lighting & Electricity',
  'Drainage & Water',
  'Public Health & Safety',
  'Parks & Public Amenities',
]

export default function Report() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(null)
  const [submitted, setSubmitted] = useState(null)
  const [photoName, setPhotoName] = useState('')
  const [photoError, setPhotoError] = useState('')

  function handlePhotoChange(event) {
    const file = event.target.files?.[0]

    setPhotoError('')

    if (file && file.size > 5 * 1024 * 1024) {
      setPhotoError('Please choose a photo smaller than 5 MB.')
      event.target.value = ''
      setPhotoName('')
      return
    }

    setPhotoName(file ? file.name : '')
  }

  function handleReview(event) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    setFormData({
      category: data.get('category'),
      title: data.get('title').trim(),
      location: data.get('location').trim(),
      ward: data.get('ward').trim(),
      description: data.get('description').trim(),
      photoName: data.get('photo')?.name || '',
    })

    setStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleFinalSubmit() {
    setSubmitted({
      ...formData,
      id: `NF-${Date.now().toString().slice(-6)}`,
    })

    setStep(3)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleNewReport() {
    setStep(1)
    setFormData(null)
    setSubmitted(null)
    setPhotoName('')
    setPhotoError('')
  }

  return (
    <section className="content-section report-page">
      <div className="section-heading">
        <p className="report-eyebrow">NAGORIKFIX CITIZEN SERVICES</p>
        <h2>Report a Community Problem</h2>
        <p>
          Report local problems to help build a safer and better
          community.
        </p>
      </div>

      <div className="report-progress" aria-label="Report progress">
        {[
          ['1', 'Details'],
          ['2', 'Review'],
          ['3', 'Confirmation'],
        ].map(([number, label], index) => (
          <div
            key={number}
            className={`report-progress-step ${
              step >= index + 1 ? 'current' : ''
            }`}
          >
            <span>{number}</span>
            <small>{label}</small>
          </div>
        ))}
      </div>

      {step === 1 && (
        <form className="report-form" onSubmit={handleReview}>
          <div className="report-form-intro">
            <h3>1. Problem Details</h3>
            <p>Fields marked with * are required.</p>
          </div>

          <label htmlFor="problem-category">Issue Category *</label>
          <select
            id="problem-category"
            name="category"
            defaultValue=""
            required
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label htmlFor="problem-title">Problem Title *</label>
          <input
            id="problem-title"
            name="title"
            type="text"
            maxLength={80}
            placeholder="e.g. Broken street light"
            required
          />

          <label htmlFor="problem-location">Location / Address *</label>
          <input
            id="problem-location"
            name="location"
            type="text"
            placeholder="Enter area, road or address"
            required
          />

          <label htmlFor="problem-ward">Ward Number</label>
          <input
            id="problem-ward"
            name="ward"
            type="text"
            placeholder="Enter ward number, if known"
          />

          <label htmlFor="problem-description">
            Describe the Problem *
          </label>
          <textarea
            id="problem-description"
            name="description"
            rows={5}
            placeholder="Explain the problem in detail..."
            required
          />

          <label htmlFor="problem-photo">Photo Evidence (Optional)</label>
          <input
            id="problem-photo"
            name="photo"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handlePhotoChange}
          />

          <p className="report-upload-help">
            JPG, PNG or WebP · Maximum 5 MB
          </p>

          {photoName && (
            <p className="report-photo-name">
              Selected photo: {photoName}
            </p>
          )}

          {photoError && (
            <p className="report-error" role="alert">
              {photoError}
            </p>
          )}

          <button
            type="submit"
            className="report-button"
            disabled={Boolean(photoError)}
          >
            Review Report →
          </button>
        </form>
      )}

      {step === 2 && formData && (
        <div className="report-success report-review">
          <h3>2. Review Your Report</h3>
          <p>Please check your information before submitting.</p>

          <dl className="report-review-list">
            <div>
              <dt>Category</dt>
              <dd>{formData.category}</dd>
            </div>
            <div>
              <dt>Problem Title</dt>
              <dd>{formData.title}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{formData.location}</dd>
            </div>
            <div>
              <dt>Ward</dt>
              <dd>{formData.ward || 'Not provided'}</dd>
            </div>
            <div>
              <dt>Description</dt>
              <dd>{formData.description}</dd>
            </div>
            <div>
              <dt>Photo</dt>
              <dd>{formData.photoName || 'Not attached'}</dd>
            </div>
          </dl>

          <p className="report-notice">
            Demo only: this report will not be sent to a server
            or government authority.
          </p>

          <div className="report-review-actions">
            <button
              type="button"
              className="track-button report-back-button"
              onClick={() => setStep(1)}
            >
              ← Edit Details
            </button>

            <button
              type="button"
              className="report-button"
              onClick={handleFinalSubmit}
            >
              Confirm & Submit →
            </button>
          </div>
        </div>
      )}

      {step === 3 && submitted && (
        <div className="report-success" role="status">
          <h3>✓ Report Submitted Successfully!</h3>
          <p>Your temporary demo Report ID is:</p>
          <h2>{submitted.id}</h2>

          <p><strong>Problem:</strong> {submitted.title}</p>
          <p><strong>Category:</strong> {submitted.category}</p>
          <p><strong>Location:</strong> {submitted.location}</p>

          <p className="report-notice">
            This is a frontend demo. The report and photo have not
            been saved to a database or sent to any authority.
          </p>

          <button
            type="button"
            className="report-button"
            onClick={handleNewReport}
          >
            Submit Another Report →
          </button>
        </div>
      )}
    </section>
  )
}
