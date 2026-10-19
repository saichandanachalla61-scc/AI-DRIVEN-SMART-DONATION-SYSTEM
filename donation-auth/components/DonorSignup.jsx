import { Link } from "react-router-dom";
import AuthShell, { Field } from "./AuthShell";

function DonorSignup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Donor Signup UI is working!");
  };

  return (
    <AuthShell wide tag="Donor sign up" title="Create your account" sub="It takes about a minute.">
      <form onSubmit={handleSubmit}>
        <h3 className="section">About you</h3>
        <div className="grid2">
          <Field label="First name" placeholder="Ravi" />
          <Field label="Last name" placeholder="Kumar" />
          <Field label="Email" type="email" placeholder="ravi@email.com" />
          <Field label="Phone" type="tel" placeholder="+91 98765 43210" />
        </div>
        <h3 className="section">Address</h3>
        <Field label="Street address" placeholder="House no., street, locality" />
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
        <button className="btn primary full">Create donor account</button>
      </form>
      <p className="switch">Already registered? <Link to="/donor/login">Sign in</Link></p>
    </AuthShell>
  );
}

export default DonorSignup;
