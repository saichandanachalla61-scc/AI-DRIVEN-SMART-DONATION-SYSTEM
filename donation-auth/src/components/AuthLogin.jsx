import { useState } from "react";
import AuthShell from "./AuthShell";

export default function AuthLogin({ eyebrow, title, subtitle, emailPlaceholder, footer, note }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ఇక్కడ మీ login logic పెట్టండి
  };

  return (
    <AuthShell eyebrow={eyebrow} title={title} subtitle={subtitle} footer={footer}>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email address
          <input type="email" placeholder={emailPlaceholder}
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Password
          <input type="password" placeholder="Enter your password"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="auth-btn" type="submit">LOGIN →</button>
      </form>
      {note && <div className="auth-note">{note}</div>}
    </AuthShell>
  );
}