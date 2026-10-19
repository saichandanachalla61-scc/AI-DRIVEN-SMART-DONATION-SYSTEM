import { Link } from "react-router-dom";
import AuthLogin from "./AuthLogin";

export default function NgoLogin() {
  return <AuthLogin eyebrow="Welcome back" title="NGO Login"
    subtitle="Sign in to your NGO account." emailPlaceholder="Enter ngo email"
    footer={<>New NGO? <Link to="/ngo/register">Create account</Link></>} />;
}