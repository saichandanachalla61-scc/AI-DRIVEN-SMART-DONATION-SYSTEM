import AuthShell, { Field } from "./AuthShell";

function AdminLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admin Login UI is working!");
  };

  return (
    <AuthShell tag="Staff only" alert title="Admin login" sub="This area is for authorised team members.">
      <div className="notice">Every login attempt is recorded. Unauthorised access is a punishable offence.</div>
      <form onSubmit={handleSubmit}>
        <Field label="Admin email" type="email" placeholder="admin@sahaya.in" />
        <Field label="Password" type="password" placeholder="Enter your password" />
        <a className="forgot" href="#">Forgot password?</a>
        <button className="btn dark full">Open dashboard</button>
      </form>
    </AuthShell>
  );
}

export default AdminLogin;
