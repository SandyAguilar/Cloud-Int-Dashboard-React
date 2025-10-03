import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Navigation</h2>
      <NavLink to="/" end>Overview</NavLink>
      <NavLink to="/gcp">GCP</NavLink>
      <NavLink to="/aws">AWS</NavLink>
      <NavLink to="/azure">Azure</NavLink>
    </aside>
  )
}
