import { Link } from "react-router-dom";
import AuthShell, { Field } from "./AuthShell";

function NgoSignup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("NGO Signup UI is working!");
  };

  return (
    <AuthShell wide tag="NGO registration" title="Register your organisation" sub="Get verified and start receiving donations.">
      <form onSubmit={handleSubmit}>
        <h3 className="section">Organisation</h3>
        <div className="grid2">
          <Field label="NGO name" placeholder="Help Foundation" />
          <Field label="Registration number" placeholder="TS/2024/0001234" />
          <Field label="Email" type="email" placeholder="contact@ngo.org" />
          <Field label="Phone" type="tel" placeholder="+91 98765 43210" />
        </div>
        <Field label="Website (optional)" placeholder="https://yourngo.org" />
        <label>About your work</label>
        <textarea placeholder="Describe your mission and the causes you support" />
        <h3 className="section">Address</h3>
        <Field label="Street address" placeholder="Building, street, area" />
        <div className="grid3">
          <Field label="City" placeholder="Hyderabad" />
          <Field label="State" placeholder="Telangana" />
          <Field label="Pincode" placeholder="500001" />
        </div>
        <h3 className="section">Password</h3>
        <div className="grid2">
          <Field label="Password" type="password" placeholder="At least 8 characters" />
          <Field label="Confirm password" type="password" placeholder="Type it again" />
        </div>
        <button className="btn primary full">Register organisation</button>
      </form>
      <p className="switch">Already registered? <Link to="/ngo/login">Sign in</Link></p>
    </AuthShell>
  );
}

export default NgoSignup;
