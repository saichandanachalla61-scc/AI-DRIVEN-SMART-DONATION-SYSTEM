import { Link } from "react-router-dom";
import AuthShell, { Field } from "./AuthShell";

function NgoLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("NGO Login UI is working!");
  };

  return (
    <AuthShell tag="NGO sign in" title="Organisation sign in" sub="Manage your campaigns and the donations you receive.">
      <form onSubmit={handleSubmit}>
        <Field label="Email" type="email" placeholder="contact@ngo.org" />
        <Field label="Password" type="password" placeholder="Your password" />
        <a className="forgot" href="#">Forgot password?</a>
        <button className="btn primary full">Sign in</button>
      </form>
      <p className="switch">New organisation? <Link to="/ngo/signup">Register now</Link></p>
    </AuthShell>
  );
}

export default NgoLogin;
