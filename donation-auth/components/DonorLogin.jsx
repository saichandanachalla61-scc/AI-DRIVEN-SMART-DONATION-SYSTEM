import { Link } from "react-router-dom";
import AuthShell, { Field } from "./AuthShell";

function DonorLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Donor Login UI is working!");
  };

  return (
    <AuthShell tag="Donor sign in" title="Good to see you again" sub="Sign in to keep giving and track your impact.">
      <form onSubmit={handleSubmit}>
        <Field label="Email" type="email" placeholder="you@email.com" />
        <Field label="Password" type="password" placeholder="Your password" />
        <a className="forgot" href="#">Forgot password?</a>
        <button className="btn primary full">Sign in</button>
      </form>
      <p className="switch">New here? <Link to="/donor/signup">Create an account</Link></p>
    </AuthShell>
  );
}

export default DonorLogin;
