import { Link } from "react-router-dom";
import AuthLogin from "./AuthLogin";

export default function DonorLogin() {
  return <AuthLogin eyebrow="Welcome back" title="Donor Login"
    subtitle="Sign in to your donor account." emailPlaceholder="Enter donor email"
    footer={<>New donor? <Link to="/donor/register">Create account</Link></>} />;
}