
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './pages/Home'
import Report from './pages/Report'
import CitizenFeed from './pages/CitizenFeed'
import Track from './pages/Track'
import About from './pages/About'
import Login from './pages/Login'
import './App.css'

function Navbar() {
  return (
    <header className="navbar">
      <Link className="logo" to="/" aria-label="NagorikFix Home">
        <img
          className="logo-image"
          src="/images/nagorikfix-logo.svg"
          alt=""
        />
        <span className="logo-text">NagorikFix</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/report">
          Report a Problem
        </NavLink>
        <Link to="/citizen-feed">Citizen Feed</Link>
        <NavLink to="/track">
          Track Reports
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
      </nav>

      <Link className="login-button" to="/login">
        Login →
      </Link>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <p>
        <strong>NagorikFix</strong> © 2026 | Building Better
        Communities
      </p>
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/citizen-feed" element={<CitizenFeed />} />
            <Route path="/report" element={<Report />} />
            <Route path="/track" element={<Track />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
