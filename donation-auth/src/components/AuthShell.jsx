import { Link } from "react-router-dom";

export default function AuthShell({ eyebrow, title, subtitle, wide, footer, children }) {
  return (
    <div className="auth-page">
      <div className={`auth-card ${wide ? "wide" : ""}`}>
        <div className="auth-brand">
          <span className="auth-logo">♡</span>
          <span className="auth-name">Helping Hub</span>
        </div>
        {eyebrow && <p className="auth-eyebrow">{eyebrow}</p>}
        <h1 className="auth-title">{title}</h1>
        <p className="auth-sub">{subtitle}</p>
        {children}
        {footer && <div className="auth-footer">{footer}</div>}
        <Link to="/" className="auth-back">← Back to home</Link>
      </div>
    </div>
  );
}