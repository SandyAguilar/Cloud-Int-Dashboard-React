import { Routes, Route, NavLink } from 'react-router-dom'
import Overview from './pages/Overview.jsx'
import GCP from './pages/GCP.jsx'
import AWS from './pages/AWS.jsx'
import Azure from './pages/Azure.jsx'
import Sidebar from './components/Sidebar.jsx'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <header className="topbar">
          <h1>Smart AI Cloud Auditor</h1>
          <nav className="tabs">
            <NavLink to="/" end>Overview</NavLink>
            <NavLink to="/gcp">GCP</NavLink>
            <NavLink to="/aws">AWS</NavLink>
            <NavLink to="/azure">Azure</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/gcp" element={<GCP />} />
          <Route path="/aws" element={<AWS />} />
          <Route path="/azure" element={<Azure />} />
        </Routes>
      </main>
    </div>
  )
}
