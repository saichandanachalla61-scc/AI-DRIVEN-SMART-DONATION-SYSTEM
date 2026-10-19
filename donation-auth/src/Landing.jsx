import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="dv-page">
      <span className="dv-pill">✦ AI-Powered Smart Donation Platform</span>
      <div className="dv-hero-icon">🧡</div>
      <h1 className="dv-hero-title">Helping Hub</h1>
      <p className="dv-hero-sub">
        Connecting compassionate donors with impactful NGOs — transparent,
        verified, and AI-driven giving made simple.
      </p>

      <div className="dv-stats">
        <div className="dv-stat"><b>12,400+</b><span>Donors Registered</span></div>
        <div className="dv-stat"><b>340+</b><span>Verified NGOs</span></div>
        <div className="dv-stat"><b>₹4.2 Cr</b><span>Donations Processed</span></div>
        <div className="dv-stat"><b>98%</b><span>Impact Verified</span></div>
      </div>

      <div className="dv-roles">
        <div className="dv-role donor">
          <div className="dv-role-icon">💛</div>
          <h2>Donor</h2>
          <p>Make a difference. Track contributions and see real-world impact powered by AI recommendations.</p>
          <div className="dv-role-actions">
            <Link to="/donor/login" className="dv-link-btn">Sign In</Link>
            <Link to="/donor/register" className="dv-link-btn donor">Get Started →</Link>
          </div>
        </div>

        <div className="dv-role ngo">
          <div className="dv-role-icon">🏛️</div>
          <h2>NGO / Organisation</h2>
          <p>Register your cause, get verified and receive transparent, AI-matched donations easily.</p>
          <div className="dv-role-actions">
            <Link to="/ngo/login" className="dv-link-btn">Sign In</Link>
            <Link to="/ngo/register" className="dv-link-btn ngo">Register →</Link>
          </div>
        </div>

        <div className="dv-role admin">
          <div className="dv-role-icon">🛡️</div>
          <h2>Admin</h2>
          <p>Manage the platform, verify registrations, and oversee all donation flows from one dashboard.</p>
          <div className="dv-role-actions">
  <Link to="/admin/login" className="dv-link-btn admin">Admin Portal →</Link>
          </div>
        </div>
      </div>

      <p className="dv-foot">© {new Date().getFullYear()} Helping Hub · Built with 💗 for a better world</p>
    </div>
  );
}