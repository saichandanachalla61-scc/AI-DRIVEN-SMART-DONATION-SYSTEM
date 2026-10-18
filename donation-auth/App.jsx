import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AdminLogin from "./components/AdminLogin";
import DonorLogin from "./components/DonorLogin";
import DonorSignup from "./components/DonorSignup";
import NgoLogin from "./components/NgoLogin";
import NgoSignup from "./components/NgoSignup";

function Home() {
  return (
    <main className="home">
      <div className="home-top"><span className="logo">♥</span> Sahaya</div>
      <h1>Give where it counts.</h1>
      <p className="lead">
        Sahaya connects donors with verified NGOs and uses AI to match your gift
        to the cause that needs it most.
      </p>

      <div className="stats">
        <div><b>12,400+</b><span>donors</span></div>
        <div><b>340+</b><span>verified NGOs</span></div>
        <div><b>₹4.2 Cr</b><span>donated</span></div>
        <div><b>98%</b><span>impact verified</span></div>
      </div>

      <section className="roles">
        <div className="role">
          <h3>Donor</h3>
          <p>Give, follow your contributions and see the impact with AI suggestions.</p>
          <div className="row">
            <Link className="btn" to="/donor/login">Sign in</Link>
            <Link className="btn primary" to="/donor/signup">Get started</Link>
          </div>
        </div>
        <div className="role">
          <h3>NGO</h3>
          <p>Register your cause, get verified and receive AI-matched donations.</p>
          <div className="row">
            <Link className="btn" to="/ngo/login">Sign in</Link>
            <Link className="btn primary" to="/ngo/signup">Register</Link>
          </div>
        </div>
        <div className="role admin">
          <h3>Admin</h3>
          <p>Verify registrations and oversee every donation from one dashboard.</p>
          <div className="row">
            <Link className="btn dark" to="/admin/login">Admin portal</Link>
          </div>
        </div>
      </section>

      <p className="footer">© 2026 Sahaya. Made for a better world.</p>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donor/login" element={<DonorLogin />} />
      <Route path="/donor/signup" element={<DonorSignup />} />
      <Route path="/ngo/login" element={<NgoLogin />} />
      <Route path="/ngo/signup" element={<NgoSignup />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
