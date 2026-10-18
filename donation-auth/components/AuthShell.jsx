import { Link } from "react-router-dom";

function AuthShell({ tag, title, sub, wide, alert, children }) {
  return (
    <div className="auth-page">
      <div className={`auth-card ${wide ? "wide" : ""}`}>
        <div className="auth-head">
          <span>Sahaya</span>
          <Link to="/">Back to home</Link>
        </div>
        <span className={`tag ${alert ? "alert" : ""}`}>{tag}</span>
        <h1>{title}</h1>
        <p className="sub">{sub}</p>
        {children}
      </div>
    </div>
  );
}

export function Field({ label, type = "text", placeholder, half }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default AuthShell;
