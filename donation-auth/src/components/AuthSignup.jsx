import { useState } from "react";
import AuthShell from "./AuthShell";

export default function AuthSignup({ eyebrow, title, subtitle, fields, footer }) {
  const [values, setValues] = useState({});
  const change = (name) => (e) => setValues({ ...values, [name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirm) {
      alert("Passwords do not match");
      return;
    }
    // ఇక్కడ మీ signup logic పెట్టండి
  };

  return (
    <AuthShell wide eyebrow={eyebrow} title={title} subtitle={subtitle} footer={footer}>
      <form className="auth-form" onSubmit={handleSubmit}>
        {fields.map((f) => (
          <label key={f.name} className={f.full ? "auth-full" : ""}>{f.label}
            {f.type === "textarea" ? (
              <textarea placeholder={f.placeholder} value={values[f.name] || ""} onChange={change(f.name)} />
            ) : (
              <input type={f.type || "text"} placeholder={f.placeholder}
                value={values[f.name] || ""} onChange={change(f.name)} />
            )}
          </label>
        ))}
        <button className="auth-btn" type="submit">CREATE ACCOUNT →</button>
      </form>
    </AuthShell>
  );
}