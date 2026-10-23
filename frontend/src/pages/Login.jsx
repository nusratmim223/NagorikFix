
import { useState } from 'react'

export default function Login() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    setMessage(
      'Login interface is working. Authentication will be connected when we build the backend.'
    )
  }

  return (
    <section className="content-section login-page">
      <div className="section-heading">
        <h2>Welcome to NagorikFix</h2>
        <p>
          Sign in to access your citizen reporting account.
        </p>
      </div>

      <form className="report-form" onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email Address</label>
        <input
          id="login-email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit" className="report-button">
          Login →
        </button>

        {message && (
          <p role="status" aria-live="polite">
            {message}
          </p>
        )}
      </form>
    </section>
  )
}
